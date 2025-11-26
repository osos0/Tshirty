import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],

    totalPrice: { type: Number, required: true },

    mobile: { type: String, required: true },
    mobile2: { type: String, default: "" },

    status: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"],
      default: "pending",
    },

    address: {
      building: { type: String, required: true },
      floor: { type: String, required: true },
      apartment: { type: String, required: true },
      city: { type: String, required: true },
      notes: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
/////////////////////////////////////////////////////////////////////

// import mongoose from "mongoose";
// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

//     items: [
//       {
//         productId: { type: String, required: true },
//         productType: { type: String, required: true },
//         color: { type: String, default: "" },
//         printPostion: { type: String, default: "Center" },
//         printPostionDimantionsX: { type: String, default: "0" },
//         printPostionDimantionsY: { type: String, default: "0" },
//         printPostionZoom: { type: String, default: "0" },
//         frontOrBack: { type: String, default: "Front" },
//         designPicName: { type: String, required: true },
//         textStatement: { type: String, default: "" },
//         textFontName: { type: String, default: "" },
//         textColor: { type: String, default: "Black" },
//         textBorder: { type: String, default: "" },
//         textHereFontName: { type: String, default: "" },
//         printMethod: { type: String, default: "Print" },
//         name: { type: String, required: true },
//         quantity: { type: Number, required: true },
//         price: { type: Number, required: true },
//       },
//     ],

//     totalPrice: { type: Number, required: true },

//     status: {
//       type: String,
//       enum: ["pending", "processing", "completed", "cancelled"],
//       default: "pending",
//     },

//     address: {
//       building: { type: String, required: true },
//       floor: { type: String, required: true },
//       apartment: { type: String, required: true },
//       city: { type: String, required: true },
//       notes: { type: String, default: "" },
//       phone: { type: String, required: true },
//     },
//   },
//   { timestamps: true }
// );
// const Order = mongoose.model("Order", orderSchema);
// export default Order;
