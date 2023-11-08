import styles from "./FilterContent.module.css";
import FilterContentItem from "../filterContentItem/FilterContentItem";
import { useState } from "react";
import FilterCheckbox from "../filterCheckbox/FilterCheckbox";

const FilterContent = ({ userInformation, setUserInformation }) => {
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
  const [filteredUsers, setFilteredUsers] = useState(userInformation);
  console.log(filteredUsers);
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
                  <FilterCheckbox key={checkboxIndex} checkbox={checkbox} />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterContent;
