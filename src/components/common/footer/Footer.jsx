import "./Footer.css";
import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'
import Search from "../searchbar/Search";

import React from "react";

const Footer = () => {
  return (
    <div className="foot">
      {/* footer sections */}
     <div className="footer-top">
       {/* first section */}
       <div className="component">
        <nav>
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">Our Foundation</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Impact Stories</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">News & Events </a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* first section */}

      {/* second section */}
      <div className ="component">
        <nav>
          <h2>Community</h2>
          <ul>
            <li>
              <a href="#">Events </a>
            </li>
            <li>
              <a href="#">Programs and Initiatives</a>
            </li>
            <li>
              <a href="#">Video Gallery</a>
            </li>
            <li>
              <a href="#">News Pages</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* second section */}
      {/* third section */}
      <div className ="third-component">
        <h2>
          GET OUR NEWSLETTER TO STAY <br /> UP TO DATE
        </h2>
        <div className="search-footer">
        <Search />
        </div>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit <br/> aspernatur aut odit aut
          fugit, sed quia consequuntur{" "}
        </p>
      </div>
      {/* third section */}
     </div>

    {/* footer icons */}
     <div className ="footer-icon">
      <ul>
      <li><a href="#"><FaFacebook/></a></li>
      <li><a href="#"><FaLinkedin/></a></li>
      <li><a href="#"><FaTwitter/></a></li>
        <li><a href="#"><FaInstagram/></a></li>
      </ul>
     </div>
    {/* footer icons */}

    {/* copywrite  */}
    <div className ="copy-write">
    <span >&copy; Copywrite 2023 Pohud, All rights Reserved</span>
    </div>
    {/* copywrite  */}
    {/* footer sections */}
    </div>
  );
};

export default Footer;
