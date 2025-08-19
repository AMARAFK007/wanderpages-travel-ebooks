import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    // Verify the webhook signature
    const receivedSign = req.headers.get('sign');
    const dataString = btoa(JSON.stringify(webhookData));
    
    const expectedSignature = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(apiKey),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    ).then(key => 
      crypto.subtle.sign('HMAC', key, new TextEncoder().encode(dataString + merchantId))
    ).then(signature => 
      Array.from(new Uint8Array(signature))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
    );

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