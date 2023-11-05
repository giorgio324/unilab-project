import styles from "./Dashboard.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import Navbar from "../../components/navbar/Navbar";
const Dashboard = () => {
  // later i need to protect this route
  return (
    <div className={styles["dashboard-container"]}>
      <Navbar />
    </div>
  );
};

export default Dashboard;
