export const stringToDate = (dateString: string) => {
  const [day, month, year] = dateString.split('-');
  return new Date([month, day, year].join('-'));
};
