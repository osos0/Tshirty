import React from "react";
import { useParams } from "react-router-dom";
import Mugs from "../../dataB/mugs/MugsDataBase";

export default function MugsDynaimc() {
  const { gender, typo, id } = useParams();

  const MugsFind = Mugs[gender]?.find(
    (MugsFind) => MugsFind.typo === typo && MugsFind.id === parseInt(id)
  );

  if (!MugsFind) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mugdynamicleftSon">1</div>
          <div className="col-lg-6 col-md-6 col-sm-12 mugdynamicPicSon">2</div>
          <div className="col-lg-3 col-md-6 col-sm-12 mugdynamicRightSon">
            3
          </div>
        </div>
      </div>
    </>
  );
}
