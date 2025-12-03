// import express from "express";
// import multer from "multer";
// import {
//   createOrder,
//   deleteOrder,
//   getAllOrders,
//   getUserOrders,
//   updateOrderStatus,
// } from "../controllers/order.controller.js";
// import { verifyUser } from "../utils/verifyUser.js";
// import { verifyAdmin } from "../utils/verifyAdmin.js";

// const router = express.Router();

// // إعداد multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/orders");
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `order-${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage });

// // router.post("/create", verifyUser, upload.single("image"), createOrder);
// // router.post("/create", verifyUser, upload.array("images", 20), createOrder);

// router.get("/my-orders", verifyUser, getUserOrders);
// router.get("/all", verifyUser, verifyAdmin, getAllOrders);
// router.put("/:id/status", verifyUser, verifyAdmin, updateOrderStatus);
// router.delete("/:id", verifyUser, verifyAdmin, deleteOrder);

// export default router;

import express from "express";
import multer from "multer";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import fs from "fs";
import path from "path";

const router = express.Router();

/*===========================================
=     Multer TEMP STORAGE (مهم جداً)        =
===========================================*/
// Ensure tmp folder exists
const tmpPath = path.join("uploads", "tmp");

if (!fs.existsSync(tmpPath)) {
  fs.mkdirSync(tmpPath, { recursive: true });
}

// ✨ نخلي الصور تروح لمجلد tmp الأول
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/tmp"); // ← مجلد مؤقت
  },
  filename: (req, file, cb) => {
    const uniqueName = `img-${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/*===========================================
=                  ROUTES                   =
===========================================*/

router.post("/create", verifyUser, upload.array("images", 20), createOrder);

router.get("/my-orders", verifyUser, getUserOrders);
router.get("/all", verifyUser, verifyAdmin, getAllOrders);
router.put("/:id/status", verifyUser, verifyAdmin, updateOrderStatus);
router.delete("/:id", verifyUser, verifyAdmin, deleteOrder);

export default router;
