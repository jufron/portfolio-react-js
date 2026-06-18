import { Link } from "react-scroll";
import React from "react";

function NavbarMenuItem({ menuName }) {
  return (
    <Link
      to={`${menuName.toLowerCase()}`}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="bg-green-500/10 text-green-600! dark:bg-green-400/10 dark:text-green-400! font-semibold"
      className="text-sm font-semibold text-slate-700 hover:text-green-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/80 dark:text-slate-200 dark:hover:text-green-400 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
    >
      {menuName}
    </Link>
  );
}

export default NavbarMenuItem;

