import styles from "./FilterCheckbox.module.css";

const FilterCheckbox = ({ checkbox }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={checkbox.value} id={checkbox.value} />
      <label htmlFor={checkbox.value}>{checkbox.label}</label>
    </div>
  );
};

export default FilterCheckbox;
