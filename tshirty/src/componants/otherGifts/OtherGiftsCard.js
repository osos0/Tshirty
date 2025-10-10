import { useNavigate } from "react-router-dom";
import OtherGiftsDB from "../../dataB/otherGifts/OtherGiftsProductsCard";

export default function OtherGiftsCard() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row tshirtesCardRow">
          <h3>Which Gift Will You Design On?</h3>

          <p>{Object.keys(OtherGiftsDB)[0]}</p>
          {OtherGiftsDB.hat.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-sm-6 tshirtesCardCard"
            >
              <div className="CardCon">
                <div className="cardImgCon">
                  <img src={item.img} className="" alt={item.desc} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.desc}</h4>
                  <h5 className="card-title">{item.price} LE</h5>
                  <p className="card-text">Some quick example text</p>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      navigate(
                        `/othergifts/${item.gender}/${item.typo}/${item.id}`
                      )
                    }
                  >
                    Let’s Design
                  </button>
                </div>
              </div>
            </div>
          ))}

          <hr />
          <p>{Object.keys(OtherGiftsDB)[1]}</p>
          {OtherGiftsDB.bag.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-sm-6 tshirtesCardCard"
            >
              <div className="CardCon">
                <div className="cardImgCon">
                  <img src={item.img} className="" alt={item.desc} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.desc}</h4>
                  <h5 className="card-title">{item.price} LE</h5>
                  <p className="card-text">Some quick example text</p>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      navigate(
                        `/othergifts/${item.gender}/${item.typo}/${item.id}`
                      )
                    }
                  >
                    Let’s Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
