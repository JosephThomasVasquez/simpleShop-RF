import React, { createContext, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { appFirestore } from "../firebase/config";

const shopListContext = createContext();

// Use the React context hook
export const useUserShopList = () => {
  return useContext(shopListContext);
};

const ShopListProvider = ({ children }) => {
  const { currentUser } = useAuth();
//   const [shopListDocs, setShopListDocs] = useState({
//     title: "Shopping List",
//     items: ["Bacon", "Eggs", "Burger Buns", "Milk", "Parmesan Cheese"],
//   });

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
  };

  // Update the shop list with data input
  const updateShopList = (item) => {
    appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .update({ items: item }, { merge: true });
  };

  const value = { getShopList, updateShopList };

  return (
    <shopListContext.Provider value={value}>
      {children}
    </shopListContext.Provider>
  );
};

export default ShopListProvider;
