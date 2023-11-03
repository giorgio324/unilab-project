import notepadIcon from "../../assets/images/notepad.svg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className={styles["home-bg"]}>
      <img src={notepadIcon} alt="Icon of a notepad" />
      <h1 className={styles["home-title"]}>Get Started Today</h1>
      <Link to={"/form"}>
        <button type="button" className={`${styles["home-button"]} btn`}>
          Get Started
        </button>
      </Link>
    </main>
  );
};

export default Home;
