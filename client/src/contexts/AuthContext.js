import React, { useState, useEffect, useContext } from "react";
import { auth, appFirestore } from "../firebase/config";

const AuthContext = React.createContext();

// Use the React context hook
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [checkUser, setCheckUser] = useState(true);
  // console.log("Current User > AuthContext", currentUser);

  // Create a new user with email and password
  const signUp = async (email, password) => {
    // console.log("Signing up", email, password);

    // Create new user in Firebase
    await auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      // Add user id to Firestore and set empty shoppingList

      const userData = {
        userAccount: `emailUser=${email}`,
        userName: "",
        email: email,
        isAdmin: false,
        isSubscriber: false,
      };

      appFirestore.collection("users").doc(cred.user.uid).set(userData);

      return appFirestore
        .collection("users")
        .doc(cred.user.uid)
        .collection("shoppingLists")
        .doc("Shopping List")
        .set({ items: [] });
    });
  };

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    console.log("User signed out");
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setCheckUser(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signUp, signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {!checkUser && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
