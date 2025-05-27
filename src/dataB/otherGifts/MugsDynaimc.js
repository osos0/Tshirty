import React from "react";
import { useParams } from "react-router-dom";
import Mugs from "../../dataB/mugs/MugsDataBase";
import DesignsDatabase from "../../dataB/DesignsDatabase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTShirt } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";

export default function MugsDynaimc() {
  const { gender, typo, id } = useParams();

  const [sizeCounters, setSizeCounters] = useState({
    "400 ml": 0,
    "1000 ml": 0,
  });
  const [selectedColor, setSelectedColor] = useState("white"); // Default color
  const [selectedDesignIMG, setSelectedDesignIMG] = useState("");
  const [popupmodel, setPopupmodel] = useState(false);
  const [popupmodeldesign, setPopupmodeldesign] = useState(false);
  const [selectiondesigne, setSelectiondesigne] = useState("Carton Images");
  const [selectedPostionIMG, setSelectedPostionIMG] = useState("");
  const selectedDesigns = DesignsDatabase[selectiondesigne] || [];

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

  // Handle Popup Model
  const toggelModel = () => {
    setPopupmodel(!popupmodel);
  };

  // Handle Popup Model Design
  const toggelModelDesign = () => {
    setPopupmodeldesign(!popupmodeldesign);
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
            <div className="mugsdynamicleftSonDesign">
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
          </div>

          {/* code of Center side Picture Handling*/}
          <div className="col-lg-6 col-md-6 col-sm-12 mugsdynamicPicSon"></div>

          {/* code of Right side PrintMethodes and sizes and Prices*/}
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
      </div>
    </>
  );
}
