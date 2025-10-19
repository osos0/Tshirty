import React from "react";
import { Link } from "react-router-dom";
import hdyahLogo from "../imgs/firstLogo.jpg";

export default function Signup() {
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
            <form
            // onSubmit={handelSubmit}
            >
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                // onChange={handelsignvalue}
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                // onChange={handelsignvalue}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                // onChange={handelsignvalue}
              />

              <button
                type="submit"
                //    disabled={loading}
              >
                SignUp
                {/* {loading ? "Loading..." : "SIGN UP"} */}
              </button>
            </form>
            {/* <OAuth /> */}
            <div className="haveAccountCon">
              <div>Have an Account</div>
              <Link to={"/signin"}>Sign In</Link>
            </div>
            {/* {errMessage && <div className="errorMessage">{errMessage}</div>} */}
          </div>
        </div>
      </div>
    </>
  );
}
