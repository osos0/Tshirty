export default function DynamicLeftSon({
  tshirt,
  selectedColor,
  setSelectedColor,
  setSelectedDesignIMG,
  setSelectedPostionIMG,
}) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 dynamicleftSon">
      <div className="dynamicleftSon1">Design Tools</div>
      <hr />
      <div className="dynamicleftSonColor">
        <h5>Color</h5>
        <div className="colorsFather">
          {tshirt.colores.map((color, index) => (
            <div
              key={index}
              className="colrSon"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
        <div className="selectedColorName">{selectedColor}</div>
      </div>
      <hr />
    </div>
  );
}
