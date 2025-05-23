import React from "react";
import OffersAds from "../componants/OffersAds";
import BigPictures from "../componants/bigPictures";
import Whatshot from "../componants/whatsHot";
import MoreOffers from "../componants/MoreOffers";

export default function Home() {
  return (
    <div>
      <OffersAds />
      <BigPictures />
      <Whatshot />
      <MoreOffers />
    </div>
  );
}
