import { Router } from "express";
import stripe from "stripe";
const router = Router();

export const checkoutRoute = router.post(
  "/create-checkout-session",
  async (req, res) => {
    const API_KEY = process.env.STRIPE_API_KEY;
    const FRONTEND = process.env.FRONTEND;
    const stripeInstance = stripe(API_KEY);

    const line_items = req.body.map((item) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: item?.productName,
            images: [item?.imageURL],
            description: item?.description,
            metadata: {
              id: item?.id,
            },
          },
          unit_amount: item?.price * 100,
        },
        quantity: item?.quantity,
      };
    });

    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      phone_number_collection: {
        enabled: true,
      },
      mode: "payment",
      success_url: `${FRONTEND}/checkout/success`,
      cancel_url: `${FRONTEND}/cart`,
    });

    res.send({ url: session.url });
  }
);
