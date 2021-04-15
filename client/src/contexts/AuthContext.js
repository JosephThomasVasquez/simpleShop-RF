import React, { useState, useContext } from "react";
import { auth } from "../firebase/config";

const AuthContext = React.createContext();


// Use the React context hook
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  // Create a new user with email and password
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const authValue = { currentUser };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
