import styles from "./Dashboard.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import Navbar from "../../components/navbar/Navbar";
import Dialog from "../../components/dialog/Dialog";
import { createPortal } from "react-dom";
import { useState } from "react";
const Dashboard = () => {
  // later i need to protect this route
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const handleToggle = () => {
    setIsDialogOpen((prevState) => !prevState);
  };
  return (
    <div className={styles["dashboard-container"]}>
      <Navbar handleToggle={handleToggle} />
      {isDialogOpen &&
        createPortal(<Dialog handleToggle={handleToggle} />, document.body)}
    </div>
  );
};

export default Dashboard;
