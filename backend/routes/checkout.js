import { Router } from "express";
import stripe from "stripe";
const router = Router();

export const checkoutRoute = router.post(
  "/create-checkout-session",
  async (req, res) => {
    const API_KEY = process.env.STRIPE_API_KEY;
    const FRONTEND = process.env.FRONTEND;
    const stripeInstance = stripe(API_KEY);

    const session = await stripeInstance.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${FRONTEND}/checkout/success`,
      cancel_url: `${FRONTEND}/checkout/fail`,
    });

    res.send({ url: session.url });
  }
);
