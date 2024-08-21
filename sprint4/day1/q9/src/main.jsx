import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PlaylistProvider } from "./PlaylistProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlaylistProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlaylistProvider>
  </StrictMode>
);
