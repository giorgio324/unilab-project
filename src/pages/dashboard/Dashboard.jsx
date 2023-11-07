import styles from "./Dashboard.module.css";
import FilterButton from "../../components/filterButton/FilterButton";
import SearchInput from "../../components/searchInput/SearchInput";
import DashboardTable from "../../components/dashboardTable/DashboardTable";
import FilterContent from "../../components/filterContent/FilterContent";
const Dashboard = () => {
  return (
    <>
      <main className={styles["dashboard-content"]}>
        <div className={styles["dashboard-fields-container"]}>
          <FilterButton>
            <FilterContent />
          </FilterButton>
          <SearchInput />
        </div>
        <DashboardTable />
      </main>
    </>
  );
};

export default Dashboard;
