import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Pricing tiers
const PRICING = {
  live: {
    amount: 30000, // $300 in cents
    name: "AI App Bootcamp - Live Classes",
    description: "14-day online bootcamp with live sessions with Seyitbek"
  },
  recordings: {
    amount: 14900, // $149 in cents
    name: "AI App Bootcamp - Recordings Only",
    description: "Full access to all recorded lessons and materials"
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Get customer email and tier from request
    const { email, tier } = await req.json().catch(() => ({ email: "guest@example.com", tier: "live" }));
    
    // Default to live tier if invalid tier provided
    const selectedTier = tier === "recordings" ? "recordings" : "live";
    const pricing = PRICING[selectedTier];
    
    console.log("Creating payment session for tier:", selectedTier, "Amount:", pricing.amount);

    // Check if customer already exists
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log("Found existing customer:", customerId);
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { 
              name: pricing.name,
              description: pricing.description
            },
            unit_amount: pricing.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success`,
      cancel_url: `${req.headers.get("origin")}/payment-canceled`,
    });

    console.log("Payment session created:", session.id);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
