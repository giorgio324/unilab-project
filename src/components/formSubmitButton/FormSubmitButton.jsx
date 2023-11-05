import styles from "./FormSubmitButton.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { saveToLocalStorage } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";
const FormSubmitButton = () => {
  const { userData } = useGlobalContext();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (userData.name && userData.image) {
      saveToLocalStorage(userData);
      navigate("/dashboard");
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
