import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: whitesmoke;
  display: flex;
  height: 8vh;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid black;
`;

const StyledSpan = styled.h3`
  cursor: pointer;
  height: 5vh;
  padding-top: 15px;
  align-items: center;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledSpan>Home</StyledSpan>
      </Link>
      <Link to="/contact">
        <StyledSpan>Contact</StyledSpan>
      </Link>
      <Link to="/favourites">
        <StyledSpan>Favourites</StyledSpan>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
