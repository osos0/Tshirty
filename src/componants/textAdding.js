import React, { useState } from "react";
import {
  FontsDatabase,
  textColors,
  outlineColors,
} from "../dataB/textAndFonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faMinusCircle,
  faPlusCircle,
  faTextHeight,
} from "@fortawesome/free-solid-svg-icons";

export default function TextAdding({
  customTextAdd,
  setCustomTextAdd,
  selectFont,
  setSelectFont,
  selectColor,
  setSelectColor,
  selectOutLineColor,
  setSelectOutLineColor,
  upAndDownText,
  setUpAndDownText,
  leftAndRightText,
  setLeftAndRightText,
  handleResizeText,
}) {
  const [popupTextMenu, setPopupTextMenu] = useState(false);

  const hideTextMenu = () => {
    setPopupTextMenu(!popupTextMenu);
  };

  return (
    <div className="dynamicleftSonText">
      <div className="dynamicleftSonTextOne">
        <button className="textButton" onClick={hideTextMenu}>
          Edit
        </button>

        <textarea
          type="text"
          className="form-control"
          placeholder="Type your text here"
          value={customTextAdd}
          onChange={(e) => setCustomTextAdd(e.target.value)}
        />
      </div>

      {/* Handle Pic designe Zoom IN & Zoom Out */}
      <div className="dynamicleftSonTextTwo">
        <div className="dynamicleftSonCrossAndZoom">
          <FontAwesomeIcon
            icon={faTextHeight}
            style={{ color: "red", pointerEvents: "none" }}
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            onClick={() => {
              setUpAndDownText(upAndDownText - 1);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            onClick={() => {
              setUpAndDownText(upAndDownText + 1);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            onClick={() => {
              setLeftAndRightText(leftAndRightText - 1);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            onClick={() => {
              setLeftAndRightText(leftAndRightText + 1);
            }}
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={() => handleResizeText("increase")}
          />
          <FontAwesomeIcon
            icon={faMinusCircle}
            onClick={() => handleResizeText("decrease")}
          />
        </div>
      </div>

      {popupTextMenu && (
        <>
          <div className="overlay"></div>
          <div className="popupTextMenu">
            <h1
              style={{
                fontFamily: selectFont,
                color: selectColor,
                textShadow:
                  selectOutLineColor !== "none"
                    ? `2px 2px ${selectOutLineColor}`
                    : "none",
              }}
            >
              I love You
            </h1>

            {/* Fonts */}
            <div className="textSelectFontAndcolor">
              <div className="SelctionCon">
                <select
                  className="custom-select"
                  value={selectFont}
                  onChange={(e) => setSelectFont(e.target.value)}
                >
                  {FontsDatabase.map((font, i) => (
                    <option
                      key={i}
                      value={font.fontFamily}
                      style={{ fontFamily: font.fontFamily }}
                    >
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>{selectFont}</div>
            </div>

            <hr />

            {/* Text Color */}
            <div className="textSelectFontAndcolor">
              <div className="SelctionCon">
                <select
                  className="custom-select"
                  value={selectColor}
                  onChange={(e) => setSelectColor(e.target.value)}
                >
                  {textColors.map((color) => (
                    <option
                      key={color.value}
                      value={color.value}
                      style={{ color: color.value }}
                    >
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="circleElement"
                style={{
                  background: selectColor,
                  width: "50px",
                  height: "30px",
                  borderRadius: "20%",
                }}
              ></div>
            </div>

            <hr />

            {/* Outline Color */}
            <div className="textSelectFontAndcolor">
              <div className="SelctionCon">
                <select
                  className="custom-select"
                  value={selectOutLineColor}
                  onChange={(e) => setSelectOutLineColor(e.target.value)}
                >
                  {outlineColors.map((color) => (
                    <option
                      key={color.value}
                      value={color.value}
                      style={{ color: color.value }}
                    >
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="circleElement"
                style={{
                  background: selectColor,
                  outline:
                    selectOutLineColor !== "none"
                      ? `2px solid ${selectOutLineColor}`
                      : "none",
                  width: "50px",
                  height: "10px",
                }}
              ></div>
            </div>

            <hr />
            <button className="closePopupText" onClick={hideTextMenu}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////
// import TextAdding from "../textAdding";
//////////////////////////////////////////////////////////////////
// const [customTextAdd, setCustomTextAdd] = useState("");
//  const [selectFont, setSelectFont] = useState("Arial");
//   const [selectColor, setSelectColor] = useState("#000000");
//   const [selectOutLineColor, setSelectOutLineColor] = useState("none");

//  <TextAdding
//    customTextAdd={customTextAdd}
//    setCustomTextAdd={setCustomTextAdd}
//    selectFont={selectFont}
//    setSelectFont={setSelectFont}
//    selectColor={selectColor}
//    setSelectColor={setSelectColor}
//    selectOutLineColor={selectOutLineColor}
//    setSelectOutLineColor={setSelectOutLineColor}
//  />
//
//////////////////////////////////////////////////////////////////////////
// {customTextAdd && (
//             <div
//               style={{
//                 fontFamily: selectFont,
//                 color: selectColor,
//                 textShadow:
//                   selectOutLineColor !== "none"
//                     ? `2px 2px ${selectOutLineColor}`
//                     : "none",
//               }}
//             >
//               {customTextAdd}
//             </div>
//           )}
//////////////////////////////////////////////
