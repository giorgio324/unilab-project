import styles from "./FilterContent.module.css";
import FilterContentItem from "../filterContentItem/FilterContentItem";
import { useState } from "react";

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

  const [isOpen, setIsOpen] = useState(Array(filterData.length).fill(false));

  const toggleOpen = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
    <div className={styles["dropdown_container"]}>
      {filterData.map((filter, index) => {
        return (
          <div key={index}>
            <FilterContentItem
              filter={filter}
              isOpen={isOpen[index]}
              toggleOpen={() => toggleOpen(index)}
            />
            <div>
              {isOpen[index] &&
                filter.checkboxes.map((checkbox, checkboxIndex) => (
                  <div key={checkboxIndex} className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name={checkbox.value}
                      id={checkbox.value}
                    />
                    <label htmlFor={checkbox.value}>{checkbox.label}</label>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterContent;
