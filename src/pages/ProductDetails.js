import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import { ClothesContext } from "../App";

function ProductDetails() {
  let { paramId } = useParams();
  const clothes = useContext(ClothesContext);

  const { id, name, image, desc, price } = clothes.find(
    item => item.id === paramId
  );

  return (
    <div>
      <h1>Product Details</h1>
      {id && (
        <ProductCard
          key={id}
          id={id}
          name={name}
          image={image}
          desc={desc}
          price={price}
        />
      )}
    </div>
  );
}

export default ProductDetails;
