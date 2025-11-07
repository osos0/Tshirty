// import User from "../models/user.model.js";

// export const test = (req, res) => {
//   res.json({ message: "Test User data retrieved successfully" });
// };

// // export const deleteUser = async (req, res, next) => {
// //   if (req.user.id !== req.params.userId) {
// //     return res
// //       .status(403)
// //       .json({ message: "You are not allowed to delete this user" });
// //   }
// //   try {
// //     await User.findByIdAndDelete(req.params.userId);
// //     res.status(200).json("User deleted successfully");
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// export const signout = (req, res, next) => {
//   try {
//     res.clearCookie("access_token");
//     res.status(200).json({ message: "Signout successful" });
//   } catch (error) {
//     next(error);
//   }
// };

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// ✅ دالة اختبار الاتصال
export const test = (req, res) => {
  res.json({ message: "Test User data retrieved successfully" });
};

// ✅ تحديث بيانات المستخدم
export const updateUser = async (req, res, next) => {
  // تحقق من أن المستخدم الذي يقوم بالتعديل هو نفسه صاحب الحساب
  if (req.user.id !== req.params.userId) {
    return res
      .status(403)
      .json({ message: "You are not allowed to update this user" });
  }

  try {
    const updateFields = {
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
      mobile2: req.body.mobile2,
      address: {
        building: req.body.address?.building || "",
        floor: req.body.address?.floor || "",
        apartment: req.body.address?.apartment || "",
        city: req.body.address?.city || "",
        notes: req.body.address?.notes || "",
      },
    };

    // في حالة إذا كان هناك تعديل على كلمة المرور لاحقًا
    if (req.body.password) {
      updateFields.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: updateFields },
      { new: true }
    );

    // عدم إرسال الباسورد في الرد
    const { password, ...userData } = updatedUser._doc;

    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

// ✅ تسجيل الخروج
export const signout = (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "Signout successful" });
  } catch (error) {
    next(error);
  }
};

// ❌ الحذف (اختياري)
// export const deleteUser = async (req, res, next) => {
//   if (req.user.id !== req.params.userId) {
//     return res
//       .status(403)
//       .json({ message: "You are not allowed to delete this user" });
//   }
//   try {
//     await User.findByIdAndDelete(req.params.userId);
//     res.status(200).json("User deleted successfully");
//   } catch (error) {
//     next(error);
//   }
// };
