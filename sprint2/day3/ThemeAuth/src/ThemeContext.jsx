import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  function changeTheme() {
    if (isLight) {
      setIsLight(false);
    } else {
      setIsLight(true);
    }
  }
  return (
    <ThemeContext.Provider value={{ isLight, setIsLight, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
