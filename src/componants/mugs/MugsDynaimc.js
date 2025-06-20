import React from "react";
import { useParams } from "react-router-dom";
import Mugs from "../../dataB/mugs/MugsDataBase";
import DesignsDatabase from "../../dataB/DesignsDatabase";
import ProductsMugsCard from "../../componants/productsMugsCard";
import TextAdding from "../textAdding";
import SelectDesign from "../SelectDesignMugs";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faArrowAltCircleDown,
  // faArrowAltCircleLeft,
  // faArrowAltCircleRight,
  // faArrowAltCircleUp,
  faBeerMugEmpty,
  faClose,
  // faMinusCircle,
  faPencil,
  // faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { faImages } from "@fortawesome/free-regular-svg-icons";

export default function MugsDynaimc() {
  const { gender, typo, id } = useParams();

  const [sizeCounters, setSizeCounters] = useState({
    "400 ml": 0,
    "1000 ml": 0,
  });
  const [selectedColor, setSelectedColor] = useState("white"); // Default color
  const [selectside, setSelectside] = useState("front"); // Default side
  const [selectedDesignIMG, setSelectedDesignIMG] = useState("");
  const [selectedDesignIMGSide, setSelectedDesignIMGSide] = useState("");
  const [popupmodel, setPopupmodel] = useState(false);
  const [popupmodeldesign, setPopupmodeldesign] = useState(false);
  const [selectiondesigne, setSelectiondesigne] = useState("Carton Images");
  // const [selectedPostionIMG, setSelectedPostionIMG] = useState("");
  const [selectedPostionIMG, setSelectedPostionIMG] = useState(
    require("../../imgs/Mugs/1oneside-removebg-preview.png")
  );
  const selectedDesigns = DesignsDatabase[selectiondesigne] || [];
  const [upAndDown, setUpAndDown] = useState(58);
  const [leftAndRight, setLeftAndRight] = useState(50);
  const [upAndDownLogo, setUpAndDownLogo] = useState(50);
  const [leftAndRightLogo, setLeftAndRightLogo] = useState(43);
  const [dimensions, setDimensions] = useState({ width: 200, height: 120 }); // const [zooninAndOut, setZooninAndOut] = useState([0, 0]);
  const [dimensionsLogo, setDimensionsLogo] = useState({
    width: 120,
    height: 150,
  });

  // Handle text and font settings
  const [customTextAdd, setCustomTextAdd] = useState(" ");
  const [selectFont, setSelectFont] = useState("'Eater', cursive");
  const [selectColor, setSelectColor] = useState("#000000");
  const [selectOutLineColor, setSelectOutLineColor] = useState("none");

  const [upAndDownText, setUpAndDownText] = useState(56);
  const [leftAndRightText, setLeftAndRightText] = useState(50);
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

  const Mug = Mugs[gender]?.find(
    (Mug) => Mug.typo === typo && Mug.id === parseInt(id)
  );

  if (!Mug) {
    return <div>Item not found</div>;
  }

  const getImageSrc = () => {
    try {
      return require(`../../imgs/Mugs/colors/${selectedColor}-${selectside}-removebg-preview.png`);
    } catch (error) {
      console.error("Image not found:", error);
      return Mug.front;
    }
  };

  // Handle Popup Model
  const toggelModel = () => {
    setPopupmodel(!popupmodel);
  };

  // Handle Popup Model Design
  const toggelModelDesign = () => {
    setPopupmodeldesign(!popupmodeldesign);
  };

  // Handle Popup Model Design
  const handleResize = (type) => {
    if (selectside === "full") {
      setDimensions({
        width:
          type === "increase" ? dimensions.width + 10 : dimensions.width - 5,
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
        <div className="row mugsdynamicPicFather">
          {/* code of left side colors and desgin*/}
          <div className="col-lg-3 col-md-6 col-sm-12 mugsdynamicleftSon">
            <div className="mugsdynamicleftSon1">
              Design Tools
              <hr />
            </div>
            <div className="mugsdynamicleftSonColor">
              <h5 className="subjectOf">Color</h5>
              <div className="colorsFather">
                {Mug.colores.map((color, index) => (
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
            <div className="mugsdynamicleftSon2">
              <button className="dynamicleftSon2Tool" onClick={toggelModel}>
                <FontAwesomeIcon icon={faBeerMugEmpty} />
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
                            require("../../imgs/Mugs/1oneside-removebg-preview.png")
                          );
                          toggelModel();
                          setSelectside("front");
                        }}
                        src={require("../../imgs/Mugs/1oneside-removebg-preview.png")}
                        alt="front"
                      />

                      <img
                        onClick={() => {
                          setSelectedPostionIMG(
                            require("../../imgs/Mugs/2fullprint-removebg-preview.png")
                          );
                          toggelModel();
                          setSelectside("full");
                        }}
                        src={require("../../imgs/Mugs/2fullprint-removebg-preview.png")}
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
            <hr />
            {/* Handle Popup Model Designe */}
            {/* <div className="mugsdynamicleftSonDesign">
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
                  <img src={selectedDesignIMG} alt="Mug" />
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
                            onClick={() => {
                              setSelectedDesignIMG(design.img);
                              setSelectedDesignIMGSide(design.side);
                            }}
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
            <hr /> */}
            <SelectDesign
              toggelModelDesign={toggelModelDesign}
              selectedDesignIMG={selectedDesignIMG}
              popupmodeldesign={popupmodeldesign}
              selectiondesigne={selectiondesigne}
              setSelectiondesigne={setSelectiondesigne}
              DesignsDatabase={DesignsDatabase}
              selectedDesigns={selectedDesigns}
              setSelectedDesignIMG={setSelectedDesignIMG}
              setSelectedDesignIMGSide={setSelectedDesignIMGSide}
              setUpAndDown={setUpAndDown}
              setUpAndDownLogo={setUpAndDownLogo}
              setLeftAndRight={setLeftAndRight}
              setLeftAndRightLogo={setLeftAndRightLogo}
              handleResize={handleResize}
              upAndDown={upAndDown}
              upAndDownLogo={upAndDownLogo}
              leftAndRight={leftAndRight}
              leftAndRightLogo={leftAndRightLogo}
            />

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
          <div className="col-lg-6 col-md-6 col-sm-12 mugsdynamicPicSon">
            <div
              className="dynaminPicCon"
              style={{
                backgroundImage: `url(${getImageSrc()})`,
              }}
            >
              {selectedPostionIMG ===
              "/static/media/1oneside-removebg-preview.5892e58ff99c14079f1f.png" ? (
                <div
                  className="oneSidePostion"
                  style={{
                    top: `${upAndDownLogo}%`,
                    left: `${leftAndRightLogo}%`,
                    width: `${dimensionsLogo.width}px`,
                    minHeight: `${dimensionsLogo.height}px`,
                  }}
                >
                  {selectedDesignIMG && (
                    <div className="dynamicleftSon2ToolImg">
                      {selectedDesignIMG.trim() !== "" && (
                        <FontAwesomeIcon
                          className="closeTextIcon"
                          icon={faClose}
                          onClick={() => setSelectedDesignIMG("")}
                        />
                      )}
                      <img src={selectedDesignIMG} alt="Mug" />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="fullPrintPostion"
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
                      {selectedDesignIMG.trim() !== "" && (
                        <FontAwesomeIcon
                          className="closeTextIcon"
                          icon={faClose}
                          onClick={() => setSelectedDesignIMG("")}
                        />
                      )}
                      <img src={selectedDesignIMG} alt="Mug" />
                    </div>
                  )}
                </div>
              )}
              {customTextAdd && (
                <div
                  className="textStyling"
                  style={{
                    minWidth: `250px`,
                    maxHeight: `120px`,
                    opacity: 0.9,
                    textAlign: "center",
                    top: `${upAndDownText}%`,
                    left: `${leftAndRightText}%`,
                    fontSize: `${dimensionsText.height / 3}px`,
                    letterSpacing: "0px",
                    lineHeight: "1.1",
                    fontFamily: selectFont,
                    fontWeight: "bold",
                    color: selectColor,
                    textShadow:
                      selectOutLineColor !== "none"
                        ? `2px 2px ${selectOutLineColor}`
                        : "none",
                    whiteSpace: "pre-line",
                    overflow: "hidden",
                  }}
                >
                  {customTextAdd}
                  {customTextAdd.trim() !== "" && (
                    <FontAwesomeIcon
                      className="closeTextIcon"
                      icon={faClose}
                      onClick={() => setCustomTextAdd("")}
                    />
                  )}
                </div>
              )}
            </div>
            {selectedDesignIMG && (
              <p className="recommendation">
                <span style={{ color: "red" }}>Recommendation</span> : with this
                Design use{" "}
                <span style={{ color: "red" }}>
                  {selectedDesignIMGSide === "one" ? "One Side" : "Full Print"}
                </span>{" "}
                from print Postion
              </p>
            )}
            <div className="conOfPic360">
              <div className="realMug">
                <img src={Mug.img} alt="Mug" />
              </div>
              {selectedDesignIMG && (
                <div className="pic360">
                  <div className="banner">
                    <div className="product">
                      {/* <div className="cup"></div> */}
                      <div
                        className="cup"
                        style={{
                          backgroundImage: `url(${selectedDesignIMG}), url(/imgs/Mugs/cubWithouthold.png)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <h4 className="">{Mug.desc}</h4>
              <h5 className="">{Mug.price} LE</h5>
              <p className="">Some quick example text</p>
            </div>
          </div>

          {/* code of Right side PrintMethodes and Number of products and Prices*/}
          <div className="col-lg-3 col-md-6 col-sm-12 mugsdynamicRightSon">
            <div className="designYourOwn">
              <div className="designYourOwnSon1">
                Design Your Own {Mug.typo} Shirts
              </div>
              <div className="designYourOwnSon2">
                <h4>{Mug.price} LE</h4>
                <p>Per unit, inc VAT</p>
              </div>
              <hr />
              {/* <div className="designYourOwnSon2PrintMethod">
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
              </div> */}
              <div className="designYourOwnSon4">
                <h5 className="subjectOf">Size</h5>
                {Mug.sizes.map((size, index) => (
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
                        return total + count * Mug.price;
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
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <ProductsMugsCard />
          </div>
        </div>
      </div>
    </>
  );
}
