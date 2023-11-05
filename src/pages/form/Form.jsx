import styles from "./Form.module.css";
import FormImageInput from "../../components/formImageInput/FormImageInput";
import FormTextInput from "../../components/formTextInput/FormTextInput";
import FormSubmitButton from "../../components/formSubmitButton/FormSubmitButton";
import { useNavigate } from "react-router-dom";
import { getItemFromLocalStorage } from "../../utils/localstorage";
import { useEffect } from "react";
const Form = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const result = getItemFromLocalStorage();
    if (result) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <main className={styles["form-bg"]}>
      <section className={styles["form-wrapper"]}>
        <h2>Get Started</h2>
        <p>add a photo</p>
        <form className={styles["form-container"]}>
          <FormImageInput />
          <FormTextInput />
          <FormSubmitButton />
        </form>
      </section>
    </main>
  );
};

export default Form;
