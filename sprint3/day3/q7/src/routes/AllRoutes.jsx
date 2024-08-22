import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Test } from "../components/Test";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { Navbar } from "../components/Navbar";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
