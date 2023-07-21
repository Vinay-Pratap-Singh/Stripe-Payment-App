import { Router } from "express";
const router = Router();

export const checkoutRoute = router.post(
  "/create-checkout-session",
  async (req, res) => {
    return res.json({
      message: "check",
    });
  }
);
