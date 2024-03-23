import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.body.classList.add(
      "text-gray-600",
      "body-font",
      "bg-gradient-to-br",
      "from-gray-500",
      "via-gray-500",
      "to-gray-500"
    );
    return () => {
      document.body.classList.remove(
        "text-gray-600",
        "body-font",
        "bg-gradient-to-br",
        "from-gray-500",
        "via-gray-500",
        "to-gray-500"
      );
    };
  }, []);
  return (
    <section className="px-4 md:px-0 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
        Feel Free to Contact us
      </h2>

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
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/myyqerzv"
            method="POST"
            className="mx-auto max-w-md"
          >
            <i className="fas fa-user text-black"></i>

            <label for="name" className="text-black font-bold">
              Name:
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full bg-gray-200 bg-opacity-80 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 mb-4 transition-colors duration-200 ease-in-out placeholder-gray-400 font-bold hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-900 "
              autoComplete="off"
              required
            />
            <i class="fas fa-envelope text-black"></i>
            <label for="email" className="text-black font-bold">
              Email:
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full bg-gray-200 bg-opacity-80 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 mb-4 transition-colors duration-200 ease-in-out placeholder-gray-400 font-bold hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-900"
              autoComplete="off"
              required
            />
           <i className="fas fa-comment text-black"></i>


            <label for="name" className="text-black font-bold">
              Ask Anythings:
            </label>
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="6"
              className="w-full font-bold bg-gray-200 bg-opacity-80 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 mb-4 resize-none leading-6 transition-colors duration-200 ease-in-out  hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-900"
              autoComplete="off"
              required
            ></textarea>

            <button className="ml-4 mr-4 inline-flex text-white shadow-xl inset-0 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
