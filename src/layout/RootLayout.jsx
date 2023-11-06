import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
const RootLayout = () => {
  return (
    <div className={styles["dashboard-container"]}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
