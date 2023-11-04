import styles from "./Form.module.css";
import FormImageInput from "../../components/formImageInput/FormImageInput";
const Form = () => {
  return (
    <main className={styles["form-bg"]}>
      <section className={styles["form-wrapper"]}>
        <h2>Get Started</h2>
        <p>add a photo</p>
        <form className={styles["form-container"]}>
          <FormImageInput />
          <label htmlFor="name" className={styles["form-name-label"]}>
            fill in your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles["form-name-input"]}
            placeholder="your name"
          />
          <button type="submit" className={`${styles["home-button"]} btn`}>
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
