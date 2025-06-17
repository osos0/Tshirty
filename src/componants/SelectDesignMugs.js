import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faPencil,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const SelectDesignMugs = ({
  toggelModelDesign,
  selectedDesignIMG,
  popupmodeldesign,
  selectiondesigne,
  setSelectiondesigne,
  DesignsDatabase,
  selectedDesigns,
  setSelectedDesignIMG,
  setSelectedDesignIMGSide,
  setUpAndDown,
  setUpAndDownLogo,
  setLeftAndRight,
  setLeftAndRightLogo,
  handleResize,
  upAndDown,
  upAndDownLogo,
  leftAndRight,
  leftAndRightLogo,
}) => {
  return (
    <>
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

              <button className="closePopupModel" onClick={toggelModelDesign}>
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
      <hr />
    </>
  );
};

export default SelectDesignMugs;
