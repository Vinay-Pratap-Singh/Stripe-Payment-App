import "dotenv/config";
import express from "express";
import cors from "cors";
import { checkoutRoute } from "./routes/checkout.js";

const app = express();

// for cors
app.use(
  cors({
    origin: "*",
  })
);

// adding the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;
app.use("/", checkoutRoute);

// starting the server
app.listen(port, () => {
  console.log(`Server is running at port https://localhost:${port}`);
});
