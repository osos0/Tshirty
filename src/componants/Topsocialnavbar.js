import React from "react";
import TextFktarek from "../imgs/slang-bg-remove.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookMessenger,
  faSquareFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Topsocialnavbar = () => {
  return (
    <>
      <div className=" brand">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="brandPicCon">
              <div className="brandPicConSvg">
                <Link to="/" target="_blank">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
                <Link to="http://m.me/yourpage" target="_blank">
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                </Link>
                <Link
                  to="https://api.whatsapp.com/send?phone=201280104685"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
                <Link to="/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="brandPicCon">
              <img src={TextFktarek} alt="فكرتك" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="brandPicCon">
              {/* <img className="imgshadow" src={giftImg} alt="cross" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topsocialnavbar;
