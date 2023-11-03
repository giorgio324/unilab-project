import notepadIcon from "../../assets/images/notepad.svg";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <main className={styles["home-bg"]}>
      <img src={notepadIcon} alt="Icon of a notepad" />
      <h1 className={styles["home-title"]}>Get Started Today</h1>
      <button type="button" className={styles["home-button"]}>
        Get Started
      </button>
    </main>
  );
};

export default Home;
