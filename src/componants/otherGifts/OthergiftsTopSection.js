import othergiftsImg from "../../imgs/otherGifts/gift1.png";

export default function othergiftsTopSection() {
  return (
    <div>
      <div>
        <div className="container TshirtsBigBoxContainer">
          <div className="row TshirtsBigBox">
            <div className="TshirtsBigBoxLeft col-lg-6 col-md-6 col-sm-12">
              <div className="page__TitleText">
                <h1 className="page__TitleText--h1">Other gifts </h1>
                <p className="page__TitleText--h2">
                  Design Your Own Other gifts
                </p>
              </div>
            </div>
            <div className="TshirtsBigBoxRight col-lg-6 col-md-6 col-sm-12">
              <div className="TshirtsBigBoxRightRed">
                <div className="TshirtsBigBoxRightGray">
                  <img src={othergiftsImg} alt="Tshirt"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
