export const endpoints = {
  indonesia: "top-headlines?country=id&pageSize=8",
  programing: "everything?q=programing&pageSize=8",
  covid19: "everything?q=covid-19&pageSize=8",
  search: "everything?&pageSize=8&q=",
};

export const formattedDate = (input) => {
  const date = new Date(input);
  const formatted = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  if (formatted === "Invalid Date") return "-";
  return formatted;
};
