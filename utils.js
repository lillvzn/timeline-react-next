export const mergeStyles = (arr) => arr.join(" ");
export const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const pad = (num, places) => {
  const numZeroes = places - num.toString().length + 1;
  if (numZeroes >= 0) {
    return Array(+numZeroes).join("0") + num;
  }
  console.log(numZeroes, "0" + num);
  return num;
};
export const isMonthIncluded = (m, f, l) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (
    months.indexOf(m) >= months.indexOf(f) &&
    months.indexOf(m) <= months.indexOf(l)
  )
    return true;
  return false;
};

export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const tasks = () => {
  const tasks_ = [
    "POP readiness",
    "POP installation",
    "New Pole installation",
    "Aerial Cabling",
    "Manhole installation",
    "UG Cabling",
    "Route marker installation",
    "POP readiness",
    "POP readiness",
    "POP readiness",
    "POP readiness",
  ];
  return tasks_;
};
