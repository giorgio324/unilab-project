import { useState } from "react";
import filterIcon from "../../assets/images/filterIcon.svg";
import styles from "./FilterButton.module.css";

const FilterButton = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = (evt) => {
    evt.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.filter} onClick={toggleDropDown}>
        <img src={filterIcon} alt="filterIcon" />
        <p>filter</p>
      </button>
      {isOpen && <>{children}</>}
    </div>
  );
};

export default FilterButton;
