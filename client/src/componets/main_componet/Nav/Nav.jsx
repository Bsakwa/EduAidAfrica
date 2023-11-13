import React from "react";
import logo from "../../../assets/distance-learning.svg";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="header-content flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="logo flex gap-4 items-center">
          <img src={logo} alt="" width={50} />
          <span className="font-quicksand text-[1.5rem] text-blue">
            <span className="text-blue-500">EduAid</span>Africa
          </span>
        </div>

        {/* Navigation Links Section */}
        <nav className="flex text-white flex-row justify-between items-center text-body font-semibold">
          <NavLink className="nav_list mr-4" to="/home">
            Home
          </NavLink>
          <NavLink className="nav_list mr-4" to="/scholarship">
            Scholarships
          </NavLink>
          <NavLink className="nav_list mr-4" to="/about">
            About
          </NavLink>
          <NavLink className="nav_list mr-4" to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Apply Button Section */}
        <button className="font-bold text-white">
          <NavLink to="/Login">Sign up</NavLink>
        </button>
      </div>
    </header>
  );
};

export default Nav;
