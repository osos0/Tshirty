import express from "express";
import { createOrder, getUserOrders } from "../controllers/order.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, createOrder);
router.get("/my-orders", verifyUser, getUserOrders);

export default router;
