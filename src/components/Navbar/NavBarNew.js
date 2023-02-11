import { useSpring, animated } from "@react-spring/web";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo/etl_logo_white.png";


const NavBarNew = () => {
    const fade = useSpring({
        from: {opacity: 0},
        to: {opacity:1}
    })
  return (
    <animated.div style={fade} className="bg-black">
      <div className="navbar bg-black py-5 container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="mr-5" to="about">About Us</Link>
            </li>
            <li>
              <Link className="mr-5" to="press">Press</Link>
            </li>
            <li>
              <Link className="mr-5" to="career">Career</Link>
            </li>
            <li>
              <Link className="" to="contact">Contact</Link>
            </li>
            </ul>
          </div>
          <a className=""><img className="max-w-[150px]" src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">

        </div>
        <div className="navbar-end">
        <ul className="lg:flex justify-between items-center text-white text-[1rem] hidden">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="mr-5" to="about">About Us</Link>
            </li>
            <li>
              <Link className="mr-5" to="press">Press</Link>
            </li>
            <li>
              <Link className="mr-5" to="career">Career</Link>
            </li>
            <li>
              <Link className="" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </animated.div>
  );
};

export default NavBarNew;
