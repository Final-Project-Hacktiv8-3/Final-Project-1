import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { BsList } from "react-icons/bs";

import { NavDropDown, SearchInput } from "../../molucules";
import Button from "../../atoms/Button";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [search, setSearch] = useState(false);
  const isDropDown = () => {
    setDropDown(!dropDown);
  };

  const navList = [
    {
      id: 1,
      navItem: "Indonesia",
      link: "/",
    },
    {
      id: 2,
      navItem: "Programing",
      link: "/programing",
    },
    {
      id: 3,
      navItem: "Covid-19",
      link: "/covid",
    },
    {
      id: 4,
      navItem: "Saved",
      link: "/saved",
    },
  ];
  const handleKeyPresed = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };
  const navigate = useNavigate();
  const navClass = ({ isActive }) => {
    return isActive
      ? `capitalize  text-black dark:text-white  dark:-slate-100 duration-300 ease-out`
      : ` capitalize font-medium duration-200  hover:text-gray-700 hover:-slate-300 dark:-black hover:dark:text-slate-100 hover:dark:border-slate-100 duration-300 ease-out `;
  };

  const hamNavClass = ({ isActive }) => {
    return isActive
      ? `capitalize rounded-md text-black bg-slate-200 dark:bg-slate-500 dark:text-slate-100 duration-300 ease-out`
      : `capitalize font-medium duration-100 rounded-md hover:text-black bg-white dark:bg-zinc-900 dark:text-slate-200 dark:hover:text-slate-100 duration-300 ease-out`;
  };

  return (
    <header
      className={`w-full flex fixed items-center justify-between md:px-16 px-8 font-semibold bg-white dark:bg-zinc-900 duration-300 ease-out text-slate-500  h-[8vh] z-50`}
    >
      <nav className="hidden md:block">
        <ul className="flex gap-x-6">
          {navList.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.link} className={navClass}>
                {nav.navItem}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <SearchInput
        placeholder="Cari Berita"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyPresed(e)}
      />

      {/* Mobile */}
      <nav className="block md:hidden">
        <Button
          onClick={isDropDown}
          size="w-fit"
          className={`flex items-center  rounded-md text-white hover:bg-slate-500`}
        >
          <BsList />
        </Button>
        <NavDropDown className={`-mx-[40vw] rounded-md`} isDropDown={dropDown}>
          <ul
            className="flex flex-col rounded-md gap-2"
            onMouseLeave={isDropDown}
          >
            {navList.map((nav) => (
              <NavLink to={nav.link} key={nav.id} className={hamNavClass}>
                <li className="w-[45vw] px-4 py-1 rounded-md hover:bg-slate-500 duration-300 ease-out">
                  {nav.navItem}
                </li>
              </NavLink>
            ))}
          </ul>
        </NavDropDown>
      </nav>
    </header>
  );
};
