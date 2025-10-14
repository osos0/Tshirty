import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config({ quiet: true });

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(" ✅ DB connected");
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });

const app = express();

app.listen(5000, () => {
  console.log("🚀 Tshirty server running on http://localhost:5000");
});

app.use("/api/user", userRoutes);
