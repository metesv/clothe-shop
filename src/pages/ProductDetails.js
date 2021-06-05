import React from "react";

import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  return (
    <div>
      <h1>Product Details{id}</h1>
    </div>
  );
}

export default ProductDetails;
