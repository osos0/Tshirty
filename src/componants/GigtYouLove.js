import React from "react";
import { Link } from "react-router-dom";
import girl from "../imgs/55.jpg";
import cup from "../imgs/cup22.jpg";
import cap from "../imgs/cap5.jpg";
import MoreTshirt from "../imgs/More-tshirt.jpg";

export default function GiftYouLove() {
  return (
    <>
      <div className="container cardMother">
        <h1>Gift You Love</h1>
        <div className="row rowConOfCard">
          <div className="col-lg-3 col-md-6 col-sm-12 colConOfCard">
            <div className="cardImgCon">
              <img src={girl} alt="product" />
            </div>
            <div className="cardlink1">
              <Link to="/">T-Shirts</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 colConOfCard">
            <div className="cardImgCon">
              <img src={cup} alt="product" />
            </div>
            <div className="cardlink2">
              <Link to="/">Mugs</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 colConOfCard">
            <div className="cardImgCon">
              <img src={cap} alt="product" />
            </div>
            <div className="cardlink3">
              <Link to="/">Hats & Caps</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 colConOfCard">
            <div className="cardImgCon">
              <img src={MoreTshirt} alt="product" />
            </div>
            <div className="cardlink4">
              <Link to="/">More ... </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
