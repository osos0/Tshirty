import React from "react";
import testtshirt from "../imgs/testtshirt.webp";

export default function tshirtesCard() {
  return (
    <div>
      <div className="container">
        <div className="row tshirtesCardRow">
          <div className="col-lg-4 col-md-6 col-sm-12 tshirtesCardCard">
            <div className="CardCon">
              <div className="cardImgCon">
                <img src={testtshirt} className="" alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title">T-shirt 1</h4>
                <h5 className="card-title">16:00 LE</h5>
                <p className="card-text">Some quick example text</p>
                <button className="btn btn-danger">Let’s Design</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
