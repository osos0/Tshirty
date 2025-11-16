import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // Default 1
  const limit = 5; // Users per page
  const skip = (page - 1) * limit;

  const searchQuery = req.query.search || "";

  try {
    const users = await User.find({
      email: { $regex: searchQuery, $options: "i" },
    })
      .skip(skip)
      .limit(limit)
      .select("-password"); // Hide password

    const totalUsers = await User.countDocuments({
      email: { $regex: searchQuery, $options: "i" },
    });

    res.status(200).json({
      status: "success",
      users,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      totalUsers,
    });
  } catch (error) {
    next(error);
  }
};
