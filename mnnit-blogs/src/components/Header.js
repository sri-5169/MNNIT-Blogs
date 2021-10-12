import { Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import logo from "../images/logo192.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} className="header__logo" alt="IMG" />
        </Link>

        <Link to="/" className="header__home">
          <span>MNNIT BLOGS</span>
        </Link>

        <div className="header__search">
          <Search className="header__searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Link to="/login" className="nav__links">
          <span>Sign In</span>
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
