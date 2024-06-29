import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react';
import logo from "../images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleClick= () =>{
    setOpen(false);
  }

  return (
    <div className="p-4 text-white">
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
            className="font-bold text-xl hover:tracking-widest"
            initial={{ x: -100, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            DevFolio
          </motion.h3>
        </div>

        
        

        <motion.ul
          className={`${isOpen ? "mobile-links" : "hidden"} lg:flex lg:gap-4`}
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: "1", delay: 1 }}
        >
          <li>
            <Link
              to="/intro"
              className="font-bold hover:text-green-400 hover:tracking-widest"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="space-x-2 font-bold hover:text-green-400 hover:tracking-widest"
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="font-bold hover:text-green-400 hover:tracking-widest"
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold hover:text-green-400 hover:tracking-widest"
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </motion.ul>
        <div className="hamburger-menu" onClick={toggleMenu} >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      </nav>
    </div>
  );
};

export default NavBar;
