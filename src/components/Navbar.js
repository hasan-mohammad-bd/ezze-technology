import React from "react";
import { Link } from "react-router-dom";
import logo_1 from '../image/etl-sticky-logo.png';

const Navbar = () => {
  return (
    <div className="bg-slate-500">
      <div className="flex container mx-auto justify-between items-center">
        <div className="logo max-w-[200px]"><img src={logo_1} alt="" /></div>
        <nav>
          <ul className="flex justify-between items-center">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="mr-5" to="about">About Us</Link>
            </li>
            <li>
              <Link className="mr-5" to="">Press</Link>
            </li>
            <li>
              <Link className="mr-5" to="">Career</Link>
            </li>
            <li>
              <Link className="" to="">Content</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
