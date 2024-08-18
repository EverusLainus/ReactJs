import { Routes, Route } from "react-router-dom";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element="<Home/>" />
        <Route path="/login" element="<Login/>" />
      </Routes>
    </div>
  );
};
