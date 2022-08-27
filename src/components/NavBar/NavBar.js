import React, { useState } from "react";
import "./NavBar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <h3 className="logo">
          <span>HB</span>FITNESS{" "}
        </h3>
        <ul
          className={nav ? "nav-links-mobile" : "nav-links"}
          onClick={() => setNav(false)}
        >
          <li className="nav-items">
            <a href="#home">Home </a>
          </li>
          <li className="nav-items">
            <a href="#about">About Us </a>
          </li>
          <li className="nav-items">
            <a href="#features">Features </a>
          </li>
          <li className="nav-items">
            <a href="#pricing">Pricing </a>
          </li>
          <li className="nav-items">
            <a href="#trainers">trainers </a>
          </li>
          <li className="nav-items">
            <a href="#blogs">Blogs </a>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
    </React.Fragment>
  );
}
