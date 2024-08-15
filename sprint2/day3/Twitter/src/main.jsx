import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PostContextProvider } from "./PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <PostContextProvider>
    <App />
  </PostContextProvider>
);
