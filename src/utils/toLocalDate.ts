export const toLocalDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "utc",
  });
};
