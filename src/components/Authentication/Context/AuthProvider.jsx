import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState("Jharna");

  const authInfo = {user}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

export const authApp = () => useContext(AuthContext);
