import styles from "../styles/Home.module.css";
import React, { useState, useCallback, useRef } from "react";
import Row from "../components/Row";
import { Menu, MenuItem } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { ArrowForwardIos, ArrowBackIos, Search } from "@mui/icons-material";
import Months from "../components/Months";
import { mergeStyles, months, tasks } from "../utils";

export default function Home() {
  const [isMonth, setIsMonth] = useState(false);
  const [width, setWidth] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentSelected, setCurrentSelected] = React.useState(
    new Date().getFullYear()
  );
  const [currentMonth, setCurrentMonth] = React.useState(
    months[new Date().getMonth()]
  );
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleForwardClick = () => {
    if (isMonth && months[months.indexOf(currentMonth)] == "Dec") return;
    !isMonth
      ? setCurrentSelected(parseInt(currentSelected) + 1)
      : setCurrentMonth(months[months.indexOf(currentMonth) + 1]);
    console.log(months[months.indexOf(currentMonth) + 1]);
  };
  const handleBackClick = () => {
    if (isMonth && months[months.indexOf(currentMonth)] == "Jan") return;
    !isMonth
      ? setCurrentSelected(parseInt(currentSelected) - 1)
      : setCurrentMonth(months[months.indexOf(currentMonth) - 1]);
  };
  return (
    <div className={styles.mainContainer_}>
      <div className={styles.leftNavigation}>
        <div className={styles.logo}>
          <p>Tracit</p>
        </div>
        <div className={mergeStyles([styles.navCircle, styles.navActive])}>
          <p>TS</p>
        </div>
        <div className={styles.navCircle}>
          <p>RE</p>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={styles.topNavbar}>
          <p>TN State Optic Fibre Project</p>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.topSide}>
            <div className={styles.topSideControls}>
              <div>
                <Dropdown
                  dropdownText={isMonth ? "Month" : "Year"}
                  showIcon
                  handleClick={handleClick}
                  open={open}
                />
              </div>
              <div className={styles.navigationButton}>
                <div style={{ cursor: "pointer" }} onClick={handleBackClick}>
                  <ArrowBackIos fontSize="10px" />
                </div>
                <div>
                  <p className={styles.navigationButtonText}>
                    {!isMonth ? currentSelected : currentMonth}
                  </p>
                </div>
                <div style={{ cursor: "pointer" }} onClick={handleForwardClick}>
                  <ArrowForwardIos fontSize="10px" />
                </div>
              </div>
              <div style={{ width: "20%" }}>
                <Dropdown dropdownText="Project Modules (Default)" />
              </div>
              <div className={styles.topSideButton}>Save</div>
            </div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <Dropdown dropdownText="Timelines" variant="green" />
            </div>
          </div>
          <div className={styles.bottomSide}>
            <div className={styles.innerLeftSide}>
              <div className={styles.innerLeftHeader}>
                <p>Tasks</p>
              </div>
              <div className={styles.searchContainerTool}>
                <div className={styles.searchTool}>
                  <input placeholder="Search" />
                  <div className={styles.icon}>
                    <Search />
                  </div>
                </div>
              </div>
              {tasks().map((e, i) => {
                return (
                  <div className={styles.taskItem} key={i}>
                    <p>{e}</p>
                    <div className={styles.progBar}>
                      <div
                        className={styles.progBarFiller}
                        style={{
                          width:
                            i == 0
                              ? "80%"
                              : i == 3
                              ? "35%"
                              : i == 7
                              ? "50%"
                              : 0,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.innerRightSide}>
              <div className={styles.innerHeaderYear}>
                <p>{!isMonth ? currentSelected : currentMonth}</p>
              </div>
              <div
                className={mergeStyles([
                  !isMonth
                    ? styles.innerHeaderMonths
                    : styles.innerHeaderSecondView,
                  !isMonth ? styles.yearView : styles.monthView,
                ])}
                style={
                  !isMonth ? { minWidth: `8%` } : { minWidth: `${100 / 30}%` }
                }
              >
                <Months
                  currentMonth={currentMonth}
                  selectedYear={currentSelected}
                  monthView={isMonth}
                  setWidth={setWidth}
                  days={30}
                />
              </div>
              <div
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
                className={styles.rows}
              >
                {"."
                  .repeat(11)
                  .split("")
                  .map((dot, index) => (
                    <Row
                      currentMonth={currentMonth}
                      currentYear={currentSelected}
                      isMonth={isMonth}
                      colWidth={width}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem
              selected={isMonth}
              onClick={() => {
                setIsMonth(true);
                handleClose();
              }}
            >
              Month
            </MenuItem>
            <MenuItem
              selected={!isMonth}
              onClick={() => {
                setIsMonth(false);
                handleClose();
              }}
            >
              Year
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
