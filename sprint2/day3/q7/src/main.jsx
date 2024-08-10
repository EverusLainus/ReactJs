import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { FetchContextProvider } from "./FetchContext.jsx";

createRoot(document.getElementById("root")).render(
  <FetchContextProvider>
    <App />
  </FetchContextProvider>
);
