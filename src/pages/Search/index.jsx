import { useParams } from "react-router-dom";
import { Navbar } from "@components/organisms";
import MainContent from "@components/templates/MainContent";
import { endpoints } from "@lib";

export const Search = () => {
  const { search } = useParams();

  return (
    <>
      <Navbar />
      <MainContent
        endpoint={`${endpoints.search}${search}`}
        category={search}
      />
    </>
  );
};
