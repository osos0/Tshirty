import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="containerofTheNav">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <Link className="dropdown-item" to="#">
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
                    <Link className="dropdown-item" to="#">
                      Mugs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
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
            <h3 className="rightH3">مرحبا</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
