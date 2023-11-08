import styles from "./FilterContentItem.module.css";
import dropdownArrow from "../../assets/images/dropdownArrow.svg";

const FilterContentItem = ({ filter, toggleOpen }) => {
  return (
    <div className={styles.dropdown} onClick={toggleOpen}>
      <img src={dropdownArrow} alt="dropdownArrow" />
      <p>{filter.label}</p>
    </div>
  );
};

export default FilterContentItem;
