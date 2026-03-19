import React from "react";
import Nav from "./Nav";
import NavIcon from "./NavIcon";

const NavBar = () => {

  return (
    <nav className="w-10/12 mx-auto flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <NavIcon></NavIcon>
        <h3 className="text-3xl font-bold cursor-pointer">Logo</h3>
      </div>

      <Nav></Nav>

      <button className="btn btn-primary">Sign In</button>
    </nav>
  );
};

export default NavBar;
