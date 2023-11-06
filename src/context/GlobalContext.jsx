import { createContext, useContext, useState, useEffect } from "react";
import { getItemFromLocalStorage } from "../utils/localstorage";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // when the page loads get items from localstorage otherwise set it to initialstae
  useEffect(() => {
    const localStorageValue = getItemFromLocalStorage();
    if (localStorageValue) {
      setUserData(localStorageValue);
    } else {
      setUserData(initialState);
    }
  }, []);
  return (
    <GlobalContext.Provider
      value={{ userData, setUserData, isDialogOpen, setIsDialogOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
