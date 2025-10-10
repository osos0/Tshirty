import React from "react";
import { Link } from "react-router-dom";
import girl from "../imgs/55.jpg";

// import MoreTshirt from "../imgs/More-tshirt.jpg";

export default function Whatshot() {
  return (
    <>
      <div className="container cardMother">
        <h1>What's hot</h1>
        <div className="row rowConOfCard">
          <div className="col-lg-3 col-md-3 col-6 clConOfCard">
            <div className="cardImgCon">
              <img src={girl} alt="product" />
              <div className="cardlink1">
                <Link to="/">T-Shirts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6 clConOfCard">
            <div className="cardImgCon">
              <img src={girl} alt="product" />
              <div className="cardlink2">
                <Link to="/">Mugs</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6 clConOfCard">
            <div className="cardImgCon">
              <img src={girl} alt="product" />
              <div className="cardlink3">
                <Link to="/">Hats & Caps</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6 clConOfCard">
            <div className="cardImgCon">
              <img src={girl} alt="product" />
              <div className="cardlink4">
                <Link to="/">Mugs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
