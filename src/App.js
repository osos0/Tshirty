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
import TshirtsDynaimc from "./componants/tshirts/TshirtsDynaimc";
import MugsDynaimc from "./componants/mugs/MugsDynaimc";
import Mugs from "./pages/Mugs";
import Otehergifts from "./pages/othersGifts";
import OtherGiftsDynamic from "./componants/otherGifts/OtherGiftsDynamic";

function App() {
  return (
    <Fragment>
      <Topsocialnavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/tshirts/:gender/:typo/:id" element={<TshirtsDynaimc />} />
        <Route path="/mugs" element={<Mugs />} />
        <Route path="/mugs/:gender/:typo/:id" element={<MugsDynaimc />} />
        <Route path="/othergifts" element={<Otehergifts />} />
        <Route
          path="/othergifts/:gender/:typo/:id"
          element={<OtherGiftsDynamic />}
        />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
