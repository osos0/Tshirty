// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faSadCry,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { signoutSuccess } from "../redux/user/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// export default function DashSidebar() {
//   const dispatch = useDispatch();
//   const currentUser = useSelector((state) => state.user.currentUser);

//   const handleSignout = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/user/signout", {
//         method: "POST",
//         credentials: "include",
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
//   return (
//     <>
//       <h1>Statues</h1>
//       <div className="profilLab">
//         <FontAwesomeIcon icon={faUser} className="DashIcon" />
//         <div> Profile</div>
//         <div className="adminName">
//           {currentUser.isAdmin ? "Admin" : "User"}
//         </div>
//       </div>
//       <div className="profilsignOut" onClick={handleSignout}>
//         <FontAwesomeIcon icon={faArrowRight} className="DashIcon" />
//         <div>Sign Up</div>
//         <FontAwesomeIcon icon={faSadCry} className="DashIcon" />
//       </div>
//       <div className="profilsignOut" onClick={handleSignout}>
//         <FontAwesomeIcon icon={faArrowRight} className="DashIcon" />
//         <div>Sign Up</div>
//         <FontAwesomeIcon icon={faSadCry} className="DashIcon" />
//       </div>

//       {currentUser.isAdmin && (
//         <Link to="/admin-panel">
//           <button type="submit" className="updateBtn">
//             Go to Admin Panel
//           </button>
//         </Link>
//       )}
//     </>
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSadCry,
  faUser,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashSidebar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  // ⬇️ تنقل لأسفل الصفحة عند قسم الأوردرز
  const scrollToOrders = () => {
    const element = document.getElementById("myOrdersSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/signout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Status</h1>

      {/* Profile */}
      <div className="profilLab">
        <FontAwesomeIcon icon={faUser} className="DashIcon" />
        <div>Profile</div>
        <div className="adminName">
          {currentUser.isAdmin ? "Admin" : "User"}
        </div>
      </div>

      {/* My Orders */}
      <div className="profilsignOut" onClick={scrollToOrders}>
        <FontAwesomeIcon icon={faClipboardList} className="DashIcon" />
        <div>My Orders</div>
        <FontAwesomeIcon icon={faArrowRight} className="DashIcon" />
      </div>

      {/* Sign out */}
      <div className="profilsignOut" onClick={handleSignout}>
        <FontAwesomeIcon icon={faArrowRight} className="DashIcon" />
        <div>Sign Out</div>
        <FontAwesomeIcon icon={faSadCry} className="DashIcon" />
      </div>

      {/* Admin panel */}
      {currentUser.isAdmin && (
        <Link to="/admin-panel">
          <button type="submit" className="updateBtn">
            Go to Admin Panel
          </button>
        </Link>
      )}
    </>
  );
}
