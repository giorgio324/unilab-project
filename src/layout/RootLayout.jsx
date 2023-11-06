import Navbar from "../components/navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useEffect } from "react";
import { getItemFromLocalStorage } from "../utils/localstorage";
const RootLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const result = getItemFromLocalStorage();
    if (!result) {
      navigate("/form");
    }
  }, []);
  return (
    <div className={styles["dashboard-container"]}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
