import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FetchContextProvider } from "./FetchContext.jsx";
import { AuthContextProvider } from "./AuthContext.jsx";
import { ThemeContextProvider } from "./ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FetchContextProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </AuthContextProvider>
    </FetchContextProvider>
  </BrowserRouter>
);
