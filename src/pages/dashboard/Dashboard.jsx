import styles from "./Dashboard.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import Navbar from "../../components/navbar/Navbar";
import Dialog from "../../components/dialog/Dialog";
import FilterButton from "../../components/filterButton/FilterButton";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemFromLocalStorage } from "../../utils/localstorage";
const Dashboard = () => {
  const { userData, setUserData } = useGlobalContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const result = getItemFromLocalStorage();
    if (!result) {
      navigate("/form");
    }
  }, []);
  const handleToggle = () => {
    setIsDialogOpen((prevState) => !prevState);
  };
  return (
    <div className={styles["dashboard-container"]}>
      <Navbar handleToggle={handleToggle} userData={userData} />
      <FilterButton />
      {isDialogOpen &&
        createPortal(
          <Dialog handleToggle={handleToggle} setUserData={setUserData} />,
          document.body
        )}
    </div>
  );
};

export default Dashboard;
