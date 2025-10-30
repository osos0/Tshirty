import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "Test User data retrieved successfully" });
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return res
      .status(403)
      .json({ message: "You are not allowed to delete this user" });
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "Signout successful" });
  } catch (error) {
    next(error);
  }
};
