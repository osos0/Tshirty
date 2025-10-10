import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faPlusCircle,
  faMinusCircle,
  faImages,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

const SelectDesignTshirt = ({
  toggelModelDesign,
  popupmodeldesign,
  selectedDesignIMG,
  setSelectedDesignIMG,
  DesignsDatabase,
  selectedDesigns,
  selectiondesigne,
  setSelectiondesigne,
  upAndDown,
  setUpAndDown,
  upAndDownLogo,
  setUpAndDownLogo,
  leftAndRight,
  setLeftAndRight,
  leftAndRightLogo,
  setLeftAndRightLogo,
  handleResize,
}) => {
  return (
    <>
      {/* زر فتح نافذة التصميم */}
      <div className="dynamicleftSonDesign">
        <button
          className="dynamicleftSonDesignTool"
          onClick={toggelModelDesign}
        >
          <FontAwesomeIcon icon={faImages} />
          <div>Design Your Own</div>
          <FontAwesomeIcon icon={faPencil} />
        </button>

        {/* عرض التصميم المختار */}
        {selectedDesignIMG && (
          <div className="dynamicleftSon2ToolImg">
            <img src={selectedDesignIMG} alt="T-shirt" />
          </div>
        )}

        {/* نافذة اختيار التصميم */}
        {popupmodeldesign && (
          <>
            <div className="overlay"></div>
            <div className="popupModelDesign">
              {/* اختيار التصنيف */}
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

              {/* عرض التصاميم */}
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

              {/* زر الإغلاق */}
              <button className="closePopupModel" onClick={toggelModelDesign}>
                Close
              </button>
            </div>
          </>
        )}
      </div>

      {/* أدوات التحكم في موضع وحجم التصميم */}
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
      <hr />
    </>
  );
};

export default SelectDesignTshirt;
