import useFetchData from "@hooks/useFetchData";
import { Loading } from "@components/molucules";
import { NewsCard } from "@components/organisms";

import PropTypes from "prop-types";

const MainContent = ({ endpoint, category }) => {
  const { data, isLoading } = useFetchData(`${endpoint}`);

  return (
    <main className="flex flex-col gap-x-5 items-center justify-center w-full min-h-screen">
      <section className="mt-[10vh] w-full flex flex-col justify-center items-center">
        <h1 className=" capitalize text-4xl">{category} News</h1>
        <div className="border-b-2 border-slate-900 w-[70%] m-[1rem]" />
      </section>
      {isLoading && <Loading />}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </main>
  );
};

MainContent.propTypes = {
  endpoint: PropTypes.string,
  category: PropTypes.string,
};

export default MainContent;
