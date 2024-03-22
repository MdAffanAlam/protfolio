import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gradient-to-br from-gray-600 via-gray-600 to-gray-500 p-4">
      <nav className="flex justify-between items-center">
        <h3 className="text-black font-bold text-size-lg hover:tracking-widest">DevFolio</h3>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/intro"
              className="text-black font-bold hover:text-green-400 hover:tracking-widest "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-black space-x-2 font-bold hover:text-green-400 hover:tracking-widest "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-black font-bold hover:text-green-400 hover:tracking-widest "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black font-bold hover:text-green-400 hover:tracking-widest "
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
