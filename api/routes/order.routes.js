import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

const router = express.Router();

router.post("/create", verifyUser, createOrder);
router.get("/my-orders", verifyUser, getUserOrders);
router.get("/all", verifyUser, verifyAdmin, getAllOrders);
router.put("/:id/status", verifyUser, verifyAdmin, updateOrderStatus);

export default router;
