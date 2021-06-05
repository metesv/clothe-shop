import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FavouriteClothesContext } from "../App";

const StyledDiv = styled.div`
  border: 2px solid black;
  padding-top: 30px;
`;

function ProductCard({ id, image, name, desc, price }) {
  const [favouriteClothes, setFavouriteClothes] = useContext(
    FavouriteClothesContext
  );

  function handleAddFavourites() {
    setFavouriteClothes([
      ...favouriteClothes,
      { id, image, name, desc, price },
    ]);
  }

  return (
    <StyledDiv>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <span>{price}</span>
      <br />
      <Link to={"/clothes/" + name}>
        <button>Details</button>
      </Link>
      <button onClick={handleAddFavourites}>Add favorites</button>
    </StyledDiv>
  );
}

export default ProductCard;
