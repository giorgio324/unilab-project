import styles from "./DashboardTable.module.css";

const DashboardTable = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
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
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
