import { createContext, useState } from "react";

export const AuthContext = createContext();
/**
 {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

 */

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  function authenticate(a, b) {
    if (a === "eve.holt@reqres.in" && b == "cityslicka") {
      setIsAuth(true);
    }
  }
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
