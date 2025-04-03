import React from "react";

export default function DynamicPicSon({
  tshirt,
  selectedColor,
  selectedDesignIMG,
  selectedPostionIMG,
}) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 dynamicPicSon">
      <div className="dynaminPicCon">
        <img
          src={require(`../../imgs/tshirts/colors/${selectedColor}-front-removebg-preview.png`)}
          alt="T-shirt Preview"
        />
        {selectedPostionIMG && (
          <img
            src={selectedPostionIMG}
            alt="Position Design"
            className="position-overlay"
          />
        )}
        {selectedDesignIMG && (
          <img
            src={selectedDesignIMG}
            alt="Design"
            className="design-overlay"
          />
        )}
      </div>
      <div className="frontAndBackCon">
        <div>Front</div>
        <div>Back</div>
      </div>
      <h4>{tshirt.desc}</h4>
      <h5>{tshirt.price} LE</h5>
    </div>
  );
}
