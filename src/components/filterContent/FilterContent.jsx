import styles from "./FilterContent.module.css";
import dropdownArrow from "../../assets/images/dropdownArrow.svg";
const FilterContent = () => {
  const filterData = [
    {
      label: "სტუდენტის სტატუსი",
      checkboxes: [
        { label: "ACTIVE", value: "active" },
        { label: "INACTIVE", value: "inactive" },
      ],
    },
    {
      label: "სქესი",
      checkboxes: [
        { label: "MALE", value: "male" },
        { label: "FEMALE", value: "female" },
      ],
    },
  ];
  return (
    <div className={styles["dropdown_container"]}>
      {filterData.map((filter, index) => {
        return (
          <div key={index}>
            <div className={styles.dropdown}>
              <img src={dropdownArrow} alt="dropdownArrow" />
              <p>{filter.label}</p>
            </div>
            <div>
              {filter.checkboxes.map((checkbox, index) => {
                return (
                  <div key={index} className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name={checkbox.value}
                      id={checkbox.value}
                    />
                    <label htmlFor={checkbox.value}>{checkbox.label}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterContent;
