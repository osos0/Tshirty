import React from "react";
import OffersAds from "../componants/OffersAds";
import BigPictures from "../componants/bigPictures";
import GiftYouLove from "../componants/GigtYouLove";
import MoreOffers from "../componants/MoreOffers";

export default function Home() {
  return (
    <div>
      <OffersAds />
      <BigPictures />
      <GiftYouLove />
      <MoreOffers />
    </div>
  );
}
