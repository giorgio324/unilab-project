import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { createPortal } from "react-dom";
import Dialog from "../dialog/Dialog";
const Navbar = () => {
  const { userData, setUserData, isDialogOpen, setIsDialogOpen } =
    useGlobalContext();
  const handleToggle = () => {
    setIsDialogOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav>
        <div className={styles.left}>
          <h1>Form</h1>
          <Link to={"api"}>API</Link>
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
      {isDialogOpen &&
        createPortal(
          <Dialog handleToggle={handleToggle} setUserData={setUserData} />,
          document.body
        )}
    </>
  );
};

export default Navbar;
