import Button from "../../atoms/Button";

const NewsCard = () => {
  return (
    <article className="flex flex-col justify-between p-4 w-72 h-96 rounded-lg">
      <div className="flex flex-col h-1/2">
        <p className="text-sm">Cnnindonesia.com</p> {/* source.name */}
        <h1 className="font-semibold text-xl line-clamp-4">
          {" "}
          {/* title */}
          Id non laboris culpa consectetur dolor sint excepteur tempor sunt.
        </h1>
        <p className="my-1 opacity-70">CNN Indonesia</p> {/* author */}
      </div>
      <div className="h-1/2">
        <p className="line-clamp-5 tracking-tight">
          {" "}
          {/* description */}
          Reprehenderit sit ullamco nisi consequat. Ex labore exercitation
          proident ut cillum culpa ad magna tempor Lorem. Proident nulla Lorem
          exercitation voluptate non officia dolor ad magna sunt. Fugiat
          occaecat magna do velit fugiat pariatur commodo et nostrud anim anim
          consectetur ex nostrud.
        </p>
      </div>
      <div className="flex justify-between gap-4 mt-2 items-center">
        <a href={"/"} target="_blank" rel="noreferrer"> {/* link to url */}
          <Button className="bg-sky-500">News Page</Button>
        </a>
        <Button className="bg-blue-500 text-white">Save</Button>
      </div>
    </article>
  );
};

export default NewsCard;
