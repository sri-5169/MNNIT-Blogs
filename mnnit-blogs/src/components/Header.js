import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo"></div>
        <div className="header__title"></div>
        <div className="header__search">SearchBox</div>
        <div className="header__nav">
          
        <Link to='login'><p className="header__option">Sign In</p></Link>
        <Link to='aboutMnnit'><p className="header__option">About MNNIT</p></Link>
        <Link to ='about'><p className="header__option">About Us</p></Link>
        </div>
      </div>
    </>
  );
}

export default Header;
