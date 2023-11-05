import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = ({ handleToggle, userData }) => {
  return (
    <nav>
      <div className={styles.left}>
        <h1>Form</h1>
        <Link>API</Link>
      </div>
      <div className={styles.right}>
        <h2>{userData?.name}</h2>
        <img
          src={userData?.image}
          alt={`${userData?.name}'s profile picture`}
          onClick={handleToggle}
        />
      </div>
    </nav>
  );
};

export default Navbar;
