import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSadCry,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function DashSidebar() {
  const dispatch = useDispatch();

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
      <h1>Statues</h1>
      <div className="profilLab">
        <FontAwesomeIcon icon={faUser} className="DashIcon" />
        <div> Profile</div>
        <div className="adminName">user</div>
      </div>
      <div className="profilsignOut" onClick={handleSignout}>
        <FontAwesomeIcon icon={faArrowRight} className="DashIcon" />
        <div>Sign Up</div>
        <FontAwesomeIcon icon={faSadCry} className="DashIcon" />
      </div>
    </>
  );
}
