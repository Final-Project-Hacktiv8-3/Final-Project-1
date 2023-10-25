import { Navbar, NewsCard } from "@components/organisms";
import { useSelector } from "react-redux";

export const Save = () => {
  const savedNews = useSelector((state) => state.news.data.saved);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-x-5 items-center justify-center w-full min-h-screen dark:bg-zinc-900 dark:text-white">
        {savedNews.length > 0 ? (
          <div className="w-full">
            <section className="mt-[10vh] w-full flex flex-col justify-center items-center">
              <h1 className=" capitalize text-4xl">Saved News</h1>
              <div className="border-b-2 border-slate-900 w-[70%] m-[1rem] dark:border-white" />
            </section>
            <div className="flex flex-wrap justify-center items-center w-full gap-3">
              {savedNews.map((item, index) => (
                <div key={index}>
                  <NewsCard
                    source={item.source}
                    title={item.title}
                    description={item.description}
                    publishedAt={item.publishedAt}
                    url={item.url}
                    urlToImage={item.urlToImage}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h1>No Saved News</h1>
        )}
      </main>
    </>
  );
};
