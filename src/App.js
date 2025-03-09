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
import About from "./pages/About";

function App() {
  return (
    <Fragment>
      {/* <Topsocialnavbar /> */}
      <Topsocialnavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
