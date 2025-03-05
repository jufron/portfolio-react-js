import { Link } from "react-scroll";
import React from "react";
import { NAVBAR_MENU_ITEM_CLASS } from "../../utils";

function NavbarMenuItem({ menuName }) {
  return (
    <Link
      to={`${menuName.toLowerCase()}`}
      smooth={true}
      duration={500}
      className={NAVBAR_MENU_ITEM_CLASS}
    >
      {menuName}
    </Link>
  );
}

export default NavbarMenuItem;
