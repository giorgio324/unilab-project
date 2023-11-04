import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
  };
  const [userData, setUserData] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ userData, setUserData }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
