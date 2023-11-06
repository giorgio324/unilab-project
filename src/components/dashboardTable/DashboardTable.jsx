import styles from "./DashboardTable.module.css";

const DashboardTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.head}>
          <div>სტუდენტის სახელი და გვარი</div>
          <div>სტატუსი</div>
          <div>სქესი</div>
          <div>ქულები</div>
          <div>პირადი ნომერი</div>
          <div>მეილი</div>
          <div>მობილურის ნომერი</div>
          <div>მისამართი</div>
          <div>დაბადების თარიღი</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.body}>
          <div className={styles["body-item"]}>
            <div>სტუდენტის სახელი და გვარი</div>
            <div>სტატუსი</div>
            <div>სქესი</div>
            <div>ქულები</div>
            <div>პირადი ნომერი</div>
            <div>მეილი</div>
            <div>მობილურის ნომერი</div>
            <div>მისამართი</div>
            <div>დაბადების თარიღი</div>
          </div>
          <div className={styles["body-item"]}>
            <div>სტუდენტის სახელი და გვარი</div>
            <div>სტატუსი</div>
            <div>სქესი</div>
            <div>ქულები</div>
            <div>პირადი ნომერი</div>
            <div>მეილი</div>
            <div>მობილურის ნომერი</div>
            <div>მისამართი</div>
            <div>დაბადების თარიღი</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
