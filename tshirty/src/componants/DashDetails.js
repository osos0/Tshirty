// import React from "react";
// import { useSelector } from "react-redux";

// export default function DashDetails() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <>
//       <div className="DashDetailsFather">
//         <h1>Account Details</h1>

//         <div className="profileDetails">
//           <strong>Name:</strong> {currentUser?.username || "No name"}
//         </div>

//         <div className="profileDetails">
//           <strong>Email:</strong> {currentUser?.email || "No email"}
//         </div>

//         <div className="profileDetails">
//           <strong>Mobile:</strong>{" "}
//           {currentUser?.mobile ? (
//             currentUser.mobile
//           ) : (
//             <span className="text-muted">No mobile number</span>
//           )}
//         </div>

//         <div className="profileDetails">
//           <strong>Address:</strong>{" "}
//           {currentUser?.address ? (
//             currentUser.address
//           ) : (
//             <span className="text-muted">No address</span>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// export default function DashDetails() {
//   const { currentUser } = useSelector((state) => state.user);

//   // ✅ إعداد state محلي لتعبئة الفورم بالبيانات الحالية
//   const [formData, setFormData] = useState({
//     username: currentUser?.username || "",
//     email: currentUser?.email || "",
//     mobile: currentUser?.mobile || "",
//     mobile2: currentUser?.mobile2 || "",
//     address: {
//       building: currentUser?.address?.building || "",
//       floor: currentUser?.address?.floor || "",
//       apartment: currentUser?.address?.apartment || "",
//       city: currentUser?.address?.city || "",
//       notes: currentUser?.address?.notes || "",
//     },
//   });

//   // ✅ تحديث القيم داخل الفورم
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // لو الحقل من العنوان
//     if (name.startsWith("address.")) {
//       const key = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         address: { ...prev.address, [key]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated data:", formData);
//     // هنا ممكن تضيف الطلب (PUT) لتحديث البيانات لاحقًا
//   };

//   return (
//     <div className="DashDetailsFather">
//       <h1>Account Details</h1>

//       <form onSubmit={handleSubmit} className="detailsForm">
//         <div className="formGroup">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="formGroup">
//           <label>Mobile:</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="formGroup">
//           <label>Mobile 2:</label>
//           <input
//             type="text"
//             name="mobile2"
//             placeholder="Optional"
//             value={formData.mobile2}
//             onChange={handleChange}
//           />
//         </div>

//         <h3>Address</h3>

//         <div className="addressGrid">
//           <input
//             type="text"
//             name="address.building"
//             placeholder="Building"
//             value={formData.address.building}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="address.floor"
//             placeholder="Floor"
//             value={formData.address.floor}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="address.apartment"
//             placeholder="Apartment"
//             value={formData.address.apartment}
//             onChange={handleChange}
//           />
//           {/* <input
//             type="text"
//             name="address.city"
//             placeholder="City / Governorate"
//             value={formData.address.city}
//             onChange={handleChange}
//           /> */}
//           <select
//             name="address.city"
//             value={formData.address.city}
//             onChange={handleChange}
//           >
//             <option value="">Select City</option>
//             <option value="Cairo">القاهرة</option>
//             <option value="Giza">الجيزة</option>
//             <option value="Alexandria">الإسكندرية</option>
//             <option value="Dakahlia">الدقهلية</option>
//             <option value="Red Sea">البحر الأحمر</option>
//             <option value="Beheira">البحيرة</option>
//             <option value="Fayoum">الفيوم</option>
//             <option value="Gharbia">الغربية</option>
//             <option value="Ismailia">الإسماعيلية</option>
//             <option value="Menofia">المنوفية</option>
//             <option value="Minya">المنيا</option>
//             <option value="Qalyubia">القليوبية</option>
//             <option value="New Valley">الوادي الجديد</option>
//             <option value="Suez">السويس</option>
//             <option value="Aswan">أسوان</option>
//             <option value="Assiut">أسيوط</option>
//             <option value="Beni Suef">بني سويف</option>
//             <option value="Port Said">بورسعيد</option>
//             <option value="Damietta">دمياط</option>
//             <option value="Sharkia">الشرقية</option>
//             <option value="South Sinai">جنوب سيناء</option>
//             <option value="Kafr El Sheikh">كفر الشيخ</option>
//             <option value="Matruh">مطروح</option>
//             <option value="Luxor">الأقصر</option>
//             <option value="Qena">قنا</option>
//             <option value="North Sinai">شمال سيناء</option>
//             <option value="Sohag">سوهاج</option>
//           </select>

