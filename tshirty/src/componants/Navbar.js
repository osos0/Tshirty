import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import firstLogo from "../imgs/firstLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cart from "../componants/Cart";
import { CartContext } from "../componants/CartContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleCartClick = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  const handleSignout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/signout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.error(error.message);
    }
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
            </div>
            {/* {currentUser ? (
              <drop></drop>
            ) : (
              
              <Link className="signinBTN">Sign in</Link>
            )} */}
            {currentUser ? (
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* {console.log(currentUser)} */}
                  <img
                    src={
                      currentUser.googlePhotoURL ||
                      "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    }
                    alt="User"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                    style={{ objectFit: "cover" }}
                  />

                  <faChevronDown size={14} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="dropdown-item text-center">
                    <strong>{currentUser.username}</strong>
                    <br />
                    <small className="text-muted">{currentUser.email}</small>
                    <br />
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {/* <button
                      className="dropdown-item text-dark"
                      // onClick={handleLogout}
                    >
                      Profile
                    </button> */}
                    <Link
                      to="/dashboard?tab=profile"
                      className="dropdown-item text-dark"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleSignout}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="signinBTN" to="/signin">
                Sign in
              </Link>
            )}
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
