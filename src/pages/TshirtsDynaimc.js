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
      <h1>Dynamic T-shirt Page</h1>
      <img src={tshirt.img} alt={tshirt.desc} />
      <p>Gender: {gender}</p>
      <p>Type: {typo}</p>
      <p>ID: {id}</p>
      <h2>{tshirt.desc}</h2>
      <h3>{tshirt.price} LE</h3>
    </div>
  );
}
