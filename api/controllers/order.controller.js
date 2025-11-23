import Order from "../models/order.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const { items, address } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
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
