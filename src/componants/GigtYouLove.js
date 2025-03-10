import React from "react";
import { Link } from "react-router-dom";
import girl from "../imgs/55.jpg";

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
            <div className="cardlinkk">
              <Link>link</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">2</div>
          <div className="col-lg-3 col-md-6 col-sm-12">3</div>
          <div className="col-lg-3 col-md-6 col-sm-12">4</div>
        </div>
      </div>
    </>
  );
}
