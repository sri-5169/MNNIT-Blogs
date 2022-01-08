import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} className="header__logo" alt="IMG" />
        </Link>
        <Link to="/" className="header__home">
          <span>COLLAB</span>
        </Link>
      </div>
      <div className="header__right">
        <Link to="/home" className="nav__links">
          <span>Home</span>
        </Link>
        <Link to="/blogs" className="nav__links">
          <span>Blogs</span>
        </Link>
        <Link to="/login" className="nav__links">
          <span>Sign In</span>
        </Link>
        <Link to="/profile" className="nav__links">
          <span>Profile</span>
        </Link>
        <Link to="/aboutMnnit" className="nav__links">
          <span>About MNNIT</span>
        </Link>
        <Link to="/about" className="nav__links">
          <span>About Us</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
