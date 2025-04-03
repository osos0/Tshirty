import React from "react";
import { useParams } from "react-router-dom";
import Tshirts from "../../dataB/TshirtsDataBase";

import { useState } from "react";

export default function DynamicRight() {
  const { gender, typo, id } = useParams();

  // Initialize counters for each possible size
  const [sizeCounters, setSizeCounters] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    "3XL": 0,
  });

  const [selectprintmethod, setSelectprintmethod] = useState("Printing"); // Default size

  // const selectedDesigns = DesignsDatabase[selectiondesigne] || [];

  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );

  if (!tshirt) {
    return <div>T-shirt not found!</div>;
  }

  // Handle increment for a specific size
  const handleIncrement = (size) => {
    setSizeCounters((prev) => ({
      ...prev,
      [size]: prev[size] + 1,
    }));
  };

  // Handle decrement for a specific size
  const handleDecrement = (size) => {
    setSizeCounters((prev) => ({
      ...prev,
      [size]: Math.max(prev[size] - 1, 0), // Prevent going below 0
    }));
  };

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
        <div className="designYourOwnSon2PrintMethod">
          <h5 className="subjectOf">Print Method</h5>
          <h5 className="selectedColorName">{selectprintmethod}</h5>
          <div className="printMethod">
            <div onClick={() => setSelectprintmethod("Printing")}>Printing</div>
            <div onClick={() => setSelectprintmethod("Embroidery")}>
              Embroidery
            </div>
          </div>
          <hr />
        </div>

        <div className="designYourOwnSon4">
          <h5 className="subjectOf">Size</h5>
          {tshirt.sizes.map((size, index) => (
            <div key={index} className="sizeSon">
              <div className="sizesName">{size}</div>
              <div className="sizesConrol">
                <div
                  className="decrease"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDecrement(size);
                  }}
                >
                  -
                </div>
                <div className="zero">{sizeCounters[size]}</div>
                <div
                  className="increase"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIncrement(size);
                  }}
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
              {Object.entries(sizeCounters).reduce((total, [size, count]) => {
                return total + count * tshirt.price;
              }, 0)}{" "}
              LE
            </div>
          </div>
        </div>
        <hr />

        <div className="add-to-cart">
          <button
            className="btn btn-primary"
            onClick={() => {
              // Filter out sizes with 0 quantity
              const selectedSizes = Object.entries(sizeCounters)
                .filter(([_, count]) => count > 0)
                .map(([size, count]) => ({ size, count }));

              console.log("Selected items:", selectedSizes);
              // Add your cart logic here
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
