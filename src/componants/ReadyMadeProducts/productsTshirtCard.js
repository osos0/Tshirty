// import React, { useState } from "react";
// import cutomeTshirt from "../../imgs/tshirts/TshirtsProductsCards/01.jpg";
// import LastTshirt from "../../imgs/tshirts/TshirtsProductsCards/00.jpg";
// import TshirtsReadyMadeDB from "../../dataB/tshirts/TshirtsProudectesCardDB";

// export default function ProductsTshirtCard() {
//   const [visibleCount, setVisibleCount] = useState(4); // 1 ثابت + 3 من الماب

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 2, 7));
//   };

//   return (
//     <div className="container productsTshirtCard">
//       <h1>T-shirts</h1>
//       <div className="row productsTshirtCardRow">
//         {/* العنصر الثابت */}
//         <div className="col-lg-3 col-md-3 col-6 son">
//           <div className="sonPadding">
//             <div className="proSonImgCon">
//               <img src={cutomeTshirt} alt="Custom T-shirt" />
//             </div>
//             <div className="proSonDetialsCon">
//               <div className="Detials">Custom T-shirt</div>
//               <div className="price">400 LE</div>
//             </div>
//           </div>
//         </div>

//         {/* باقي العناصر بالماب من الثاني إلى الحد المسموح */}
//         {TshirtsReadyMadeDB.slice(1, visibleCount).map((item) => (
//           <div key={item.id} className="col-lg-3 col-md-3 col-6 son">
//             <div className="sonPadding">
//               <div className="proSonImgCon">
//                 <img src={item.img} alt={`Product ${item.id}`} />
//               </div>
//               <div className="proSonDetialsCon">
//                 <div className="Detials">{item.desc}</div>
//                 <div className="price">{item.price} LE</div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {visibleCount === 7 && (
//           <div className="col-lg-3 col-md-3 col-6 son">
//             <div className="sonPadding">
//               <div className="proSonImgCon">
//                 <img src={LastTshirt} alt="Custom T-shirt" />
//               </div>
//               <div className="proSonDetialsCon">
//                 <div className="Detials">Custom T-shirt</div>
//                 <div className="price">400 LE</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* إظهار الزر فقط إذا لم نصل إلى 8 عناصر */}
//       {visibleCount < 7 && (
//         <button className="standerbtn" onClick={handleLoadMore}>
//           More
//         </button>
//       )}
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import cutomeTshirt from "../../imgs/tshirts/TshirtsProductsCards/01.jpg";
import LastTshirt from "../../imgs/tshirts/TshirtsProductsCards/00.jpg";
import TshirtsReadyMadeDB from "../../dataB/tshirts/TshirtsProudectesCardDB";

import { CartContext } from "../../componants/CartContext";
import { toast } from "react-toastify";

export default function ProductsTshirtCard() {
  const [visibleCount, setVisibleCount] = useState(4);
  const { addToCart } = useContext(CartContext);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, 7));
  };

  return (
    <div className="container productsTshirtCard">
      <h1>T-shirts</h1>
      <div className="row productsTshirtCardRow">
        {/* العنصر الثابت الأول */}
        <div className="col-lg-3 col-md-3 col-6 son">
          <div className="sonPadding">
            <div className="proSonImgCon">
              <img src={cutomeTshirt} alt="Custom T-shirt" />
            </div>
            <div className="proSonDetialsCon">
              {/* <div className="Detials">Custom T-shirt</div> */}
              <div className="conPriceAndBtn">
                {/* <div className="price">400 LE</div> */}
                <button className="addToCartBtnReady">Let's Design</button>
              </div>
            </div>
          </div>
        </div>

        {/* باقي المنتجات */}
        {TshirtsReadyMadeDB.slice(1, visibleCount).map((item) => (
          <div key={item.id} className="col-lg-3 col-md-3 col-6 son">
            <div className="sonPadding">
              <div className="proSonImgCon">
                <img src={item.img} alt={`Product ${item.id}`} />
              </div>
              <div className="proSonDetialsCon">
                <div className="Detials">{item.desc}</div>
                <div className="conPriceAndBtn">
                  <div className="price">{item.price} LE</div>
                  <button
                    className="addToCartBtnReady"
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

        {/* العنصر الأخير */}
        {visibleCount === 7 && (
          <div className="col-lg-3 col-md-3 col-6 son">
            <div className="sonPadding">
              <div className="proSonImgCon">
                <img src={LastTshirt} alt="Custom T-shirt" />
              </div>
              <div className="proSonDetialsCon">
                {/* <div className="Detials">Custom T-shirt</div> */}
                <div className="conPriceAndBtn">
                  {/* <div className="price">400 LE</div> */}
                  <button className="addToCartBtnReady">
                    Let's See More T-shirts
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {visibleCount < 7 && (
        <button className="standerbtn" onClick={handleLoadMore}>
          More
        </button>
      )}
    </div>
  );
}
