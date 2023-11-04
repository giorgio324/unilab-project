import styles from "./FormSubmitButton.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { saveToLocalStorage } from "../../utils/localstorage";
const FormSubmitButton = () => {
  const { userData } = useGlobalContext();
  const handleClick = (e) => {
    e.preventDefault();
    if (userData.name && userData.image) {
      console.log("validated");
      saveToLocalStorage(userData);
    }
  };
  return (
    <button
      type="submit"
      className={`${styles["form-button"]} btn`}
      onClick={handleClick}
    >
      Sign in
    </button>
  );
};

export default FormSubmitButton;
