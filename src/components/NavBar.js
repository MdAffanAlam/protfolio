import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 text-white">
      <nav className="flex justify-between items-center">
        
        <motion.h3
          className=" font-bold text-size-lg hover:tracking-widest"
          initial={{ x: -100, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          DevFolio
        </motion.h3>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-400 hover:text-gray-200 focus:text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
              />
            </svg>
          </button>
        </div>

        <motion.ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:gap-4`}
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: "1", delay: 1 }}
        >
          <li>
            <Link
              to="/intro"
              className="font-bold hover:text-green-400 hover:tracking-widest"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="space-x-2 font-bold hover:text-green-400 hover:tracking-widest"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="font-bold hover:text-green-400 hover:tracking-widest"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold hover:text-green-400 hover:tracking-widest"
            >
              Contact
            </Link>
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default NavBar;
