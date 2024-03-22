import React from "react";

function Footer() {
  return (
    <>
      <div className="social-icons text-center  bg-gradient-to-br from-gray-400 via-gray-400 to-gray-400 border-1 border-gray-50 rounded p-1">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-white-500 bg-blue-200  hover:text-black-700 hover:bg-blue-300 border border-black-500 hover:border-black-700 rounded-full m-2 p-3"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f text-white-500 bg-blue-200  hover:text-black-700 hover:bg-blue-300 border border-black-500 hover:border-black-700 rounded-full m-2 p-3"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter text-white-500 bg-blue-200  hover:text-black-700 hover:bg-blue-300 border border-black-500 hover:border-black-700 rounded-full m-2 p-3"></i>
        </a>
      </div>
    </>
  );
}

export default Footer;
