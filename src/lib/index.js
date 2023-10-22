export const endpoints = {
  indonesia: "top-headlines?country=id",
  programing: "everything?q=programing",
  covid19: "everything?q=covid-19",
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
