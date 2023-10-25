import useFetchData from "@hooks/useFetchData";
import { Loading, Pagination } from "@components/molucules";
import { NewsCard } from "@components/organisms";

import PropTypes from "prop-types";
import { useState } from "react";

const MainContent = ({ endpoint, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useFetchData(`${endpoint}`, currentPage);
  console.log(data?.totalResults);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main className="flex flex-col gap-x-5 items-center justify-center w-full min-h-screen bg-white dark:bg-zinc-900">
      <section className="mt-[10vh] w-full flex flex-col justify-center items-center max-w-7xl">
        <h1 className=" capitalize text-4xl dark:text-white">
          {category} News
        </h1>
        <div className="border-b-2 border-slate-900 dark:border-white w-[70%] m-[1rem]" />
      </section>
      {isLoading && <Loading />}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-5">
        {data?.articles.map((item, index) => (
          <div key={index}>
            <NewsCard
              publishedAt={item.publishedAt}
              description={item.description}
              source={item.source}
              title={item.title}
              url={item.url}
              urlToImage={item.urlToImage}
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        maxPages={data?.totalResults}
      />
    </main>
  );
};

MainContent.propTypes = {
  endpoint: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.string,
};

export default MainContent;
