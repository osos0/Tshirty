import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faBoxOpen,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function MoreOffers() {
  return (
    <div className="container mainStyle">
      <div className="row">
        {/* Left Section - Image Display */}
        <div className="col-lg-6 col-md-6 col-sm-12 leftaboutStyle">
          <div className="row rowleftaboutStyle">
            <div className="orangeDot"></div>

            <div className="col-lg-6 col-md-6 col-sm-6 childOne">
              <div></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 childTwo">
              <div></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 childThree">
              <div></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 childFour">
              <div className="blueBigFram">
                5K+
                <p>Happy Customers</p>
                <div className="blueFram"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - About Gifts */}
        <div className="col-lg-6 col-md-6 col-sm-12 RightaboutStyle">
          <h4>Bringing Joy to Every Occasion</h4>
          <h2>Your Destination for Unique & Thoughtful Gifts</h2>
          <p>
            Discover a world of heartfelt gifts for every occasion. From custom
            surprises to premium packaging, we make gifting special.
          </p>

          {/* Features */}
          <div className="fourBoxes">
            <div className="fourBoxesBigChild">
              <div className="fourBoxesChild">
                <FontAwesomeIcon icon={faGift} />
                <div>Personalized Gifts</div>
              </div>
              <div className="fourBoxesChild">
                <FontAwesomeIcon icon={faBoxOpen} />
                <div>Premium Packaging</div>
              </div>
            </div>

            <div className="fourBoxesBigChild">
              <div className="fourBoxesChild">
                <FontAwesomeIcon icon={faStar} />
                <div>Exclusive Collections</div>
              </div>
              <div className="fourBoxesChild">
                <FontAwesomeIcon icon={faHeart} />
                <div>Handpicked with Love</div>
              </div>
            </div>
          </div>

          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default MoreOffers;
