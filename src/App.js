import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import ProductDetails from "./pages/ProductDetails";

import Navbar from "./components/Navbar";

export const ClothesContext = React.createContext();
export const FavouriteClothesContext = React.createContext();

function App() {
  const [clothes, setClothes] = useState(null);
  const [favouriteClothes, setFavouriteClothes] = useState([]);

  useEffect(() => {
    axios
      .get("https://60bbc6ef3a39900017b2de9f.mockapi.io/clothes")
      .then(response => setClothes(response.data));
  }, []);

  console.log(favouriteClothes);

  return (
    <div className="App">
      <ClothesContext.Provider value={clothes}>
        <FavouriteClothesContext.Provider
          value={[favouriteClothes, setFavouriteClothes]}
        >
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route
              path="/clothes/:paramId"
              exact
              children={<ProductDetails />}
            />
            <Route path="/contact" exact component={Contact} />
            <Route path="/favourites" exact component={Favourites} />
          </Switch>
        </FavouriteClothesContext.Provider>
      </ClothesContext.Provider>
    </div>
  );
}

export default App;
