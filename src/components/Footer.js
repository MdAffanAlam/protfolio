import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="social-icons text-center bg-gradient-to-br from-gray-600 via-gray-500 to-gray-500 border-1 border-gray-50 p-1">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-black bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f text-black bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m- p-3 px-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter text-black bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-black bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter text-black bg-gray-350 hover:bg-gray-500 border-2 border-white hover:border-black rounded-full m-2 p-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-950"></i>
        </a>

        <div>
          <a
            href="mailto:mdaffanalam2022@email.com"
            className="text-black font-bold text-size-lg hover:tracking-widest"
          >
            mdaffanalam2022@email.com
          </a>

          <p class="leading-normal my-3 text-black">
            &copy; {currentYear} MD AFFAN ALAM.
            <br />
            Ranchi, JharKhand 834001
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
