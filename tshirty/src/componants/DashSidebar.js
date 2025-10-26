import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSadCry,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function DashSidebar() {
  return (
    <>
      <div className="profilLab">
        <FontAwesomeIcon icon={faUser} className="DashIcon" />
        <div> Profile</div>
        <div className="adminName">user</div>
      </div>
      <div className="profilsignOut">
        <FontAwesomeIcon icon={faArrowRight} className="DashIcon" />
        <div>Sign Up</div>
        <FontAwesomeIcon icon={faSadCry} className="DashIcon" />
      </div>
    </>
  );
}
