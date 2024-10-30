import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; 
import logo from "../images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleClick = () => {
    setOpen(false);
  }

  return (
    <div className="p-3 text-white bg-gray-700 bg-opacity-25">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="logo"
            className="h-10 mr-2"
            initial={{ x: -100, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.h3
            className="font-bold text-xl hover:tracking-widest bg-gradient-to-r from-gray-300 via-white to-red-500 bg-clip-text text-transparent"
            initial={{ x: -100, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            DevFolio
          </motion.h3>
        </div>

        <motion.ul
          className={`custom-nav ${isOpen ? "mobile-links" : "hidden"} lg:flex lg:gap-4`}
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: "1", delay: 1 }}
        >
          <li>
            <Link
              to="/intro"
              className="font-bold hover:text-green-400 hover:tracking-widest flex items-center space-x-2"
              onClick={handleClick}
            >
              <FaHome color="yellow" size={20} /> 
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="font-bold hover:text-green-400 hover:tracking-widest flex items-center space-x-2"
              onClick={handleClick}
            >
              <FaUser color="orange" size={20} /> 
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="font-bold hover:text-green-400 hover:tracking-widest flex items-center space-x-2"
              onClick={handleClick}
            >
              <FaProjectDiagram color="cyan" size={20} /> 
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="font-bold hover:text-green-400 hover:tracking-widest flex items-center space-x-2"
              onClick={handleClick}
            >
              <FaEnvelope color="lime" size={20} /> 
              <span>Contact</span>
            </Link>
          </li>
        </motion.ul>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
