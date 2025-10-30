import React from "react";
import { useSelector } from "react-redux";

export default function DashDetails() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="DashProfileFather">
        <h1>Account Details</h1>

        <div className="userInfoSection">
          <div className="profileDetails">
            <strong>Name:</strong> {currentUser?.username || "No name"}
          </div>

          <div className="profileDetails">
            <strong>Email:</strong> {currentUser?.email || "No email"}
          </div>

          <div className="profileDetails">
            <strong>Mobile:</strong>{" "}
            {currentUser?.mobile ? (
              currentUser.mobile
            ) : (
              <span className="text-muted">No mobile number</span>
            )}
          </div>

          <div className="profileDetails">
            <strong>Address:</strong>{" "}
            {currentUser?.address ? (
              currentUser.address
            ) : (
              <span className="text-muted">No address</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
