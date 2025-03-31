import React, { useState } from "react";
import Tshirts from "../../dataB/TshirtsDataBase";
import { useParams } from "react-router-dom";

export function DynamicPicSon() {
  const { gender, typo, id } = useParams();
  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );
  const [selectside, setSelectside] = useState("front");
  if (!tshirt) return <div>T-shirt not found!</div>;

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 dynamicPicSon">
      <div className="dynaminPicCon">
        <img
          src={tshirt.front}
          alt="This color is Not available now please choose another color"
        />
      </div>
      <div className="frontAndBackCon">
        <div onClick={() => setSelectside("front")}>Front</div>
        <div onClick={() => setSelectside("back")}>Back</div>
      </div>
      <div>
        <h4>{tshirt.desc}</h4>
        <h5>{tshirt.price} LE</h5>
        <p>Some quick example text</p>
      </div>
    </div>
  );
}
