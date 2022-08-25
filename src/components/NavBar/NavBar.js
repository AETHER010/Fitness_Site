import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="header">
        <a href="#" className="logo">
          {" "}
          <span>HB</span>FITNESS{" "}
        </a>

        <div id="menu-btn" className="fas fa-bars"></div>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#features">features</a>
          <a href="#pricing">pricing</a>
          <a href="#trainers">trainers</a>
          <a href="#blogs">blogs</a>
        </nav>
      </div>
    </React.Fragment>
  );
}
