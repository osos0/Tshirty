import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";
import privateUserRoutes from "./routes/private.user.route.js";
import orderRoutes from "./routes/order.routes.js";
import cookieParser from "cookie-parser";
import path from "path";

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

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ⬅️ مهم جدًا لعرض الصور المخزنة
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.listen(5000, () => {
  console.log("🚀 Tshirty server running on http://localhost:5000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", privateUserRoutes);
app.use("/api/orders", orderRoutes);

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    status: false,
    statusCode,
    message,
  });
});
