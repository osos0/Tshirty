import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faSquareFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import TextFktarek from "../imgs/slang-bg-remove.png";

const Topsocialnavbar = () => {
  return (
    <div className="topConsoc">
      <div className="topSonLeft">
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
      <div className="topSonCenter">
        {" "}
        <div className="brandPicConeR">
          <img src={TextFktarek} alt="فكرتك" />
        </div>
      </div>
      <div className="topSonRight">sign in</div>
    </div>
  );
};

export default Topsocialnavbar;
