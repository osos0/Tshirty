import React from "react";
import TshirtsTopSection from "../componants/tshirts/tshirtyTopSection";
import TshirtsCard from "../componants/tshirts/tshirtesCard";
import ProductsTshirtCard from "../componants/productsTshirtCard";
import Whatshot from "../componants/whatsHot";

export default function Tshirts() {
  return (
    <>
      <TshirtsTopSection />
      <TshirtsCard />
      <ProductsTshirtCard />
      <Whatshot />
    </>
  );
}
