import React from "react";
import {
  CalendarMonth,
  ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material/";
import styles from "../styles/Dropdown.module.css";

const Dropdown = ({ handleClick, open, showIcon, variant, dropdownText }) => {
  return (
    <div
      className={variant ? styles.dropDownControlGreen : styles.dropDownControl}
      onClick={handleClick}
      style={{ justifyContent: showIcon ? "space-between" : "space-between" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {showIcon && <CalendarMonth fontSize="12px" />}
        <p className={styles.selectedDropdownItemText}>
          {dropdownText ? dropdownText : "ERROR_PROVIDE_TEXT"}
        </p>
      </div>
      {!open ? <ArrowDropDown /> : <ArrowDropUp />}
    </div>
  );
};
export default Dropdown;
