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
            <a href="#home">Features </a>
          </li>
          <li className="nav-items">
            <a href="#home">Pricing </a>
          </li>
          <li className="nav-items">
            <a href="#home">trainers </a>
          </li>
          <li className="nav-items">
            <a href="#home">Blogs </a>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
      {/* <div className="header">
        <a href="#" className="logo">
          {" "}
          <span>HB</span>FITNESS{" "}
        </a>

        <nav className="navbar">
          <ul className={nav ? "nav-links-mobile" : "nav-links"}>
            <a href="#home" className="nav-items">
              home
            </a>
            <a href="#about" className="nav-items">
              about
            </a>
            <a href="#features" className="nav-items">
              features
            </a>
            <a href="#pricing" className="nav-items">
              pricing
            </a>
            <a href="#trainers" className="nav-items">
              trainers
            </a>
            <a href="#blogs" className="nav-items">
              blogs
            </a>
          </ul>
        </nav>

        <div className="mobile-menu-icon">
          {nav ? (
            <AiOutlineMenu/>
          ) : (
            <AiOutlineClose />
          )}
        </div>
      </div> */}
    </React.Fragment>
  );
}
