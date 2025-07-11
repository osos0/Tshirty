import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import firstLogo from "../imgs/firstLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cart from "../componants/Cart";
import { CartContext } from "../componants/CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleCartClick = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <div className="containerofTheNav">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={firstLogo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler btn btn-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navFix">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    T-Shirt & Clothing
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Design your idea
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tshirts">
                        T-shirts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Hoodies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Polo Shirts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Sweatshirts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Kids Clothing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gifts
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Design your Gift
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/mugs">
                        Mugs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/othergifts">
                        Bags
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Towels
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Cushions
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Keyrings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Coasters
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="rightH3">hello</h3>
            </div>
          </div>
        </nav>

        {/* <div className="topSonRight">
          <div className="navCard">
            <div
              className="nav-link"
              onClick={handleCartClick}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="cartCount">0</span>
            </div>
          </div>
        </div> */}
        <div className="topSonRight">
          <div className="navCard">
            <div
              className="nav-link position-relative"
              onClick={handleCartClick}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItems.length !== 0 ? (
                <span className="cartCount badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isCartVisible && (
        <div className="cartModalOverlay">
          <div className="cartModalContent">
            <button className="closeModal" onClick={handleCloseCart}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <Cart />
          </div>
        </div>
      )}
    </>
  );
}
