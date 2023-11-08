import styles from "./FilterCheckbox.module.css";

const FilterCheckbox = ({ checkbox, checked, handleCheckboxChange }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name={checkbox.value}
        id={checkbox.value}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={checkbox.value}>{checkbox.label}</label>
    </div>
  );
};

export default FilterCheckbox;
