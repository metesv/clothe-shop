import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

import Navbar from "./components/Navbar";

export const ClothesContext = React.createContext();

function App() {
  const [clothes, setClothes] = useState(null);

  useEffect(() => {
    axios
      .get("https://60bbc6ef3a39900017b2de9f.mockapi.io/clothes")
      .then(response => setClothes(response.data));
  }, []);

  return (
    <div className="App">
      <ClothesContext.Provider value={clothes}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:id" children={<ProductDetails />} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </ClothesContext.Provider>
    </div>
  );
}

export default App;
