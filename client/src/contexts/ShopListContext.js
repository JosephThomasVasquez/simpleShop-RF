import React, { createContext, useState, useEffect, useContext } from "react";

const shopListContext = createContext();

// Use the React context hook
export const useUserShopList = () => {
  return useContext(shopListContext);
};

const ShopListProvider = ({ children }) => {
  const [shopListDocs, setShopListDocs] = useState({
    title: "Shopping List",
    items: ["Bacon", "Eggs", "Burger Buns", "Milk", "Parmesan Cheese"],
  });

  const value = { shopListDocs };

  return (
    <shopListContext.Provider value={value}>
      {shopListDocs && children}
    </shopListContext.Provider>
  );
};

export default ShopListProvider;
