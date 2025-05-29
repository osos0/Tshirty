import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Tshirts from "../../dataB/tshirts/TshirtsDataBase"; // Import the Tshirts data

export default function TshirtesCard() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div>
      <div className="container">
        <div className="row tshirtesCardRow">
          <h3>Which T-shirt Model Will You Design On ?</h3>
          <p>{Object.keys(Tshirts)[0]}</p>
          {Tshirts.Men.map((tshirt) => (
            <div
              key={tshirt.id}
              className="col-lg-4 col-md-6 col-sm-6 tshirtesCardCard"
            >
              <div className="CardCon">
                <div className="cardImgCon">
                  <img src={tshirt.img} className="" alt="T-shirt" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{tshirt.desc}</h4>
                  <h5 className="card-title">{tshirt.price} LE</h5>
                  <p className="card-text">Some quick example text</p>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      navigate(
                        `/tshirts/${tshirt.gender}/${tshirt.typo}/${tshirt.id}`
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
          <p>{Object.keys(Tshirts)[1]}</p>
          {Tshirts.Woman.map((tshirt) => (
            <div
              key={tshirt.id}
              className="col-lg-4 col-md-6 col-sm-6 tshirtesCardCard"
            >
              <div className="CardCon">
                <div className="cardImgCon">
                  <img src={tshirt.img} className="" alt="T-shirt" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{tshirt.desc}</h4>
                  <h5 className="card-title">{tshirt.price} LE</h5>
                  <p className="card-text">Some quick example text</p>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      navigate(
                        `/tshirts/${tshirt.gender}/${tshirt.typo}/${tshirt.id}`
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
          <p>{Object.keys(Tshirts)[2]}</p>
          {Tshirts.Kids.map((tshirt) => (
            <div
              key={tshirt.id}
              className="col-lg-4 col-md-6 col-sm-6 tshirtesCardCard"
            >
              <div className="CardCon">
                <div className="cardImgCon">
                  <img src={tshirt.img} className="" alt="T-shirt" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{tshirt.desc}</h4>
                  <h5 className="card-title">{tshirt.price} LE</h5>
                  <p className="card-text">Some quick example text</p>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      navigate(
                        `/tshirts/${tshirt.gender}/${tshirt.typo}/${tshirt.id}`
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
