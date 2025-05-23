import React from "react";
import MugsTopSection from "../componants/mugs/mugsTopSection";
import MugsCard from "../componants/mugs/mugsCard";
import ProductsMugsCard from "../componants/productsMugsCard";
import Whatshot from "../componants/whatsHot";

export default function Mugs() {
  return (
    <>
      <MugsTopSection />
      <MugsCard />
      <ProductsMugsCard />
      <Whatshot />
    </>
  );
}
