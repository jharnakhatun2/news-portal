import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react"
import auth from "../../../firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  //get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User Observing");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [])

  // Signout
  const logout = () => {
    signOut(auth)
      .then(() => console.log("User signed out"))
      .catch((error) => console.error(error));
  }

  const authInfo = { user, logout }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

export const authApp = () => useContext(AuthContext);
