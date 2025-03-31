import React, { useState } from "react";
import Tshirts from "../../dataB/TshirtsDataBase";
import { useParams } from "react-router-dom";

export function DynamicRightSon() {
  const { gender, typo, id } = useParams();
  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );
  const [sizeCounters, setSizeCounters] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    "3XL": 0,
  });
  if (!tshirt) return <div>T-shirt not found!</div>;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 dynamicRightSon">
      <div className="designYourOwn">
        <div className="designYourOwnSon1">
          Design Your Own {tshirt.typo} Shirts
        </div>
        <div className="designYourOwnSon2">
          <h4>{tshirt.price} LE</h4>
          <p>Per unit, inc VAT</p>
        </div>
        <hr />
        <div className="designYourOwnSon4">
          <h5 className="subjectOf">Size</h5>
          {tshirt.sizes.map((size, index) => (
            <div key={index} className="sizeSon">
              <div className="sizesName">{size}</div>
              <div className="sizesConrol">
                <div
                  className="decrease"
                  onClick={() =>
                    setSizeCounters((prev) => ({
                      ...prev,
                      [size]: Math.max(prev[size] - 1, 0),
                    }))
                  }
                >
                  -
                </div>
                <div className="zero">{sizeCounters[size]}</div>
                <div
                  className="increase"
                  onClick={() =>
                    setSizeCounters((prev) => ({
                      ...prev,
                      [size]: prev[size] + 1,
                    }))
                  }
                >
                  +
                </div>
              </div>
              <hr />
            </div>
          ))}
          <div className="total-price">
            <div className="totalPriceWord">Total Price:</div>
            <div className="totalPriceCurrency">
              {Object.entries(sizeCounters).reduce(
                (total, [size, count]) => total + count * tshirt.price,
                0
              )}{" "}
              LE
            </div>
          </div>
        </div>
        <hr />
        <div className="add-to-cart">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
