import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 5000;

// mongodb connection
const dbURL = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

// starting the server
app.listen(port, () => {
  console.log(`Server is running at port https://localhost:${port}`);
});
