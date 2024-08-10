import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
