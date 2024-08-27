import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function Authprovider({ children }) {
  const intialAuth = localStorage.getItem("User");

  const [authUser, setAuthUser] = useState(
    intialAuth ? JSON.parse(intialAuth) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
