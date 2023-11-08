import styles from "./Dashboard.module.css";
import FilterButton from "../../components/filterButton/FilterButton";
import SearchInput from "../../components/searchInput/SearchInput";
import DashboardTable from "../../components/dashboardTable/DashboardTable";
import FilterContent from "../../components/filterContent/FilterContent";
import { userData } from "../../data/userData";
import { useState } from "react";
const Dashboard = () => {
  const [userInformation, setUserInformation] = useState(userData);
  return (
    <>
      <main className={styles["dashboard-content"]}>
        <div className={styles["dashboard-fields-container"]}>
          <FilterButton>
            <FilterContent
              userInformation={userInformation}
              setUserInformation={setUserInformation}
            />
          </FilterButton>
          <SearchInput />
        </div>
        <DashboardTable userInformation={userInformation} />
      </main>
    </>
  );
};

export default Dashboard;
