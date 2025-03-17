import React from "react";
import threeTshirts from "../imgs/three-tshirts.jpg";

export default function tshirtyTopSection() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row TshirtsBigBox">
            <div className="TshirtsBigBoxLeft col-lg-6 col-md-6 col-sm-12">
              <div className="page__TitleText">
                <h1 claclassNamess="page__TitleText--h1">
                  Personalised T‑Shirt Printing
                </h1>
                <p className="page__TitleText--h2">Design Your Own T-Shirts</p>
              </div>
            </div>
            <div className="TshirtsBigBoxRight col-lg-6 col-md-6 col-sm-12">
              <div className="TshirtsBigBoxRightRed">
                <div className="TshirtsBigBoxRightGray">
                  <img src={threeTshirts} alt="Tshirt"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
