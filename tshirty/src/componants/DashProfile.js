// import React, { useState } from "react";
import face from "../imgs/55.jpg";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {
//   deleteUserStart,
//   deleteUserSuccess,
//   deleteUserFailure,
//   signoutSuccess,
// } from "../redux/user/userSlice";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  // const [showModel, setShowModel] = useState(false);
  // const dispatch = useDispatch();
  // const handleDeleteUser = async () => {
  //   // Implement account deletion logic here
  //   setShowModel(false);
  //   try {
  //     dispatch(deleteUserStart());
  //     const res = await fetch("http://localhost:5000/api/user/delete", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${currentUser.token}`,
  //       },
  //     });
  //     const data = await res.json();
  //     if (!res.ok) {
  //       dispatch(deleteUserFailure(data.message));
  //     } else {
  //       dispatch(deleteUserSuccess(data));
  //     }
  //   } catch (error) {
  //     dispatch(deleteUserFailure(error.message));
  //   }
  // };
  // const handleSignout = async () => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/user/signout", {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     if (!res.ok) {
  //       console.log(data.message);
  //     } else {
  //       dispatch(signoutSuccess());
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <>
      <div className="DashProfileFather">
        <h1>Profile</h1>
        <img src={currentUser?.googlePhotoURL || face} alt="pic" />
        <div className="profileDetails">
          {" "}
          <strong>Name : </strong> {currentUser?.username}
        </div>
        <div className="profileDetails">
          {" "}
          <strong>Email : </strong> {currentUser?.email}
        </div>
        <div className="profileDetails">
          <strong>Joined:</strong>{" "}
          {currentUser?.createdAt
            ? new Date(currentUser.createdAt).toLocaleDateString()
            : "Unknown"}
        </div>

        {/* <form> */}
        {/* <img src={currentUser.currentUser.googlePhotoURL || face} alt="pic" />
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
          <input type="password" placeholder="password" id="password" /> */}
        {/* <input
            type="text"
            placeholder="username"
            id="username"
            defaultValue={currentUser?.username}
          /> */}
        {/* <div>Mobile : {currentUser?.mobile}</div> */}

        {/* <input type="password" placeholder="password" id="password" /> */}
        {/* <input
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={currentUser?.email}
          />
          <input type="password" placeholder="password" id="password" /> */}

        {/* <button type="submit" className="updateProfileBtn">
            Update
          </button> */}
        {/* </form> */}

        {/* <div className="deleteSignOutCon">
          <div onClick={() => setShowModel(true)}>Delete Account</div>
          <div onClick={handleSignout}>Sign out</div>
        </div> */}
        {/* {showModel && (
          <div className="deleteModel">
            <div className="deleteModelContent">
              <h2>Are you sure you want to delete your account?</h2>
              <p>This action cannot be undone.</p>
              <div className="deleteModelButtons">
                <button
                  className="confirmDeleteBtn"
                  onClick={() => {
                    // Add account deletion logic here
                    handleDeleteUser();
                  }}
                >
                  Yes, Delete My Account
                </button>
                <button onClick={() => setShowModel(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )} */}
        {/* {error && <span className="errorMsg">{error}</span>} */}
      </div>
    </>
  );
}
