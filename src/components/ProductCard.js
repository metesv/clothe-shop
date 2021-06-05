import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledDiv = styled.div`
  border: 2px solid black;
  padding-top: 30px;
`;

function ProductCard({ key, image, name, desc, price }) {
  console.log(name);
  return (
    <StyledDiv>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <span>{price}</span>
      <br />
      <Link to={"/" + name}>
        <button>Details</button>
      </Link>
      <button>Add favorites</button>
    </StyledDiv>
  );
}

export default ProductCard;
