import React, { useState } from "react";
import cutomeMug from "../../imgs/Mugs/MugsProductsCards/01.jpg";
import LastMug from "../../imgs/Mugs/MugsProductsCards/00.jpg";
import MugsReadyMadeDB from "../../dataB/mugs/MugsProudectesCardDB";

import { CartContext } from "../../componants/CartContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ProductsMugCard() {
  const [visibleCount, setVisibleCount] = useState(4); // 1 ثابت + 3 من الماب

  const { addToCart } = useContext(CartContext);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, 7)); // لا تتعدى 8
  };

  return (
    <div className="container productsMugsCard">
      <h1>Mugs</h1>
      <div className="row productsMugsCardRow">
        {/* المنتج الأول ثابت */}
        <div className="col-lg-3 col-md-3 col-6 son">
          <div className="sonPadding">
            <div className="proSonImgCon">
              <img src={cutomeMug} alt="Custom Mug" />
            </div>
            <div className="proSonDetialsCon">
              {/* <div className="Detials">Custom Mug</div> */}
              <div className="conPriceAndBtn">
                {/* <div className="price">400 LE</div> */}
                <button className="addToCartBtnReady">Let's Design</button>
              </div>
            </div>
          </div>
        </div>

        {/* عرض المنتجات باستخدام map مع slice */}
        {/* {MugsReadyMadeDB.slice(1, visibleCount).map((item) => (
          <div key={item.id} className="col-lg-3 col-md-3 col-6 son">
            <div className="sonPadding">
              <div className="proSonImgCon">
                <img src={item.img} alt={`Mug ${item.id}`} />
              </div>
              <div className="proSonDetialsCon">
                <div className="Detials">{item.desc}</div>
                <div className="price">{item.price} LE</div>
              </div>
            </div>
          </div>
        ))}
        {visibleCount === 7 && (
          <div className="col-lg-3 col-md-3 col-6 son">
            <div className="sonPadding">
              <div className="proSonImgCon">
                <img src={LastMug} alt="Custom Mug" />
              </div>
              <div className="proSonDetialsCon">
                <div className="Detials">Custom Mug</div>
                <div className="price">400 LE</div>
              </div>
            </div>
          </div>
        )} */}
        {MugsReadyMadeDB.slice(1, visibleCount).map((item) => (
          <div key={item.id} className="col-lg-3 col-md-3 col-6 son">
            <div className="sonPadding">
              <div className="proSonImgCon">
                <img src={item.img} alt={`Mug ${item.id}`} />
              </div>
              <div className="proSonDetialsCon">
                <div className="Detials">{item.desc}</div>
                <div className="conPriceAndBtn">
                  <div className="price">{item.price} LE</div>
                  <button
                    className="addToCartBtnReady"
                    // className="standerbtn"
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.desc,
                        price: item.price,
                        image: item.img,
                        quantity: 1,
                        color: "default",
                        printMethod: "readyMade",
                      });
                      toast.success("✅ Product added to cart successfully!");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {visibleCount === 7 && (
          <div className="col-lg-3 col-md-3 col-6 son">
            <div className="sonPadding">
              <div className="proSonImgCon">
                <img src={LastMug} alt="Custom Mug" />
              </div>
              <div className="proSonDetialsCon">
                {/* <div className="Detials">Custom Mug</div> */}
                <div className="conPriceAndBtn">
                  {/* <div className="price">00 LE</div> */}
                  <button className="addToCartBtnReady">
                    Let's See More Mugs
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* زر تحميل المزيد إذا لم نصل للحد الأقصى */}
      {visibleCount < 7 && (
        <button className="standerbtn" onClick={handleLoadMore}>
          More
        </button>
      )}
    </div>
  );
}
