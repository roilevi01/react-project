import React, { createContext, useContext, useMemo } from "react";

const UserContext = createContext();
const user = null;
export default function UserProvider({ children }) {
  const value = useMemo(() => ({ user }), []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a Provider");
  return context;
};
