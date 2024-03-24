import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="bg-gradient-to-br from-gray-600 via-gray-600 to-gray-500 p-4">
      <nav className="flex justify-between items-center">
        <motion.h3
          className="text-black font-bold text-size-lg hover:tracking-widest"
          initial={{ x: -100, opacity: 0.2 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 ,delay:1 }}
        >
          DevFolio
        </motion.h3>

        <motion.ul
          className="flex gap-4"
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: "1" ,delay:1}}
        >
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
        </motion.ul>
      </nav>
    </div>
  );
};

export default NavBar;
