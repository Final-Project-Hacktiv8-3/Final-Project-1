import { Navbar, Footer } from "@components/organisms";
import MainContent from "@components/templates/MainContent";
import { endpoints } from "@lib";

export const Programing = () => {
  return (
    <>
      <Navbar />
      <MainContent endpoint={endpoints.programing} category={"Programing"} />
      <Footer />
    </>
  );
};
