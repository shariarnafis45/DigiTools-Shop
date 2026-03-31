import React from "react";
import Logo from "../assets/DigiTools.png";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar max-w-[1200px] mx-auto bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <a className=" text-xl">
            {" "}
            <img src={Logo} alt="" />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <button className="btn btn-ghost rounded-full font-semibold text-2xl mr-5 sm:-mr-3 ">
            <IoCartOutline />
          </button>
          <button className="btn btn-ghost rounded-full font-semibold hidden md:block">
            Login
          </button>
          <button className="bbtn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-2 px-4 hidden md:block">
            Get Started
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
