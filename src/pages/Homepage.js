import React, { useContext } from "react";
import styled from "styled-components";

import ProductCard from "../components/ProductCard";
import { ClothesContext } from "../App";

const StyledDiv = styled.div`
  display: block;
`;

function Homepage() {
  const clothes = useContext(ClothesContext);

  return (
    <StyledDiv>
      {clothes &&
        clothes.map(({ id, image, name, desc, price }) => (
          <ProductCard
            key={id}
            id={id}
            image={image}
            name={name}
            desc={desc}
            price={price}
          />
        ))}
    </StyledDiv>
  );
}

export default Homepage;
