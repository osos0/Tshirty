import React from "react";
import { useParams } from "react-router-dom";
import Tshirts from "../dataB/TshirtsDataBase"; // Import Tshirts data

export default function TshirtsDynamic() {
  const { gender, typo, id } = useParams(); // Extract gender, typo, and id from the URL

  // Find the T-shirt based on gender, typo, and id
  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );

  if (!tshirt) {
    return <div>T-shirt not found!</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">14</div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="">
              <div className="">
                <img src={tshirt.front} className="" alt="T-shirt" />
              </div>
              <div className="">
                <h4 className="">{tshirt.desc}</h4>
                <h5 className="">{tshirt.price} LE</h5>
                <p className="">Some quick example text</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">55</div>
        </div>
      </div>
    </div>
  );
}
