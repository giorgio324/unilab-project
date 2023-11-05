import styles from "./Dialog.module.css";
import { deleteItemFromLocalStorage } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";
const Dialog = ({ handleToggle, setUserData }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    const stateReset = {
      name: "",
      image: "",
    };
    setUserData(stateReset);
    deleteItemFromLocalStorage();
    navigate("/form");
  };
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={handleToggle}></div>
      <div className={styles.content}>
        <button
          type="button"
          className={`btn ${styles.button}`}
          onClick={handleLogOut}
        >
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
