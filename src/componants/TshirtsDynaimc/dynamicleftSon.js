import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTShirt } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import Tshirts from "../../dataB/TshirtsDataBase";
import { useParams } from "react-router-dom";

export function DynamicLeftSon() {
  const { gender, typo, id } = useParams();
  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );
  const [selectedColor, setSelectedColor] = useState("white");
  const [popupModel, setPopupModel] = useState(false);
  if (!tshirt) return <div>T-shirt not found!</div>;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 dynamicleftSon">
      <div className="dynamicleftSon1">
        Design Tools
        <hr />
      </div>

      <div className="dynamicleftSon1Color">
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

      <div className="dynamicleftSon2">
        <button
          className="dynamicleftSon2Tool"
          onClick={() => setPopupModel(!popupModel)}
        >
          <FontAwesomeIcon icon={faTShirt} />
          <div>Print Position</div>
          <FontAwesomeIcon icon={faPencil} />
        </button>
        {popupModel && (
          <>
            <div className="overlay"></div>
            <div className="popupModel">
              <div className="tshirtPostionImgs">
                <img
                  onClick={() => setPopupModel(false)}
                  src={require("../imgs/cnter-postion-removebg-preview.png")}
                  alt="front"
                />
                <img
                  onClick={() => setPopupModel(false)}
                  src={require("../imgs/logo-postion-removebg-preview.png")}
                  alt="back"
                />
              </div>
              <button
                className="closePopupModel"
                onClick={() => setPopupModel(false)}
              >
                Close
              </button>
            </div>
          </>
        )}
        <div className="dynamicleftSon2Tool">
          <FontAwesomeIcon icon={faImages} />
          <div>Design Your Own</div>
          <FontAwesomeIcon icon={faPencil} />
        </div>
      </div>
    </div>
  );
}
