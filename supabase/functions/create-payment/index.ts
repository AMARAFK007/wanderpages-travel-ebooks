import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createHash } from "https://deno.land/std@0.168.0/hash/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CreatePaymentRequest {
  amount: string;
  currency: string;
  order_id: string;
  email: string;
  success_url: string;
  fail_url: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const merchantId = Deno.env.get('CRYPTOMUS_MERCHANT_ID');
    const apiKey = Deno.env.get('CRYPTOMUS_API_KEY');

    if (!merchantId || !apiKey) {
      throw new Error('Missing Cryptomus credentials');
    }

    const requestData: CreatePaymentRequest = await req.json();
    console.log('Payment request:', requestData);

    // Create payment data for Cryptomus
    const paymentData = {
      amount: requestData.amount,
      currency: requestData.currency,
      order_id: requestData.order_id,
      url_success: requestData.success_url,
      url_return: requestData.fail_url,
      url_callback: `${Deno.env.get('SUPABASE_URL')}/functions/v1/payment-webhook`,
      customer_email: requestData.email,
    };

    // Create signature for Cryptomus API (MD5 hash)
    const dataString = btoa(JSON.stringify(paymentData));
    const signature = createHash("md5").update(dataString + apiKey).toString();

    console.log('Creating payment with Cryptomus...');

    // Make request to Cryptomus API
    const response = await fetch('https://api.cryptomus.com/v1/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'merchant': merchantId,
        'sign': signature,
      },
      body: JSON.stringify(paymentData),
    });

    const result = await response.json();
    console.log('Cryptomus response:', result);

    if (!response.ok || result.state !== 0) {
      throw new Error(result.message || 'Failed to create payment');
    }

    return new Response(JSON.stringify({
      success: true,
      payment_url: result.result.url,
      payment_id: result.result.uuid,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in create-payment function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});