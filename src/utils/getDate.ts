export const getDate = (stamp: Date) => {
  const year = stamp.getFullYear();
  const month = stamp.getMonth();
  const date = stamp.getDate().toString().padStart(2, '0');
  return { year: year, month: month, date: date };
};
