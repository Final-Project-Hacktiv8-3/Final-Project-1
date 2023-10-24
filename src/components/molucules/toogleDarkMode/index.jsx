import Button from "@components/atoms/Button";
import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

export const ToogleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme"));
  const setDarkTheme = () => {
    setIsDarkMode("dark");
    if (isDarkMode === "dark") {
      setIsDarkMode("light");
    } else {
      setIsDarkMode("dark");
    }
  };
  useEffect(() => {
    if (isDarkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (isDarkMode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);
  return (
    <Button
      size="w-16"
      onClick={setDarkTheme}
      className={`p-4 rounded-full transition duration-500 ease-in-out my-2 ${
        isDarkMode === "dark"
          ? "bg-slate-300 flex justify-end items-center"
          : "bg-zinc-900"
      } 
        cursor-pointer ease-in-out duration-300 hover:scale-105 text-white 
  `}
    >
      {isDarkMode === "dark" ? (
        <MdDarkMode className="text-zinc-900" />
      ) : (
        <BsFillSunFill className="text-yellow-200" />
      )}
    </Button>
  );
};
