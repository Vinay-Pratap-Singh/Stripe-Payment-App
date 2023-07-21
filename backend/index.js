import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
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

// connecting to database
const port = process.env.PORT || 8000;
connectDB();

app.use("/", checkoutRoute);

// starting the server
app.listen(port, () => {
  console.log(`Server is running at port https://localhost:${port}`);
});
