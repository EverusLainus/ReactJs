import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";
import { Products } from "./Products";

import { Routes, Route } from "react-router-dom";
import { ProductsDisplay } from "./ProductsDisplay";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsdisplay" element={<ProductsDisplay />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
