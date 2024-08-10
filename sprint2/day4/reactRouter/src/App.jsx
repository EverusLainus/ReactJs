import "./App.css";
import { Home } from "./Home";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Users } from "./Users";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
