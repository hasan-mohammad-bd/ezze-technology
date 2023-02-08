import React from "react";
import logo_1 from '../image/etl-sticky-logo.png';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="logo"><img src={logo_1} alt="" /></div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Content</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
