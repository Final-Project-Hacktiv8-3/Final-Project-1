import Button from "@components/atoms/Button";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
export const Paginate = () => {
  return (
    <div className="flex bg-slate-400 w-fit p-3 rounded-full my-10 ">
      <Button className="flex justify-center items-center">
        <MdNavigateBefore className="text-white " />
        <h1 className="text-white">Previous</h1>
      </Button>
      <Button className="flex justify-center items-center">
        <h1 className="text-white">Next</h1>
        <MdNavigateNext className="text-white " />
      </Button>
    </div>
  );
};
