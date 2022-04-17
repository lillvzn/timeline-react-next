import React, { useEffect, useRef } from "react";
import { months, daysInMonth, pad } from "../utils";

export default function Months({
  monthView,
  currentMonth,
  selectedYear,
  setWidth,
}) {
  const colRef = useRef(null);
  useEffect(() => {
    const date = new Date();
    console.log(
      date.getMonth() + 1,
      date.getDay() + 1,
      date.getFullYear(),
      currentMonth,
      selectedYear,

      daysInMonth(months.indexOf(currentMonth) + 1, selectedYear),
      new Date(
        `${months.indexOf(currentMonth) + 1}/1/${selectedYear}`
      ).toLocaleString("en-US", { weekday: "short" }),
      months.indexOf(currentMonth) + 1
    );
    setWidth(colRef.current.offsetWidth);
  }, []);
  return (
    <>
      {!monthView
        ? months.map((e, i) => (
            <div key={i} ref={colRef}>
              <p>{e}</p>
            </div>
          ))
        : "."
            .repeat(daysInMonth(months.indexOf(currentMonth) + 1, selectedYear))
            .split("")
            .map((e, i) => {
              return (
                <div
                  key={i}
                  style={{
                    minWidth: `${
                      100 /
                        daysInMonth(
                          months.indexOf(currentMonth) + 1,
                          selectedYear
                        ) -
                      0.5
                    }%`,
                  }}
                >
                  <div>
                    <p>
                      {new Date(
                        `${months.indexOf(currentMonth) + 1}/${
                          i + 1
                        }/${selectedYear}`
                      ).toLocaleString("en-US", { weekday: "short" })}
                    </p>
                  </div>
                  <div>
                    <p>{(i + 1).toString().length < 2 ? `0${i + 1}` : i + 1}</p>
                  </div>
                </div>
              );
            })}
    </>
  );
}