//           <input
//             className="notebox"
//             type="text"
//             name="address.notes"
//             placeholder="Notes"
//             value={formData.address.notes}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="updateBtn">
//           Update Account Details
//         </button>
//       </form>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";

export default function DashDetails() {
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    mobile: currentUser?.mobile || "",
    mobile2: currentUser?.mobile2 || "",
    address: {
      building: currentUser?.address?.building || "",
      floor: currentUser?.address?.floor || "",
      apartment: currentUser?.address?.apartment || "",
      city: currentUser?.address?.city || "",
      notes: currentUser?.address?.notes || "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart());

    try {
      const res = await fetch(
        `http://localhost:5000/api/user/update/${currentUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }

      dispatch(updateUserSuccess(data));
      alert("✅ Profile updated successfully!");
    } catch (error) {
      console.error("❌ Update error:", error);
      dispatch(updateUserFailure(error.message));
      alert("❌ Failed to update profile!");
    }
  };

  return (
    <div className="DashDetailsFather">
      <h1>Account Details</h1>
      <form className="detailsForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Name:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        {/* <div className="formGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div> */}

        <div className="formGroup">
          <label>Mobile 1:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="formGroup">
          <label>Mobile 2 (optional):</label>
          <input
            type="text"
            name="mobile2"
            value={formData.mobile2}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <h3>Address</h3>
        <div className="addressGrid">
          <input
            type="text"
            name="address.building"
            placeholder="Building"
            value={formData.address.building}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="text"
            name="address.floor"
            placeholder="Floor"
            value={formData.address.floor}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="text"
            name="address.apartment"
            placeholder="Apartment"
            value={formData.address.apartment}
            onChange={handleChange}
            disabled={loading}
          />

          <select
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="">Select Governorate</option>
            <option value="Cairo">القاهرة</option>
            <option value="Giza">الجيزة</option>
            <option value="Alexandria">الإسكندرية</option>
            <option value="Dakahlia">الدقهلية</option>
            <option value="Beheira">البحيرة</option>
            <option value="Sharqia">الشرقية</option>
            <option value="Gharbia">الغربية</option>
            <option value="Menofia">المنوفية</option>
            <option value="Qalyubia">القليوبية</option>
            <option value="Fayoum">الفيوم</option>
            <option value="Beni Suef">بني سويف</option>
            <option value="Minya">المنيا</option>
            <option value="Assiut">أسيوط</option>
            <option value="Sohag">سوهاج</option>
            <option value="Qena">قنا</option>
            <option value="Luxor">الأقصر</option>
            <option value="Aswan">أسوان</option>
            <option value="Ismailia">الإسماعيلية</option>
            <option value="Suez">السويس</option>
            <option value="Port Said">بورسعيد</option>
            <option value="Damietta">دمياط</option>
            <option value="Matruh">مطروح</option>
            <option value="North Sinai">شمال سيناء</option>
            <option value="South Sinai">جنوب سيناء</option>
            <option value="New Valley">الوادي الجديد</option>
            <option value="Red Sea">البحر الأحمر</option>
          </select>

          <input
            type="text"
            name="address.notes"
            placeholder="Notes"
            value={formData.address.notes}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <button type="submit" className="updateBtn" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
