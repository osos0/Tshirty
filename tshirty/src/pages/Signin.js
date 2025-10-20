import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import hdyahLogo from "../imgs/firstLogo.jpg";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrMessage("please fill all the fields");
    }
    try {
      setLoading(true);
      setErrMessage(null);
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        return setErrMessage(data.message);
      }
      setLoading(false);
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrMessage(error.message);
      setLoading(false);
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
            <form onSubmit={handelSubmit}>
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
            {errMessage && <div className="errorMessage">{errMessage}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
