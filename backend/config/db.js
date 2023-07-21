import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const dbURL =
      process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";
    mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB successfully!");
    });
  } catch (error) {
    console.log("MongoDB connection failed\n", error);
  }
};
