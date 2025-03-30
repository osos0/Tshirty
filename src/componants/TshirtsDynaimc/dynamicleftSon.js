import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Tshirts from "../../dataB/HomeDataBase.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTShirt } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";

export default function DynamicLeftSon() {
  // ✅ Component name fixed
  const { gender, typo, id } = useParams();

  const [selectedColor, setSelectedColor] = useState("white"); // ✅ Default color
  const [popupModel, setPopupModel] = useState(false); // ✅ Fixed state variable name

  const tshirt = Tshirts[gender]?.find(
    (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
  );

  if (!tshirt) {
    return <div>T-shirt not found!</div>;
  }

  // ✅ Fixed function name
  const toggleModel = () => {
    setPopupModel((prev) => !prev);
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 dynamicleftSon">
      <div className="dynamicleftSon1">
        Design Tools
        <hr />
      </div>
      <div className="dynamicleftSon1Color">
        <h5 className="subjectOf">Color</h5>
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
        <hr />
      </div>
      <div className="dynamicleftSon2">
        <button className="dynamicleftSon2Tool" onClick={toggleModel}>
          <FontAwesomeIcon icon={faTShirt} />
          <div>Print Position</div>
          <FontAwesomeIcon icon={faPencil} />
        </button>

        {popupModel && ( // ✅ Fixed state variable usage
          <>
            <div className="overlay" onClick={toggleModel}></div>
            <div className="popupModel">
              <div>hello</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, ipsum et elementum tristique, mauris mi fermentum
                sem, sed pulvinar neque mauris non erat.
              </p>
              <button className="closePopupModel" onClick={toggleModel}>
                Close
              </button>
            </div>
          </>
        )}

        <div className="dynamicleftSon2Tool">
          <FontAwesomeIcon icon={faImages} />
          <div>Design Your Own</div>
          <FontAwesomeIcon icon={faPencil} />
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { useParams } from "react-router-dom";
// import Tshirts from "../../dataB/HomeDataBase.js";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencil, faTShirt } from "@fortawesome/free-solid-svg-icons";
// import { faImages } from "@fortawesome/free-regular-svg-icons";

// export default function dynamicleftSon() {
//   const { gender, typo, id } = useParams();

//   const [selectedColor, setSelectedColor] = useState("white"); // Default color

//   const [popupmodel, setPopupmodel] = useState(false);

//   const tshirt = Tshirts[gender]?.find(
//     (tshirt) => tshirt.typo === typo && tshirt.id === parseInt(id)
//   );

//   if (!tshirt) {
//     return <div>T-shirt not found!</div>;
//   }

//   // Handle Popup Model
//   const toggelModel = () => {
//     setPopupmodel(!popupmodel);
//   };

//   return (
//     <div className="col-lg-3 col-md-6 col-sm-12 dynamicleftSon">
//       <div className="dynamicleftSon1">
//         Design Tools
//         <hr />
//       </div>
//       <div className="dynamicleftSon1Color">
//         <h5 className="subjectOf">Color</h5>
//         <div className="colorsFather">
//           {tshirt.colores.map((color, index) => (
//             <div
//               key={index}
//               className="colrSon"
//               style={{ backgroundColor: color }}
//               onClick={() => setSelectedColor(color)}
//             ></div>
//           ))}
//         </div>
//         <div className="selectedColorName">{selectedColor}</div>
//         <hr />
//       </div>
//       <div className="dynamicleftSon2">
//         <button className="dynamicleftSon2Tool" onClick={toggelModel}>
//           <FontAwesomeIcon icon={faTShirt} />
//           <div>Print Postion</div>
//           <FontAwesomeIcon icon={faPencil} />
//         </button>
//         {popupmodel && (
//           <>
//             <div className="overlay"></div>
//             <div className="popupModel">
//               <div>hello</div>
//               <p>
//                 Loren50 Loren ipsum dolor sit amet, consectetur adipiscing elit.
//                 Sed consectetur, ipsum et elementum tristique, mauris mi
//                 fermentum sem, sed pulvinar neque mauris non erat. Donec vel
//                 libero non arcu facilisis bibendum. Donec vel libero non arcu
//                 facilisis bibendum. Donec vel libero non arcu facilisis
//                 bibendum. Donec vel libero non arcu facilisis bibendum. Donec
//                 vel libero non arcu facilisis bibendum. Donec vel libero non
//                 arcu
//               </p>
//               <button className="closePopupModel" onClick={toggelModel}>
//                 Close
//               </button>
//             </div>
//           </>
//         )}

//         <div className="dynamicleftSon2Tool">
//           <FontAwesomeIcon icon={faImages} />
//           <div>Design Your Own</div>
//           <FontAwesomeIcon icon={faPencil} />
//         </div>
//       </div>
//     </div>
//   );
// }
