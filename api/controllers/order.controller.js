import Order from "../models/order.model.js";
import User from "../models/user.model.js";

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

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const newOrder = await Order.create({
      user: req.user.id,
      items,
      address: address || {},
      totalPrice,
      mobile: userData.mobile,
      mobile2: userData.mobile2 || "",
    });

    res.status(201).json({
      status: "success",
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    next(error);
  }
};

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
