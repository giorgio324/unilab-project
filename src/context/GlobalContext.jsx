import { createContext, useContext, useState, useEffect } from "react";
import { getItemFromLocalStorage } from "../utils/localstorage";
import { userStaticData } from "../data/userData";
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
  const [userInformation, setUserInformation] = useState(userStaticData);
  const [filteredUsers, setFilteredUsers] = useState(userInformation);
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
      value={{
        userData,
        setUserData,
        userInformation,
        setUserInformation,
        filteredUsers,
        setFilteredUsers,
        isDialogOpen,
        setIsDialogOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
