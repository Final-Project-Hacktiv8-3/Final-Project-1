import { Navbar } from "@components/organisms/navbar";
import MainContent from "@components/templates/MainContent";
import { endpoints } from "@lib";

export const Home = () => {
  return (
    <>
      <Navbar />
      <MainContent endpoint={endpoints.indonesia} category={"Indonesia"} />
    </>
  );
};
