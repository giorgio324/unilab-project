import styles from "./FilterContent.module.css";
import FilterContentItem from "../filterContentItem/FilterContentItem";
import { useEffect, useState } from "react";
import FilterCheckbox from "../filterCheckbox/FilterCheckbox";
import { useGlobalContext } from "../../context/GlobalContext";

const FilterContent = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });
  const { userInformation, setFilteredUsers } = useGlobalContext();
  const filterData = [
    {
      label: "სტუდენტის სტატუსი",
      checkboxes: [
        {
          label: "ACTIVE",
          value: "active",
          checked: selectedCheckboxes["active"] || false,
        },
        {
          label: "INACTIVE",
          value: "inactive",
          checked: selectedCheckboxes["inactive"] || false,
        },
      ],
    },
    {
      label: "სქესი",
      checkboxes: [
        {
          label: "MALE",
          value: "male",
          checked: selectedCheckboxes["male"] || false,
        },
        {
          label: "FEMALE",
          value: "female",
          checked: selectedCheckboxes["female"] || false,
        },
      ],
    },
  ];

  useEffect(() => {
    const filteredData = userInformation.filter((user) => {
      let isActive = selectedCheckboxes["active"];
      let isInactive = selectedCheckboxes["inactive"];
      let isMale = selectedCheckboxes["male"];
      let isFemale = selectedCheckboxes["female"];

      if (
        (isActive && user.status.toLowerCase() === "active") ||
        (isInactive && user.status.toLowerCase() === "inactive")
      ) {
        if (
          (isMale && user.gender.toLowerCase() === "male") ||
          (isFemale && user.gender.toLowerCase() === "female")
        ) {
          return true;
        }
      }

      return false;
    });

    setFilteredUsers(filteredData);
  }, [selectedCheckboxes, userInformation, setFilteredUsers]);

  const [isOpen, setIsOpen] = useState(Array(filterData.length).fill(false));

  const toggleOpen = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
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
                  <FilterCheckbox
                    key={checkboxIndex}
                    checkbox={checkbox}
                    checked={checkbox.checked}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterContent;
