import React from "react";
import { useParams } from "react-router-dom";
import Tshirts from "../dataB/TshirtsDataBase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTShirt } from "@fortawesome/free-solid-svg-icons";
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

  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );

  if (!tshirt) {
    return <div>T-shirt not found!</div>;
  }

  const getImageSrc = () => {
    try {
      return require(`../imgs/tshirts/tshirt1${selectedColor}-${selectside}.jpg`);
    } catch (error) {
      console.error("Image not found:", error);
      return tshirt.front; // Fallback to default image
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

  return (
    <div>
      <div className="container">
        <div className="row dynamicPicFather">
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
              {popupmodel && (
                <>
                  <div className="overlay"></div>
                  <div className="popupModel">
                    <div className="tshirtPostionImgs">
                      <img
                        onClick={toggelModel}
                        src={require(`../imgs/cnter-postion-removebg-preview.png`)}
                        alt="front"
                      />
                      <img
                        onClick={toggelModel}
                        src={require(`../imgs/logo-postion-removebg-preview.png`)}
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
                        <option value="Carton Images">Carton Images</option>
                        <option value="Love">Love</option>
                        <option value="Iconic Symbols">Iconic Symbols</option>
                        <option value="Pregnant">Pregnant</option>
                        <option value="Sports">Sports</option>
                      </select>
                    </div>
                    <div className="SelctionConPics">
                      <div className="SelctionConPicsSon">
                        <img
                          src={require(`../imgs/cap5.jpg`)}
                          alt="Carton Images"
                        />
                        <></>
                      </div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
                      <div className="SelctionConPicsSon"></div>
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

          <div className="col-lg-6 col-md-6 col-sm-12 dynamicPicSon">
            <div className="dynaminPicCon">
              <img
                src={getImageSrc()}
                alt="This color is Not available now please choose another color"
              />
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
              {/* <div className="designYourOwnSon3">
                <h5 className="subjectOf">Color</h5>
                <div className="selectedColorName">{selectedColor}</div>
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
              </div>
              <hr /> */}
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
      </div>
    </div>
  );
}
