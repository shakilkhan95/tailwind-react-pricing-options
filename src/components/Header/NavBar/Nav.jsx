import React from 'react';
import NavLink from './NavLink';

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
    return (
        <ul className='md:flex hidden gap-5'>
            {
                navItems.map(route => <NavLink key={route.id} route={route}></NavLink>)
            }
        </ul>
    );
};

export default Nav;