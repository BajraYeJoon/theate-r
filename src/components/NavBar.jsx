import React from "react";
import {Outlet, Link } from "react-router-dom";

const LINKS = [
  { id: "1" ,to: "/", text: "Home" },
  { id: "2",to: "/favorite", text: "Favorites" },
];

const NavBar = () => {
  return (
    <>
      <ul>
        {LINKS.map((link) => (
          <li key={link.id}>
            <Link  to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
