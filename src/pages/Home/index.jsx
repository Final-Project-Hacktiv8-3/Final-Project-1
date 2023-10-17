import { Navbar } from "../../components/organisms";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-x-5 items-center justify-center w-full min-h-screen">
        <div className="my-[10vh]">
          <p>Home</p>
        </div>
      </div>
    </>
  );
};
