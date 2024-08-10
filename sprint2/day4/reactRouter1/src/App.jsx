import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
