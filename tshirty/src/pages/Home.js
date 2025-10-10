import React from "react";
import OffersAds from "../componants/OffersAds";
import BigPictures from "../componants/bigPictures";
import Whatshot from "../componants/whatsHot";
import ProductsTshirtCard from "../componants/ReadyMadeProducts/productsTshirtCard";
import ProductsMugsCard from "../componants/ReadyMadeProducts/productsMugsCard";
import MoreOffers from "../componants/MoreOffers";

export default function Home() {
  return (
    <div>
      <OffersAds />
      <BigPictures />
      <Whatshot />
      <ProductsTshirtCard />
      <ProductsMugsCard />
      <MoreOffers />
    </div>
  );
}
