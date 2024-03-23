import React from "react";
import coverImage from "../images/cover.jpg";
import { motion } from "framer-motion";

function Intro() {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-br from-gray-500 via-gray-500 to-gray-500">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center rounded-full"
              alt="hero"
              src={coverImage}
            />
          </motion.div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="text-blue-800 font-bold">Hi</span>,My name is{" "}
              <span className="text-blue-800 font-bold">MD AFFAN ALAM</span>
              <br className="hidden lg:inline-block" />
              I'm{" "}
              <span className="font-bold">
                Computer Science & Enginnering
              </span>{" "}
              Student
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              <span className="font-bold">Welcome</span> to the exciting world
              of Computer Science and Engineering! As a student in this field,
              you are embarking on a journey that combines creativity,
              problem-solving, and innovation. Here's a personalized description
              for a Computer Science & Engineering student with a{" "}
              <span className=" font-bold">passion for coding</span>:
            </p>
            <div className="flex justify-center">
              <a href="/projects">
                <button className="ml-4 mr-4 inline-flex text-white shadow-xl inset-0 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
                  Projects
                </button>
              </a>
              <button className="inline-flex text-white shadow-xl inset-0  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800  hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
