import filterIcon from "../../assets/images/filterIcon.svg";
import styles from "./FilterButton.module.css";
const FilterButton = () => {
  return (
    <button className={styles.filter}>
      <img src={filterIcon} alt="filterIcon" />
      <p>filter</p>
    </button>
  );
};

export default FilterButton;
