import React from "react";
import { Link } from "react-router-dom";
// import fotPic from "../imgs/cross2.png";
import giftPic from "../imgs/gift1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookMessenger,
  faSquareFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container footerGenral">
      <div className="row conOfFooter">
        {/* القسم الأول: صورة ومعلومات الكنيسة */}
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="fotPicCon1">
            <div className="fotPicCon">
              <img src={giftPic} alt="Church" />
            </div>
            <h5>Design your own</h5>
          </div>
        </div>

        {/* القسم الثاني: روابط الموقع */}
        <div className="col-lg-4 col-md-4 col-sm-4 fotPicCon2">
          <h2 className="titleFooterH2">
            Pages
            <hr />
          </h2>
          <ul>
            {["Home", "Clothing", "Gift", "About us"].map((page, index) => (
              <li key={index}>
                <Link className="nav-link" to="/">
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* القسم الثالث: معلومات الاتصال والأيقونات */}
        <div className="col-lg-4 col-md-4 col-sm-4 fotPicCon3">
          <ul className="ulcon">
            <div className="lichild1">
              <li>
                <div className="fotMapCon">
                  <span>El Nozha , Cairo EG</span>
                  <FontAwesomeIcon icon={faLocationPin} />
                </div>
              </li>
              <li>
                <div className="fotMapCon">
                  <span>012 000 0000 00</span>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
              </li>
              <li>
                <div className="fotMapCon">
                  <span>0025 69898 </span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </li>
            </div>
            <div className="lichild2">
              <li>
                <div className="conOfsvg">
                  <Link to="/" target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </Link>
                  <Link to="http://m.me/yourpage" target="_blank">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </Link>
                  <Link
                    to="https://api.whatsapp.com/send?phone=201210008710"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                  <Link to="/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
