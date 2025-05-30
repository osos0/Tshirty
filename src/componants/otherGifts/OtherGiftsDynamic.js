import React from "react";
import { useParams } from "react-router-dom";
import OtherGiftsDB from "../../dataB/otherGifts/OtherGiftsProductsCard";

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
  const { gender, typo, id } = useParams();

  const [sizeCounters, setSizeCounters] = useState({
    Piece: 0,
    piece: 0,
  });

  const [selectedColor, setSelectedColor] = useState("white"); // Default color
  const [selectprouduct, setSelectprouduct] = useState(gender); // Default side
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

  // Handle increment for a specific size
  const handleIncrement = (size) => {
    setSizeCounters((prev) => ({
      ...prev,
      [size]: prev[size] + 1,
    }));
  };

  // Handle decrement for a specific size
  const handleDecrement = (size) => {
    setSizeCounters((prev) => ({
      ...prev,
      [size]: Math.max(prev[size] - 1, 0), // Prevent going below 0
    }));
  };

  const Gift = OtherGiftsDB[gender]?.find(
    (Gift) => Gift.typo === typo && Gift.id === parseInt(id)
  );

  if (!Gift) {
    return <div>Item not found</div>;
  }

  const getImageSrc = () => {
    try {
      return require(`../../imgs/otherGifts/selectProduct/${selectprouduct}/001.jpg`);
    } catch (error) {
      console.error("Image not found:", error);
      return Gift.front;
    }
  };

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
            <div className="otherGiftsdynamicleftSonColor">
              <h5 className="subjectOf">Color</h5>
              <div className="colorsFather">
                {Gift.colores.map((color, index) => (
                  <div
                    key={index}
                    className="colrSon"
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
              <div className="selectedColorName">{selectedColor}</div>
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

          <div className="col-lg-6 col-md-6 col-sm-12 othergiftsdynamicPicSon">
            <div
              className="dynaminPicCon"
              style={{
                backgroundImage: `url(${getImageSrc()})`,
              }}
            ></div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 othergiftsdynamicRightSon">
            <div className="designYourOwn">
              <div className="designYourOwnSon1">
                Design Your Own {Gift.typo} Shirts
              </div>
              <div className="designYourOwnSon2">
                <h4>{Gift.price} LE</h4>
                <p>Per unit, inc VAT</p>
              </div>
              <hr />
              <div className="designYourOwnSon4">
                <h5 className="subjectOf">Number of products</h5>
                {Gift.sizes.map((size, index) => (
                  <div key={index} className="sizeSon">
                    <div className="sizesName">{size}</div>
                    <div className="sizesConrol">
                      <div
                        className="decrease"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecrement(size);
                        }}
                      >
                        -
                      </div>
                      <div className="zero">{sizeCounters[size]}</div>
                      <div
                        className="increase"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIncrement(size);
                        }}
                      >
                        +
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
                <div className="total-price">
                  <div className="totalPriceWord">Total Price:</div>
                  <div className="totalPriceCurrency">
                    {Object.entries(sizeCounters).reduce(
                      (total, [size, count]) => {
                        return total + count * Gift.price;
                      },
                      0
                    )}{" "}
                    LE
                  </div>
                </div>
              </div>
              <hr />
              <div className="add-to-cart">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    //please AI add only price * the total
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
