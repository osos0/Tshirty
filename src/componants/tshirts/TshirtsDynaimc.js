import React from "react";
import { useParams } from "react-router-dom";
import Tshirts from "../../dataB/tshirts/TshirtsDataBase";
import DesignsDatabase from "../../dataB/DesignsDatabase";
import ProductsTshirtsCard from "../../componants/productsTshirtCard";
import TextAdding from "../textAdding";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faMinusCircle,
  faPencil,
  faPlusCircle,
  faTShirt,
} from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";

export default function TshirtsDynamic() {
  const { gender, typo, id } = useParams();

  // Initialize counters for each possible size
  const [sizeCounters, setSizeCounters] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    "3XL": 0,
  });
  const [selectedColor, setSelectedColor] = useState("white"); // Default color
  const [selectside, setSelectside] = useState("front"); // Default side
  const [selectprintmethod, setSelectprintmethod] = useState("Printing"); // Default size
  const [popupmodel, setPopupmodel] = useState(false);
  const [popupmodeldesign, setPopupmodeldesign] = useState(false);
  const [selectiondesigne, setSelectiondesigne] = useState("Carton Images");
  const selectedDesigns = DesignsDatabase[selectiondesigne] || [];
  const [selectedPostionIMG, setSelectedPostionIMG] = useState("");
  const [selectedDesignIMG, setSelectedDesignIMG] = useState("");
  const [upAndDown, setUpAndDown] = useState(44);
  const [leftAndRight, setLeftAndRight] = useState(50);
  const [upAndDownLogo, setUpAndDownLogo] = useState(22);
  const [leftAndRightLogo, setLeftAndRightLogo] = useState(55);
  const [dimensions, setDimensions] = useState({ width: 120, height: 150 }); // const [zooninAndOut, setZooninAndOut] = useState([0, 0]);
  const [dimensionsLogo, setDimensionsLogo] = useState({
    width: 60,
    height: 55,
  });

  const [customTextAdd, setCustomTextAdd] = useState("");
  const [selectFont, setSelectFont] = useState("Arial");
  const [selectColor, setSelectColor] = useState("#000000");
  const [selectOutLineColor, setSelectOutLineColor] = useState("none");

  const [upAndDownText, setUpAndDownText] = useState(20);
  const [leftAndRightText, setLeftAndRightText] = useState(28);
  const [dimensionsText, setDimensionsText] = useState({
    width: 200,
    height: 120,
  });

  const handleResizeText = (type) => {
    setDimensionsText({
      width:
        type === "increase"
          ? dimensionsText.width + 10
          : dimensionsText.width - 5,
      height:
        type === "increase"
          ? dimensionsText.height + 5
          : dimensionsText.height - 5,
    });
  };

  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );

  if (!tshirt) {
    return <div>T-shirt not found!</div>;
  }

  const getImageSrc = () => {
    try {
      return require(`../../imgs/tshirts/colors/${selectedColor}-${selectside}-removebg-preview.png`);
    } catch (error) {
      console.error("Image not found:", error);
      return tshirt.front;
    }
  };

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

  // Handle Popup Model
  const toggelModel = () => {
    setPopupmodel(!popupmodel);
  };

  // Handle Popup Model Design
  const toggelModelDesign = () => {
    setPopupmodeldesign(!popupmodeldesign);
  };

  const handleResize = (type) => {
    if (
      selectedPostionIMG ===
      "/static/media/cnter-postion-removebg-preview.4f058f144fd670d11fac.png"
    ) {
      setDimensions({
        width:
          type === "increase" ? dimensions.width + 5 : dimensions.width - 5,
        height:
          type === "increase" ? dimensions.height + 5 : dimensions.height - 5,
      });
    } else {
      setDimensionsLogo({
        width:
          type === "increase"
            ? dimensionsLogo.width + 5
            : dimensionsLogo.width - 5,
        height:
          type === "increase"
            ? dimensionsLogo.height + 5
            : dimensionsLogo.height - 5,
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row dynamicPicFather">
          {/* code of left side colors and desgin*/}
          <div className="col-lg-3 col-md-6 col-sm-12 dynamicleftSon">
            <div className="dynamicleftSon1">
              Design Tools
              <hr />
            </div>
            <div className="dynamicleftSonColor">
              <h5 className="subjectOf">Color</h5>
              <div className="colorsFather">
                {tshirt.colores.map((color, index) => (
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
            <div className="dynamicleftSon2">
              <button className="dynamicleftSon2Tool" onClick={toggelModel}>
                <FontAwesomeIcon icon={faTShirt} />
                <div>Print Postion</div>
                <FontAwesomeIcon icon={faPencil} />
              </button>
              {selectedPostionIMG && (
                <div className="dynamicleftSon2ToolImg">
                  <img src={selectedPostionIMG} alt="T-shirt" />
                </div>
              )}

              {popupmodel && (
                <>
                  <div className="overlay"></div>
                  <div className="popupModel">
                    <div className="tshirtPostionImgs">
                      <img
                        onClick={() => {
                          setSelectedPostionIMG(
                            require("../../imgs/cnter-postion-removebg-preview.png")
                          );
                          toggelModel();
                        }}
                        src={require("../../imgs/cnter-postion-removebg-preview.png")}
                        alt="front"
                      />
                      <img
                        onClick={() => {
                          setSelectedPostionIMG(
                            require("../../imgs/logo-postion-removebg-preview.png")
                          );
                          toggelModel();
                        }}
                        src={require("../../imgs/logo-postion-removebg-preview.png")}
                        alt="back"
                      />
                    </div>
                    <button className="closePopupModel" onClick={toggelModel}>
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Handle Popup Model Designe */}
            <div className="dynamicleftSonDesign">
              <button
                className="dynamicleftSonDesignTool"
                onClick={toggelModelDesign}
              >
                <FontAwesomeIcon icon={faImages} />
                <div>Design Your Own</div>
                <FontAwesomeIcon icon={faPencil} />
              </button>
              {selectedDesignIMG && (
                <div className="dynamicleftSon2ToolImg">
                  <img src={selectedDesignIMG} alt="T-shirt" />
                </div>
              )}

              {popupmodeldesign && (
                <>
                  <div className="overlay"></div>
                  <div className="popupModelDesign">
                    <div className="SelctionCon">
                      <select
                        className="custom-select"
                        value={selectiondesigne}
                        onChange={(e) => setSelectiondesigne(e.target.value)}
                      >
                        {Object.keys(DesignsDatabase).map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="SelctionConPics">
                      {selectedDesigns.map((design) => (
                        <div
                          key={design.id}
                          className="SelctionConPicsSon"
                          onClick={toggelModelDesign}
                        >
                          <img
                            onClick={() => setSelectedDesignIMG(design.img)}
                            src={design.img}
                            alt={design.name}
                          />
                          <div>{design.name}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      className="closePopupModel"
                      onClick={toggelModelDesign}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="dynamicleftSonCrossAndZoom">
              <FontAwesomeIcon
                icon={faImages}
                style={{ color: "red", pointerEvents: "none" }}
              />
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                onClick={() => {
                  setUpAndDown(upAndDown - 1);
                  setUpAndDownLogo(upAndDownLogo - 1);
                }}
              />
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                onClick={() => {
                  setUpAndDown(upAndDown + 1);
                  setUpAndDownLogo(upAndDownLogo + 1);
                }}
              />
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                onClick={() => {
                  setLeftAndRight(leftAndRight - 1);
                  setLeftAndRightLogo(leftAndRightLogo - 1);
                }}
              />
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                onClick={() => {
                  setLeftAndRight(leftAndRight + 1);
                  setLeftAndRightLogo(leftAndRightLogo + 1);
                }}
              />
              <FontAwesomeIcon
                icon={faPlusCircle}
                onClick={() => handleResize("increase")}
              />
              <FontAwesomeIcon
                icon={faMinusCircle}
                onClick={() => handleResize("decrease")}
              />
            </div>
            {/* Handle Text Adding */}
            <TextAdding
              customTextAdd={customTextAdd}
              setCustomTextAdd={setCustomTextAdd}
              selectFont={selectFont}
              setSelectFont={setSelectFont}
              selectColor={selectColor}
              setSelectColor={setSelectColor}
              selectOutLineColor={selectOutLineColor}
              setSelectOutLineColor={setSelectOutLineColor}
              upAndDownText={upAndDownText}
              setUpAndDownText={setUpAndDownText}
              leftAndRightText={leftAndRightText}
              setLeftAndRightText={setLeftAndRightText}
              handleResizeText={handleResizeText}
            />
          </div>

          {/* code of Center side Picture Handling*/}
          <div className="col-lg-6 col-md-6 col-sm-12 dynamicPicSon">
            <div
              className="dynaminPicCon"
              style={{
                backgroundImage: `url(${getImageSrc()})`,
              }}
            >
              {selectedPostionIMG ===
              "/static/media/cnter-postion-removebg-preview.4f058f144fd670d11fac.png" ? (
                <div
                  className="centerPostion"
                  style={{
                    top: `${upAndDown}%`,
                    left: `${leftAndRight}%`,
                    width: `${dimensions.width}px`,
                    minHeight: `${dimensions.height}px`,
                  }}
                >
                  {/* Hello center Picture{" "} */}
                  {selectedDesignIMG && (
                    <div className="dynamicleftSon2ToolImg">
                      <img src={selectedDesignIMG} alt="T-shirt" />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="logoPostion"
                  style={{
                    top: `${upAndDownLogo}%`,
                    left: `${leftAndRightLogo}%`,
                    width: `${dimensionsLogo.width}px`,
                    minHeight: `${dimensionsLogo.height}px`,
                  }}
                >
                  {selectedDesignIMG && (
                    <div className="dynamicleftSon2ToolImg">
                      <img src={selectedDesignIMG} alt="T-shirt" />
                    </div>
                  )}
                </div>
              )}
              {customTextAdd && (
                <div
                  // className="fullPrintPostion"
                  style={{
                    position: "absolute",
                    opacity: "0.9",
                    width: "180px",
                    height: "200px",
                    textAlign: "center",
                    fontWeight: "800",
                    top: `${upAndDownText}%`,
                    left: `${leftAndRightText}%`,
                    fontSize: `${dimensionsText.height / 5}px`,
                    overflow: "hidden",
                    letterSpacing: "0px",
                    lineHeight: "1.1",
                    fontFamily: selectFont,
                    color: selectColor,
                    textShadow:
                      selectOutLineColor !== "none"
                        ? `2px 2px ${selectOutLineColor}`
                        : "none",
                  }}
                >
                  {customTextAdd}
                </div>
              )}
            </div>
            <div className="frontAndBackCon">
              <div onClick={() => setSelectside("front")}>Front</div>
              <div onClick={() => setSelectside("back")}>Back </div>
            </div>
            <div className="">
              <h4 className="">{tshirt.desc}</h4>
              <h5 className="">{tshirt.price} LE</h5>
              <p className="">Some quick example text</p>
            </div>
          </div>

          {/* code of Right side PrintMethodes and sizes and Prices*/}
          <div className="col-lg-3 col-md-6 col-sm-12 dynamicRightSon">
            <div className="designYourOwn">
              <div className="designYourOwnSon1">
                Design Your Own {tshirt.typo} Shirts
              </div>
              <div className="designYourOwnSon2">
                <h4>{tshirt.price} LE</h4>
                <p>Per unit, inc VAT</p>
              </div>
              <hr />
              <div className="designYourOwnSon2PrintMethod">
                <h5 className="subjectOf">Print Method</h5>
                <h5 className="selectedColorName">{selectprintmethod}</h5>
                <div className="printMethod">
                  <div onClick={() => setSelectprintmethod("Printing")}>
                    Printing
                  </div>
                  <div onClick={() => setSelectprintmethod("Embroidery")}>
                    Embroidery
                  </div>
                </div>
                <hr />
              </div>
              <div className="designYourOwnSon4">
                <h5 className="subjectOf">Size</h5>
                {tshirt.sizes.map((size, index) => (
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
                        return total + count * tshirt.price;
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
                    // Filter out sizes with 0 quantity
                    const selectedSizes = Object.entries(sizeCounters)
                      .filter(([_, count]) => count > 0)
                      .map(([size, count]) => ({ size, count }));

                    console.log("Selected items:", selectedSizes);
                    // Add your cart logic here
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <ProductsTshirtsCard />
          </div>
        </div>
      </div>
    </>
  );
}
