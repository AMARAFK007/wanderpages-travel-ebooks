import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import md5 from "https://esm.sh/blueimp-md5@2.19.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookData = await req.json();
    console.log('Webhook received:', webhookData);

    // Verify webhook signature
    const merchantId = Deno.env.get('CRYPTOMUS_MERCHANT_ID');
    const apiKey = Deno.env.get('CRYPTOMUS_API_KEY');
    
    if (!merchantId || !apiKey) {
      throw new Error('Missing Cryptomus credentials');
    }

    // Verify the webhook signature (MD5 hash)
    const receivedSign = req.headers.get('sign');
    const dataString = btoa(JSON.stringify(webhookData));
    const expectedSignature = md5(dataString + apiKey);

    if (receivedSign !== expectedSignature) {
      console.error('Invalid webhook signature');
      return new Response('Invalid signature', { status: 401 });
    }

    // Process payment status
    if (webhookData.status === 'paid') {
      console.log(`Payment successful for order: ${webhookData.order_id}`);
      // Here you could store payment records in database if needed
    } else if (webhookData.status === 'fail' || webhookData.status === 'cancel') {
      console.log(`Payment failed/cancelled for order: ${webhookData.order_id}`);
    }

    return new Response('OK', { 
      status: 200,
      headers: corsHeaders 
    });

  } catch (error) {
    console.error('Error in payment webhook:', error);
    return new Response('Error processing webhook', { 
      status: 500,
      headers: corsHeaders 
    });
  }
});