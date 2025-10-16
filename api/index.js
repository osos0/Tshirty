import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";

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

app.use(express.json());

app.listen(5000, () => {
  console.log("🚀 Tshirty server running on http://localhost:5000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
