import { useState, useEffect } from "react";
import styles from "./DashboardTable.module.css";
import Pagination from "../pagination/Pagination";
import { useGlobalContext } from "../../context/GlobalContext";

const DashboardTable = () => {
  const {
    userInformation: userData,
    setUserInformation,
    filteredUsers,
    setFilteredUsers,
  } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  useEffect(() => {
    setFilteredUsers(userData);
  }, [userData, setFilteredUsers]);

  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <table>
          <thead>
            <tr>
              <th>სტუდენტის სახელი და გვარი</th>
              <th>სტატუსი</th>
              <th>სქესი</th>
              <th>ქულები</th>
              <th>პირადი ნომერი</th>
              <th>მეილი</th>
              <th>მობილურის ნომერი</th>
              <th>მისამართი</th>
              <th>დაბადების თარიღი</th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    {user.name} {user.lastname}
                  </td>
                  <td>{user.status}</td>
                  <td>{user.gender}</td>
                  <td>{user.scores}</td>
                  <td>{user.privateId}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.birthdate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <span className={styles.pagination_container}>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </span>
    </div>
  );
};

export default DashboardTable;
