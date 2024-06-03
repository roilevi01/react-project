import React, { createContext, useContext } from "react";


const MyContext = createContext();

export default function DataProvider({ children }) {
  const data = { data1: 100, data2: "Hello" };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

export const useData = () => {
  const context = useContext(MyContext);
  if (!context) throw new Error("useData must be use withing a Provider");
  return context;
};
