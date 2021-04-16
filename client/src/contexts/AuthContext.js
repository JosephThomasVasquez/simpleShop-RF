import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase/config";

const AuthContext = React.createContext();

// Use the React context hook
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  console.log("Current User > AuthContext", currentUser);

  // Create a new user with email and password
  const signUp = (email, password) => {
    console.log("Signing up", email, password);

    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
