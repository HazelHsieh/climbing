// 數字format
function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== "." && (a.length - i) % 3 === 0 ? `, ${c}`.replace(/\s/g, "") : c))}`;
}
function date(timestamp, addDay = 0, time = true) {
  const date = new Date(timestamp);
  const dateArr = {};
  dateArr.year = date.getFullYear();
  dateArr.month = date.getMonth() + 1;
  dateArr.day = date.getDate();
  dateArr.hour = date.getHours();
  dateArr.min = date.getMinutes();
  const timeTxt = time ? ` (${dateArr.hour}:${dateArr.min})` : "";
  return `${dateArr.year}-${dateArr.month}-${dateArr.day + addDay}${timeTxt}`;
}

// 日期format
export const ddmmyyyy = (time) => {
  if (!time) return "";
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date(time * 1000);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  const mmName = monthNames[mm - 1].slice(0, 3);
  let dd = today.getDate();
  return `${dd}, ${mmName} ${yyyy}`;
};

export default {
  currency,
  date,
};
