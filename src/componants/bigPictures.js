import React from "react";

import bigHat from "../imgs/collaction/2.jpg";
import bigMug from "../imgs/collaction/3.jpg";
import noteBookAndPen from "../imgs/collaction/7-1.jpg";
import bigCalender from "../imgs/collaction/7-2.jpg";
import bigPen from "../imgs/collaction/5-1.jpg";
import bigEnv from "../imgs/collaction/5-2.jpg";
import bigFlash from "../imgs/collaction/5-3.jpg";
import bigTshirt from "../imgs/collaction/6.jpg";
import Bottal from "../imgs/collaction/9-1.jpg";
import Flag from "../imgs/collaction/9-2.jpg";
import MobileCover from "../imgs/collaction/10.jpg";
import colock from "../imgs/collaction/11.jpg";
import handBag from "../imgs/collaction/12.jpg";

export default function BigPictures() {
  return (
    <>
      <div className="container bigPictuers">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 son1">
            <img src={bigFlash} alt="bigTshirt" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 son2">
            <img src={bigHat} alt="bigHat" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 son3">
            <img src={bigMug} alt="bigMug" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 son4">4</div>
          <div className="col-lg-2 col-md-2 col-sm-6 son5">
            <div className="baby5">
              <img src={bigPen} alt="bigTshirt" />
            </div>
            <div className="baby5">
              <img src={bigEnv} alt="bigTshirt" />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 son6">
            <img src={bigTshirt} alt="bigTshirt" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 son7">
            <div className="baby7">
              <img src={noteBookAndPen} alt="bigTshirt" />
            </div>
            <div className="baby7">
              <img src={bigCalender} alt="bigTshirt" />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 son8">8</div>
          <div className="col-lg-4 col-md-4 col-sm-6 son9">
            <div className="baby9">
              <img src={Flag} alt="bigTshirt" />
            </div>
            <div className="baby9">
              <img src={Bottal} alt="bigTshirt" />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 son10">
            <img src={MobileCover} alt="MobileCover" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 son11">
            <img src={colock} alt="colock" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 son12">
            <img src={handBag} alt="handBag" />
          </div>
        </div>
      </div>
    </>
  );
}
