import React from "react";

const NavLink = ({ route }) => {
  return (
    <li className="text-gray-700 text-base font-medium">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default NavLink;
