import React, { useState } from "react";

const CustomizableImage = () => {
  const [text, setText] = useState("positive");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="CAi1bQ">
      <div
        className="mWwrtw"
        style={{ width: "225px", height: "289.286px", margin: "0px" }}
      >
        <div className="YkerfQ"></div>
      </div>

      <div className="caBU6Q">
        <div
          className="DPPJ_A"
          data-page-id="0"
          style={{ width: "225px", height: "289.286px", margin: "0px" }}
        >
          <div
            className="_14BoqA tHw__A"
            style={{
              width: "1344px",
              height: "1728px",
              transform: "scale(0.167411)",
            }}
          >
            <div
              className="_mXnjA"
              lang="en-GB"
              style={{ width: "1344px", height: "1728px" }}
            >
              <div
                className="_6t4CHA _682gpw"
                style={{ touchAction: "pan-x pan-y pinch-zoom" }}
              >
                <div className="a26Xuw">
                  <div
                    className="fbzKiw"
                    style={{ background: "rgb(3, 2, 2)" }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "134.4px",
                  left: "134.4px",
                  width: "1075.2px",
                  height: "1459.2px",
                }}
              ></div>
              <div>
                <div
                  className="DF_utQ _682gpw _0xkaeQ"
                  style={{
                    touchAction: "pan-x pan-y pinch-zoom",
                    width: "896.4px",
                    height: "305.037px",
                    transform: "translate(223.8px, 687.103px)",
                  }}
                >
                  <div
                    className="aF9o6Q _0yZ6Qg"
                    style={{ writingMode: "horizontal-tb" }}
                  >
                    <div
                      lang="en-GB"
                      className="AdBbhQ hGbcYA"
                      style={{ transform: "translate(0px, -25.4813px)" }}
                    >
                      <p
                        className="cgHgbA pYZEjA Xp24Nw PanoWQ"
                        style={{
                          color: "rgb(255, 255, 255)",
                          lineHeight: "356px",
                          letterSpacing: "0em",
                        }}
                      >
                        <span
                          className="OYPEnA"
                          style={{ color: "rgb(255, 255, 255)" }}
                        >
                          {text}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  value={text}
                  onChange={handleTextChange}
                  style={{
                    position: "absolute",
                    top: "700px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableImage;
