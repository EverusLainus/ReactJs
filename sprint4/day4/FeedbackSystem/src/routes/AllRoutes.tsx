import { Routes, Route } from "react-router-dom";
import { Form } from "../components/Form";
import { Thankyou } from "../components/Thankyou";
import { Statistics } from "../components/Statistics";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </>
  );
};
