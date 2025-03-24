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
        <div className="row dynamicPicFather">
          <div className="col-lg-3 col-md-6 col-sm-12 dynamicleftSon">14</div>

          <div className="col-lg-6 col-md-6 col-sm-12 dynamicPicSon">
            <div className="dynaminPicCon">
              <img src={tshirt.front} className="" alt="T-shirt" />
            </div>
            <div className="">
              <h4 className="">{tshirt.desc}</h4>
              <h5 className="">{tshirt.price} LE</h5>
              <p className="">Some quick example text</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 dynamicRightSon">
            <div className="designYourOwn">
              <div className="designYourOwnSon1">
                Design Your Own Sports Shirts
              </div>
              <div className="designYourOwnSon2">
                <h4>{tshirt.price} LE</h4>
                <p>Per unit, inc VAT</p>
              </div>
              <hr />
              <div className="designYourOwnSon3">
                <h5>Color</h5>
                <div className="colorsFather">
                  {tshirt.colores.map((color, index) => (
                    <div
                      key={index}
                      className="colrSon"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="designYourOwnSon4">
                <h5>Size</h5>
                <div className="sizeSon">
                  <div className="sizesName">XS</div>
                  <div className="sizesConrol">
                    <div className="decrease">-</div>
                    <div className="zero">0</div>
                    <div className="increase">+</div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
