import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  // faArrowAltCircleDown,
  // faArrowAltCircleLeft,
  // faArrowAltCircleRight,
  // faArrowAltCircleUp,
  // faMinusCircle,
  faPencil,
  // faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { faImages } from "@fortawesome/free-regular-svg-icons";
// import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

export default function OtherGiftsDynamic() {
  // const [selectedColor, setSelectedColor] = useState("white"); // Default color
  const [selectprouduct, setSelectprouduct] = useState("Hat"); // Default side
  // const [selectedDesignIMG, setSelectedDesignIMG] = useState("");
  // const [selectedDesignIMGSide, setSelectedDesignIMGSide] = useState("");
  const [popupmodel, setPopupmodel] = useState(false);
  // const [popupmodeldesign, setPopupmodeldesign] = useState(false);
  // const [selectiondesigne, setSelectiondesigne] = useState("Carton Images");
  // const [popupmodeldesign, setPopupmodeldesign] = useState(false);

  // const [selectedPostionIMG, setSelectedPostionIMG] = useState("");
  const [selectedProductIMG, setSelectedProductIMG] = useState(
    require("../../imgs/Mugs/1oneside-removebg-preview.png")
  );

  // Handle Popup Model
  const toggelModel = () => {
    setPopupmodel(!popupmodel);
  };

  // Handle Popup Model Design
  // const toggelModelDesign = () => {
  //   setPopupmodeldesign(!popupmodeldesign);
  // };

  return (
    <>
      <div className="container">
        <div className="row otherGiftsdynamicPicFather">
          <div className="col-lg-3 col-md-6 col-sm-12 othergiftsdynamicleftSon">
            <div className="othergiftsdynamicleftSon1">
              Design Tools
              <hr />
            </div>
            {/* Handle Popup Model  */}
            <div className="othergiftsdynamicleftSon2">
              <button className="dynamicleftSon2Tool" onClick={toggelModel}>
                <FontAwesomeIcon icon={faGift} />
                <div>select product</div>
                <FontAwesomeIcon icon={faPencil} />
              </button>
              {selectedProductIMG && (
                <div className="dynamicleftSon2ToolImg">
                  <img src={selectedProductIMG} alt="T-shirt" />
                </div>
              )}

              {popupmodel && (
                <>
                  <div className="overlay"></div>
                  <div className="popupModel">
                    <div className="tshirtPostionImgs">
                      <img
                        onClick={() => {
                          setSelectedProductIMG(
                            require("../../imgs/Mugs/1oneside-removebg-preview.png")
                          );
                          toggelModel();
                          setSelectprouduct("Hat");
                        }}
                        src={require("../../imgs/Mugs/1oneside-removebg-preview.png")}
                        alt="Hat"
                      />

                      <img
                        onClick={() => {
                          setSelectedProductIMG(
                            require("../../imgs/Mugs/2fullprint-removebg-preview.png")
                          );
                          toggelModel();
                          setSelectprouduct("Bag");
                        }}
                        src={require("../../imgs/Mugs/2fullprint-removebg-preview.png")}
                        alt="Bag"
                      />

                      <img
                        onClick={() => {
                          setSelectedProductIMG(
                            require("../../imgs/Mugs/Mug_Mockup_2-1.jpg")
                          );
                          toggelModel();
                          setSelectprouduct("test");
                        }}
                        src={require("../../imgs/Mugs/Mug_Mockup_2-1.jpg")}
                        alt="Bag"
                      />
                    </div>
                    <button className="closePopupModel" onClick={toggelModel}>
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 othergiftsdynamicPicSon"></div>

          <div className="col-lg-3 col-md-6 col-sm-12 othergiftsdynamicRightSon"></div>
        </div>
      </div>
    </>
  );
}
