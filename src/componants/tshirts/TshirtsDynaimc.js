import React from "react";
import { useParams } from "react-router-dom";
import Tshirts from "../../dataB/tshirts/TshirtsDataBase";
import DesignsDatabase from "../../dataB/DesignsDatabase";
import ProductsTshirtsCard from "../../componants/productsTshirtCard";
import TextAdding from "../textAdding";
import SelectDesign from "../SelectDesignTshirts";
import { useContext } from "react";
import { CartContext } from "../../componants/CartContext"; // عدل المسار حسب مشروعك

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPencil, faTShirt } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

import html2canvas from "html2canvas";
import { useRef } from "react";

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
  const [selectFont, setSelectFont] = useState("'Eater', cursive");
  const [selectColor, setSelectColor] = useState("#000000");
  const [selectOutLineColor, setSelectOutLineColor] = useState("none");

  const [upAndDownText, setUpAndDownText] = useState(28);
  const [leftAndRightText, setLeftAndRightText] = useState(28);
  const [dimensionsText, setDimensionsText] = useState({
    width: 200,
    height: 120,
  });

  const { addToCart } = useContext(CartContext);

  const tshirtRef = useRef(null);

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
            <hr />

            <SelectDesign
              toggelModelDesign={toggelModelDesign}
              popupmodeldesign={popupmodeldesign}
              selectedDesignIMG={selectedDesignIMG}
              setSelectedDesignIMG={setSelectedDesignIMG}
              // setSelectedDesignIMGSide={setSelectedDesignIMGSide}
              DesignsDatabase={DesignsDatabase}
              selectedDesigns={selectedDesigns}
              selectiondesigne={selectiondesigne}
              setSelectiondesigne={setSelectiondesigne}
              upAndDown={upAndDown}
              setUpAndDown={setUpAndDown}
              upAndDownLogo={upAndDownLogo}
              setUpAndDownLogo={setUpAndDownLogo}
              leftAndRight={leftAndRight}
              setLeftAndRight={setLeftAndRight}
              leftAndRightLogo={leftAndRightLogo}
              setLeftAndRightLogo={setLeftAndRightLogo}
              handleResize={handleResize}
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
          <div className="col-lg-6 col-md-6 col-sm-12 dynamicPicSon">
            <div
              className="dynaminPicCon"
              ref={tshirtRef}
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
                      {selectedDesignIMG.trim() !== "" && (
                        <FontAwesomeIcon
                          className="closeTextIcon"
                          icon={faClose}
                          onClick={() => setSelectedDesignIMG("")}
                        />
                      )}
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
                      {selectedDesignIMG.trim() !== "" && (
                        <FontAwesomeIcon
                          className="closeTextIcon"
                          icon={faClose}
                          onClick={() => setSelectedDesignIMG("")}
                        />
                      )}
                      <img src={selectedDesignIMG} alt="T-shirt" />
                    </div>
                  )}
                </div>
              )}
              {customTextAdd && (
                <div
                  className="textStylingTshirt"
                  style={{
                    top: `${upAndDownText}%`,
                    left: `${leftAndRightText}%`,
                    fontSize: `${dimensionsText.height / 5}px`,
                    fontFamily: selectFont,
                    color: selectColor,
                    whiteSpace: "pre-line",
                    textShadow:
                      selectOutLineColor !== "none"
                        ? `2px 2px ${selectOutLineColor}`
                        : "none",
                  }}
                >
                  {customTextAdd}
                  {customTextAdd.trim() !== "" && (
                    <FontAwesomeIcon
                      icon={faClose}
                      onClick={() => setCustomTextAdd("")}
                    />
                  )}
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
            </div>
          </div>
          {/* Add to Cart Button */}
          <div className="addToCart">
            <button
              className="addToCartButton"
              onClick={async () => {
                // لقطة للشكل الحالي للتشيرت
                const canvas = await html2canvas(tshirtRef.current);
                const imageData = canvas.toDataURL("image/png"); // ده base64 image

                Object.entries(sizeCounters).forEach(([size, quantity]) => {
                  if (quantity > 0) {
                    addToCart({
                      id: `${tshirt.id}-${size}-${Date.now()}`, // unique id
                      name: `${tshirt.desc} - Size ${size}`,
                      price: tshirt.price,
                      quantity,
                      color: selectedColor,
                      printMethod: selectprintmethod,
                      image: imageData, // هنا نحفظ صورة التصميم
                    });
                  }
                });

                // Reset counters
                setSizeCounters({
                  XS: 0,
                  S: 0,
                  M: 0,
                  L: 0,
                  XL: 0,
                  XXL: 0,
                  "3XL": 0,
                });

                toast.success("Item(s) added to cart!");
              }}
            >
              Add to Cart
            </button>
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
