import styles from "./Dashboard.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import Navbar from "../../components/navbar/Navbar";
import Dialog from "../../components/dialog/Dialog";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { userData, setUserData } = useGlobalContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData?.name || !userData?.image) {
      navigate("/form");
    }
  }, []);
  const handleToggle = () => {
    setIsDialogOpen((prevState) => !prevState);
  };
  return (
    <div className={styles["dashboard-container"]}>
      <Navbar handleToggle={handleToggle} userData={userData} />
      {isDialogOpen &&
        createPortal(
          <Dialog handleToggle={handleToggle} setUserData={setUserData} />,
          document.body
        )}
    </div>
  );
};

export default Dashboard;
