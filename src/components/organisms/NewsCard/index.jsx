import PropTypes from "prop-types";
import {
  PiBookmarkSimpleBold,
  PiBookmarkSimpleFill,
  PiCalendarBlank,
  PiUser,
} from "react-icons/pi";
import { formattedDate } from "@lib";
import { useDispatch, useSelector } from "react-redux";
import { saveNews } from "../../../features/news/newsSlice";
import Button from "@components/atoms/Button";

export const NewsCard = ({
  source,
  title,
  description,
  publishedAt,
  url,
  urlToImage,
}) => {
  NewsCard.propTypes = {
    source: PropTypes.obj,
    title: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
  };

  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.news.data.saved);

  const isNewsSaved = savedNews.find((item) => item.title === title);

  const handleSaveNews = () => {
    dispatch(
      saveNews({ title, source, description, publishedAt, url, urlToImage })
    );
  };

  return (
    <article className="flex flex-col justify-between p-3 w-80 h-[480px] rounded-lg shadow shadow-black dark:shadow-white bg-white dark:bg-transparent">
      <div className="flex-0">
        <figure className="h-40">
          <img
            src={urlToImage ? urlToImage : "https://placehold.co/320x160"}
            alt={title}
            className="w-full h-full object-cover rounded-t-md"
          />
        </figure>
      </div>
      <div className="flex-1 flex flex-col justify-between mt-2 text-zinc-900 dark:text-slate-200">
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <h1 className="font-semibold text-xl line-clamp-3">{title}</h1>
          </a>
          <div className="flex gap-2 text-sm py-1 opacity-70">
            <div className="flex items-center gap-1">
              <PiUser size={20} />
              <span>{source.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <PiCalendarBlank size={20} />
              <span>{formattedDate(publishedAt)}</span>
            </div>
          </div>
          <p className="line-clamp-5 tracking-tight">
            {description ? description : "Description not found."}
          </p>
        </div>
        <div className="flex justify-between gap-4 pt-2 items-center border-t border-slate-900 dark:border-white">
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              className="font-medium border-2 border-slate-900 hover:scale-105 transition-all dark:border-white"
              size="w-fit"
            >
              Read More
            </Button>
          </a>
          <button
            className="hover:scale-110 transition-all"
            onClick={handleSaveNews}
          >
            {isNewsSaved ? (
              <PiBookmarkSimpleFill size={28} title="Unsave News" />
            ) : (
              <PiBookmarkSimpleBold size={28} title="Save News" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
