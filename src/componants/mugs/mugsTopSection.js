import React from "react";
import mugsTopSection from "../../imgs/Mugs/Mug_Mockup_2-1.jpg";

export default function tshirtyTopSection() {
  return (
    <div>
      <div>
        <div className="container TshirtsBigBoxContainer">
          <div className="row TshirtsBigBox">
            <div className="TshirtsBigBoxLeft col-lg-6 col-md-6 col-sm-12">
              <div className="page__TitleText">
                <h1 className="page__TitleText--h1">
                  Personalised Mugs Printing
                </h1>
                <p className="page__TitleText--h2">Design Your Own Mugs</p>
              </div>
            </div>
            <div className="TshirtsBigBoxRight col-lg-6 col-md-6 col-sm-12">
              <div className="TshirtsBigBoxRightRed">
                <div className="TshirtsBigBoxRightGray">
                  <img src={mugsTopSection} alt="Tshirt"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
