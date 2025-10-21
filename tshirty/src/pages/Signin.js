import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import hdyahLogo from "../imgs/firstLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function Signin() {
  const [formData, setFormData] = useState({});
  // const [errMessage, setErrMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return setErrMessage("please fill all the fields");
      return dispatch(signInFailure("please fill all the fields"));
    }
    try {
      // setLoading(true);
      // setErrMessage(null);
      dispatch(signInStart());
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // ✅ to allow cookies (for JWT)
      });
      const data = await response.json();
      if (!response.ok) {
        // return setErrMessage(data.message || "Sign-in failed");
        return dispatch(signInFailure(data.message || "Sign-in failed"));
      }
      dispatch(signInSuccess(data));
      navigate("/");

      // if (data.success === false) {
      //   // return setErrMessage(data.message);
      //   dispatch(signInFailure(data.message));
      // }
      // // setLoading(false);
      // if (response.ok) {
      //   dispatch(signInSuccess(data));

      //   navigate("/");
      // }
    } catch (error) {
      // setErrMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <>
      <div className="container SignUp">
        <div className="row rowCon">
          <div className="col-lg-6 col-md-6 col-sm-12 firstrowCon">
            {/* <h2 className="logo">Hdyah</h2>
            <h3>Store</h3> */}
            <img src={hdyahLogo} alt="Signup Illustration" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 secondrowCon">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />

              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "SIGN IN"}
              </button>
            </form>
            {/* <OAuth /> */}
            <div className="haveAccountCon">
              <div>Dont Have an Account</div>
              <Link to={"/signup"}>Sign Up</Link>
            </div>
            {/* <div className="errorMessage">{errMessage}</div> */}
            {/* {errMessage && <div className="errorMessage">{errMessage}</div>}*/}
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
