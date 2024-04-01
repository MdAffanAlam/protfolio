import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="social-icons text-center border-1 border-gray-50 p-1 w-auto h-auto">
        <motion.a
          initial={{ x: 900, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: "1", delay: 1 }}
          href="https://www.linkedin.com/in/md-affan-alam-839487241"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-white bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </motion.a>
        <motion.a
          initial={{ x: 900, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: "1", delay: 1 }}
          href="https://www.facebook.com/share/oGzUquCRveJRiJJy/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f text-white bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3  transform hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </motion.a>
        <motion.a
          initial={{ x: 900, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: "1", delay: 1 }}
          href="https://www.instagram.com/i_affan5?igsh=MWVybDc5ZXFkcDZpeg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-white bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </motion.a>
        <motion.a
          initial={{ x: 900, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: "1", delay: 1 }}
          href="https://github.com/MdAffanAlam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-white bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </motion.a>
        <motion.a
          initial={{ x: 900, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: "1", delay: 1 }}
          href="https://x.com/MdAffanAlam8?s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter text-white bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: "1", delay: 1 }}
        >
          <i className="fas fa-envelope text-white mt-4 mr-3"></i>
          <a
            href="mailto:mdaffanalam2022@email.com"
            className="text-white font-bold text-size-lg hover:tracking-widest"
          >
            mdaffanalam2022@email.com
          </a>

          <p class="leading-normal my-3 text-white">
            &copy; {currentYear} MD AFFAN ALAM.
            <br />
            Ranchi, Jharkhand 834001
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
