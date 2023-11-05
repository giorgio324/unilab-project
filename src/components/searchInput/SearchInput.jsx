import styles from "./SearchInput.module.css";
import searchIcon from "../../assets/images/searchIcon.svg";
const SearchInput = () => {
  return (
    <div className={styles["search-container"]}>
      <input type="text" className={styles.searchbox} />
      <img src={searchIcon} alt="searchIcon" />
    </div>
  );
};

export default SearchInput;
