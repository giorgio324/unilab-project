import styles from "./Dashboard.module.css";
import FilterButton from "../../components/filterButton/FilterButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItemFromLocalStorage } from "../../utils/localstorage";
import SearchInput from "../../components/searchInput/SearchInput";
import DashboardTable from "../../components/dashboardTable/DashboardTable";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const result = getItemFromLocalStorage();
    if (!result) {
      navigate("/form");
    }
  }, []);
  return (
    <div className={styles["dashboard-container"]}>
      <main className={styles["dashboard-content"]}>
        <div className={styles["dashboard-fields-container"]}>
          <FilterButton />
          <SearchInput />
        </div>
        <DashboardTable />
      </main>
    </div>
  );
};

export default Dashboard;
