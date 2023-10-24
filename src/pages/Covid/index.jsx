import { Navbar } from "@components/organisms";
import MainContent from "@components/templates/MainContent";
import { endpoints } from "@lib";

export const Covid = () => {
  return (
    <>
      <Navbar />
      <MainContent endpoint={endpoints.covid19} category={"Covid-19"} />
    </>
  );
};
