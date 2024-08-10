import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FetchContextProvider } from "./FetchContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FetchContextProvider>
      <App />
    </FetchContextProvider>
  </BrowserRouter>
);
