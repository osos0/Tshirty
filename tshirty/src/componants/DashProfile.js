import React from "react";
import face from "../imgs/55.jpg";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const currentUser = useSelector((state) => state.user);
  return (
    <>
      <div className="DashProfileFather">
        <h1>Profile</h1>
        <form>
          <img src={currentUser.currentUser.googlePhotoURL || face} alt="pic" />
          <input
            type="text"
            placeholder="username"
            id="username"
            defaultValue={currentUser.currentUser.username}
          />
          <input
            type="Email"
            placeholder="Email"
            id="Email"
            defaultValue={currentUser.currentUser.email}
          />
          <input type="password" placeholder="password" id="password" />
          <button type="submit" className="updateProfileBtn">
            Update
          </button>
        </form>

        <div className="deleteSignOutCon">
          <div>Delete Account</div>
          <div>Sign out</div>
        </div>
      </div>
    </>
  );
}
