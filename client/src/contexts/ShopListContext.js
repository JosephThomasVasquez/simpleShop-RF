import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth, appFirestore } from "../firebase/config";

const shopListContext = createContext();

// Use the React context hook
export const useUserShopList = () => {
  return useContext(shopListContext);
};

const ShopListProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [shopListDocs, setShopListDocs] = useState({
    title: "Shopping List",
    items: ["Bacon", "Eggs", "Burger Buns", "Milk", "Parmesan Cheese"],
  });

  console.log("currentUser", currentUser);
  // Get the shoppingList doc from Firestore from the current User Id
  const getShopList = () => {
    const ref = appFirestore.collection("users");

    console.log("ref", ref);

    ref.onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      return items;
    });

    // appFirestore
    //   .collection("users")
    //   .doc(currentUser.uid)
    //   .get()
    //   .then((doc) => {
    //     let data = doc.data();
    //     console.log("FS data", data);
    //     return data;
    //   });
  };

  // Update the shop list with data input
  const updateShopList = (title, itemsList) => {
    appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .set({ shoppingLists: [title], items: [...itemsList] });
  };

  const value = { shopListDocs, getShopList, updateShopList };

  return (
    <shopListContext.Provider value={value}>
      {children}
    </shopListContext.Provider>
  );
};

export default ShopListProvider;
