import React from "react";
import { motion } from "framer-motion";
import "../components/Animation.css";

function Contact() {
  return (
    <section className="px-4 md:px-0 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        Feel Free to Contact us
      </h1>

      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14651.300341477852!2d85.30684868142619!3d23.35835076226488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a9d7264cdd%3A0x2620bc7be60096c9!2sHindpiri%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1692379857293!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mx-auto mt-16 md:mt-24 text-center">
        <motion.div
          className="max-w-2xl mx-auto mt-4 mb-4 shadow-xl rounded-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="h-4 border-t-4 border-indigo-800 absolute top-0 left-0 w-full"></div>
            <div className="h-4 border-t-4 border-red-800 absolute bottom-0 left-0 w-full"></div>

            <motion.form
              action="https://formspree.io/f/myyqerzv"
              method="POST"
              className="mx-auto max-w-md relative z-10 "
              initial={{ opacity: 0, y: 2000 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              data-netlify="true"
            >
              <i className="fas fa-user text-white mt-4"></i>

              <label htmlFor="name" className="text-white font-bold mt-4 ml-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full mt-2 bg-gray-200 bg-opacity-80 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 mb-4 transition-colors duration-200 ease-in-out placeholder-gray-400 font-bold hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-900"
                autoComplete="off"
                required
              />
              <i className="fas fa-envelope text-white mt-4"></i>
              <label htmlFor="email" className="text-white font-bold mt-4 ml-2">
                Email:
              </label>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="w-full mt-2 bg-gray-200 bg-opacity-80 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-4 mb-4 transition-colors duration-200 ease-in-out placeholder-gray-400 font-bold hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-900"
                autoComplete="off"
                required
              />
              <i className="fas fa-comment text-white mt-4"></i>

              <label htmlFor="name" className="text-white font-bold mt-4 ml-2">
                Ask Anything:
              </label>
              <textarea
                name="message"
                placeholder="Message"
                cols="30"
                rows="6"
                className="w-full mt-2 font-bold bg-gray-200 bg-opacity-80 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-2 px-4 mb-4 resize-none leading-6 transition-colors duration-200 ease-in-out hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-900"
                autoComplete="off"
                required
              ></textarea>

              <motion.button
                className="glow-on-hover ml-4 mr-4 mb-8  shadow-xl inset-0 border-0 py-2 px-6 rounded-full text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
