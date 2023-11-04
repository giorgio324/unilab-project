import styles from "./FormTextInput.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
const FormTextInput = () => {
  const { userData, setUserData } = useGlobalContext();
  const handleName = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setUserData({
      ...userData,
      name: value,
    });
  };
  return (
    <>
      <label htmlFor="name" className={styles["form-name-label"]}>
        fill in your name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={userData.name}
        className={styles["form-name-input"]}
        placeholder="your name"
        onChange={handleName}
      />
    </>
  );
};

export default FormTextInput;
