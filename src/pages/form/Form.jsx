import cameraIcon from "../../assets/images/cameraIcon.svg";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <main className={styles["form-bg"]}>
      <section className={styles["form-wrapper"]}>
        <h2>Get Started</h2>
        <p>add a photo</p>
        <form className={styles["form-container"]}>
          <label htmlFor="image" className={styles["form-add-image"]}>
            <img src={cameraIcon} alt="add image Icon" />
          </label>
          <input
            type="file"
            name="image"
            id="image"
            style={{ display: "none" }}
          />
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
