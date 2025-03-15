import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faBed,
  faNotesMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

function MoreOffers() {
  return (
    <>
      <div className="container mainStyle">
        <div className="row">
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
                  20
                  <p>Years Experience</p>
                  <div className="blueFram"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 RightaboutStyle">
            <h4> About Us</h4>
            <h2>The Great Place Of Medical Hospital Center</h2>
            <p>
              We provide the special tips and advice’s of heath care treatment
              and high level of best technology involve in the our hospital.
            </p>
            <div className="fourBoxes">
              <div className="fourBoxesBigChild">
                <div className="fourBoxesChild">
                  <FontAwesomeIcon icon={faAmbulance} />
                  <div>Emergency Help </div>
                </div>
                <div className="fourBoxesChild">
                  <FontAwesomeIcon icon={faBed} />
                  <div>Qualified Doctors </div>
                </div>
              </div>
              <div className="fourBoxesBigChild">
                <div className="fourBoxesChild">
                  <FontAwesomeIcon icon={faUserDoctor} />
                  <div>Best Professionals </div>
                </div>
                <div className="fourBoxesChild">
                  <FontAwesomeIcon icon={faNotesMedical} />
                  <div> Medical Treatment</div>
                </div>
              </div>
            </div>

            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreOffers;
