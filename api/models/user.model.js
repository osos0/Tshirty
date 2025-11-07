// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     mobile: {
//       type: String,
//       required: false,
//       unique: true,
//       trim: true,
//     },
//     // address: {
//     //   type: String,
//     //   required: false,
//     //   unique: true,
//     //   trim: true,
//     // },
//     password: { type: String, required: true },
//     googlePhotoURL: {
//       type: String,
//       default:
//         "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);

// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    mobile2: {
      type: String,
      default: "",
    },
    address: {
      building: { type: String, default: "" }, // رقم المبنى
      floor: { type: String, default: "" }, // الدور
      apartment: { type: String, default: "" }, // الشقة
      city: { type: String, default: "" }, // المحافظة
      notes: { type: String, default: "" }, // ملاحظات إضافية
    },
    password: {
      type: String,
      required: true,
    },
    googlePhotoURL: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
