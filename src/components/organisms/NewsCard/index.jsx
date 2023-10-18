import Button from "../../atoms/Button";
import PropTypes from "prop-types";
import { database } from '../../../config/index'
import {ref,set} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'


export const NewsCard = ({ source, title, description, author, url}) => {

  NewsCard.propTypes = {
    source: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
  };
  


  const handleSaving = () =>{
    const timestamp = new Date().getTime();
    const randomPart = Math.random().toString(36).substring(2);
    const uniqueId = timestamp.toString() + randomPart;
    set(ref(database, 'newsList/'+ uniqueId), {
      author:author,
      title: title,
      description: description,
      url: url,
  });


  }

  return (
    <article className="flex flex-col justify-between p-4 w-72 h-96 rounded-lg">
      <div className="flex flex-col h-1/2">
        <p className="text-sm">{source.name}</p> {/* source.name */}
        <h1 className="font-semibold text-xl line-clamp-4">
          {" "}
          {/* title */}
          {title}
        </h1>
        <p className="my-1 opacity-70 line-clamp-1">{author}</p> {/* author */}
      </div>
      <div className="h-1/2">
        <p className="line-clamp-5 tracking-tight">
          {" "}
          {/* description */}
          {description}
        </p>
      </div>
      <div className="flex justify-between gap-4 mt-2 items-center">
        <a href={url} target="_blank" rel="noreferrer">
          {" "}
          {/* link to url */}
          <Button className="bg-sky-500" size="w-fit">
            News Page
          </Button>
        </a>
        <Button className="bg-blue-500 text-white" onClick={()=>handleSaving(source, title, description, author, url)} >Save</Button>
      </div>
    </article>
  );
};
