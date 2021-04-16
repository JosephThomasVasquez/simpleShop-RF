import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase/config";

const AuthContext = React.createContext();

// Use the React context hook
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [checkUser, setCheckUser] = useState(true);
  console.log("Current User > AuthContext", currentUser);

  // Create a new user with email and password
  const signUp = (email, password) => {
    console.log("Signing up", email, password);

    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setCheckUser(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signUp, signIn };

  return (
    <AuthContext.Provider value={value}>
      {!checkUser && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
