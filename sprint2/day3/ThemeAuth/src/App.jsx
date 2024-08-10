import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
  const { isLight, setIsLight } = useContext(ThemeContext);
  return (
    <>
      <div className={isLight ? "light" : "dark"}>
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
