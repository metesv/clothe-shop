import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import ProductCard from "../components/ProductCard";

const StyledDiv = styled.div`
  display: block;
`;

function Homepage() {
  const [clothes, setClothes] = useState(null);

  useEffect(() => {
    axios
      .get("https://60bbc6ef3a39900017b2de9f.mockapi.io/clothes")
      .then(response => setClothes(response.data));
  }, []);

  return (
    <StyledDiv>
      {clothes &&
        clothes.map(({ id, image, name, desc, price }) => (
          <ProductCard
            key={id}
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
