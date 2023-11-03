import "./nav.css";
import Search from "../searchbar/Search";
import { logo } from "../../../assets/images/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav-body">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar">
        <nav className="Navigator">
          <ul>
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#about"> About Us</a>
            </li>
            <li>
              <a href="#stories"> Impact Stories</a>
            </li>
            <li>
              <a href="#programs"> Programs</a>
            </li>
            <li>
              <a href="#news"> News & Updates</a>
            </li>
            <li>
              <a href="#contact"> Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className ="search">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
