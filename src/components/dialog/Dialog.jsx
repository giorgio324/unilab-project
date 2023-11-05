import styles from "./Dialog.module.css";

const Dialog = ({ handleToggle }) => {
  return (
    <div className={styles["overlay"]}>
      <div className={styles["dialog-container"]}>
        <button type="button" className={`btn ${styles.button}`}>
          Log Out
        </button>
        <button type="button" className={styles.close} onClick={handleToggle}>
          X
        </button>
      </div>
    </div>
  );
};

export default Dialog;
