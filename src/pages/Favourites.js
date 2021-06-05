import React, { useContext } from "react";

import ProductCard from "../components/ProductCard";

import { FavouriteClothesContext } from "../App";

function Favourites() {
  const favouriteClothes = useContext(FavouriteClothesContext);
  console.log(favouriteClothes[0]);
  return (
    <div>
      <h1>Favorites</h1>
      {favouriteClothes[0].map(({ id, image, name, desc, price }) => (
        <ProductCard
          key={id}
          image={image}
          name={name}
          desc={desc}
          price={price}
        />
      ))}
    </div>
  );
}

export default Favourites;
