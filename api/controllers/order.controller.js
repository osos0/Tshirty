import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import fs from "fs";
import path from "path";

// export const createOrder = async (req, res, next) => {
//   try {
//     const { items, address } = req.body;

//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const totalPrice = items.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     const newOrder = await Order.create({
//       user: req.user.id,
//       items,
//       address: address || {},
//       totalPrice,
//     });

//     res.status(201).json({
//       status: "success",
//       message: "Order created successfully",
//       order: newOrder,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const createOrder = async (req, res, next) => {
//   try {
//     const { items, address } = req.body;

//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const totalPrice = items.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     const newOrder = await Order.create({
//       user: req.user.id,
//       items,
//       address: address || {},
//       totalPrice,
//       mobile: req.user.mobile,
//       mobile2: req.user.mobile2 || "",
//     });

//     res.status(201).json({
//       status: "success",
//       message: "Order created successfully",
//       order: newOrder,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const createOrder = async (req, res, next) => {
//   try {
//     const { items, address } = req.body;

//     // Multer image
//     const imageFile = req.file;

//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const userData = await User.findById(req.user.id);
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const parsedItems = JSON.parse(items); // لان FormData بيبعتهاTEXT

//     if (
//       !parsedItems ||
//       !Array.isArray(parsedItems) ||
//       parsedItems.length === 0
//     ) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const parsedAddress = address ? JSON.parse(address) : {};

//     const totalPrice = parsedItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     // إنشاء الأوردر بدون صورة
//     const newOrder = await Order.create({
//       user: req.user.id,
//       items: parsedItems,
//       address: parsedAddress,
//       totalPrice,
//       mobile: userData.mobile,
//       mobile2: userData.mobile2 || "",
//       image: "", // placeholder
//     });

//     // لو فيه صورة جاية من multer
//     if (imageFile) {
//       const newPath = `uploads/orders/order-${newOrder._id}.png`;

//       fs.renameSync(imageFile.path, newPath);

//       newOrder.image = `/${newPath}`;
//       await newOrder.save();
//     }

//     return res.status(201).json({
//       status: "success",
//       message: "Order created successfully",
//       order: newOrder,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

/////////////////////////////////

// export const createOrder = async (req, res, next) => {
//   try {
//     const { items, address } = req.body;

//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const userData = await User.findById(req.user.id);
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const parsedItems = JSON.parse(items);
//     const parsedAddress = address ? JSON.parse(address) : {};

//     if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     // === الصور القادمة من multer ===
//     const imageFiles = req.files; // array

//     // ربط كل صورة بالمنتج اللي بنفس الترتيب
//     const itemsWithImages = parsedItems.map((item, index) => {
//       const img = imageFiles[index]
//         ? `/uploads/orders/${imageFiles[index].filename}`
//         : "";
//       return { ...item, image: img };
//     });

//     const totalPrice = itemsWithImages.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     const newOrder = await Order.create({
//       user: req.user.id,
//       items: itemsWithImages,
//       address: parsedAddress,
//       totalPrice,
//       mobile: userData.mobile,
//       mobile2: userData.mobile2 || "",
//     });

//     return res.status(201).json({
//       status: "success",
//       message: "Order created successfully",
//       order: newOrder,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
///////////////////////////////////////////////////////////

// export const createOrder = async (req, res, next) => {
//   try {
//     const { items, address } = req.body;

//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const userData = await User.findById(req.user.id);
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const parsedItems = JSON.parse(items);
//     const parsedAddress = address ? JSON.parse(address) : {};

//     if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     // صور multer
//     const imageFiles = req.files || [];

//     // الخطوة 1: إنشاء الأوردر بدون صور
//     const newOrder = await Order.create({
//       user: req.user.id,
//       items: parsedItems,
//       address: parsedAddress,
//       totalPrice: parsedItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       ),
//       mobile: userData.mobile,
//       mobile2: userData.mobile2 || "",
//     });

//     // الخطوة 2: إنشاء فولدر باسم orderId
//     const orderFolder = path.join("uploads/orders", newOrder._id.toString());

//     if (!fs.existsSync(orderFolder)) {
//       fs.mkdirSync(orderFolder, { recursive: true });
//     }

//     // الخطوة 3: نقل كل صورة للفولدر
//     const itemsWithImages = parsedItems.map((item, index) => {
//       if (!imageFiles[index]) return { ...item, image: "" };

//       const fileExt = path.extname(imageFiles[index].originalname) || ".png";
//       const fileName = `item-${index}${fileExt}`;
//       const finalPath = path.join(orderFolder, fileName);

//       fs.renameSync(imageFiles[index].path, finalPath);

//       return {
//         ...item,
//         image: `/uploads/orders/${newOrder._id}/${fileName}`,
//       };
//     });

//     // الخطوة 4: حفظ الصور المربوطة
//     newOrder.items = itemsWithImages;
//     await newOrder.save();

//     return res.status(201).json({
//       status: "success",
//       message: "Order created successfully",
//       order: newOrder,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

///////////////////////////////////////////////////////////
export const createOrder = async (req, res, next) => {
  try {
    const { items, address } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userData = await User.findById(req.user.id);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const parsedItems = JSON.parse(items);
    const parsedAddress = address ? JSON.parse(address) : {};

    if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // جميع الصور
    const imageFiles = req.files || [];

    // إنشاء الأوردر بدون الصور
    const newOrder = await Order.create({
      user: req.user.id,
      items: parsedItems,
      address: parsedAddress,
      totalPrice: parsedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      mobile: userData.mobile,
      mobile2: userData.mobile2 || "",
    });

    // إنشاء فولدر باسم الـ orderId
    const orderFolder = path.join("uploads/orders", newOrder._id.toString());
    if (!fs.existsSync(orderFolder)) {
      fs.mkdirSync(orderFolder, { recursive: true });
    }

    // ربط كل صورة بالمنتج المناسب
    const updatedItems = parsedItems.map((item, index) => {
      const file = imageFiles[index];
      if (!file) return { ...item, image: "" };

      // التأكد من وجود امتداد
      let ext = path.extname(file.originalname);
      if (!ext) ext = ".png"; // مهم جدًا للتعامل مع blob

      const fileName = `item-${index}${ext}`;
      const finalPath = path.join(orderFolder, fileName);

      // نقل الصورة للفولدر النهائي
      fs.renameSync(file.path, finalPath);

      return {
        ...item,
        image: `/uploads/orders/${newOrder._id}/${fileName}`,
      };
    });

    // حفظ الصور المربوطة
    newOrder.items = updatedItems;
    await newOrder.save();

    return res.status(201).json({
      status: "success",
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    next(error);
  }
};

///////////////////////////////////////////////////////////

export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json({ orders });
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    const orders = await Order.find().populate("user", "username email mobile");

    res.status(200).json({
      status: "success",
      orders,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    const valid = ["pending", "processing", "completed", "cancelled"];
    if (!valid.includes(status))
      return res.status(400).json({ message: "Invalid status" });

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    next(err);
  }
};
