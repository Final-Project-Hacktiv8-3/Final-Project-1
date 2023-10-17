import { useParams } from "react-router-dom";
import { Navbar, NewsCard } from "../../components/organisms";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../components/molucules";

export const Search = () => {
  const { search } = useParams();
  const [isNews, setIsNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_NEWS_URL}q=${search}&apikey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        setIsLoading(false);
        console.log(response.data.articles);
        setIsNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-x-5 items-center justify-center w-full min-h-screen">
        <h1 className="mt-[10vh]  capitalize text-4xl">{search}</h1>
        <div className="border-b-2 border-slate-900 w-[70%] m-[1rem]" />
        <div className=" flex flex-wrap justify-center items-center w-full">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {isNews.slice(0, 12).map((item, idx) => (
                <NewsCard
                  key={idx}
                  title={item?.title}
                  description={item?.description}
                  author={item?.author}
                  url={item?.url}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
