import "./styles/main.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Topsocialnavbar from "./componants/Topsocialnavbar";

import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import Home from "./pages/Home";
import Tshirts from "./pages/Tshirts";

function App() {
  return (
    <Fragment>
      {/* <Topsocialnavbar /> */}
      <Topsocialnavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirts" element={<Tshirts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
