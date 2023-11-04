import styles from "./Form.module.css";
import FormImageInput from "../../components/formImageInput/FormImageInput";
import FormTextInput from "../../components/formTextInput/FormTextInput";
import FormSubmitButton from "../../components/formSubmitButton/FormSubmitButton";
const Form = () => {
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
