import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ResponsiveNav from "./ResponsiveNav";

const NavIcon = () => {

    const [open, setOpen] = useState(false);

    return (
      <div className="md:hidden">
        {open ? (
          <>
            <ResponsiveNav></ResponsiveNav>
            <X
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            ></X>
          </>
        ) : (
          <Menu
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          ></Menu>
        )}
      </div>
    );
};

export default NavIcon;