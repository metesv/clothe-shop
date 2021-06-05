import "./App.css";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/:id" children={<ProductDetails />} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
