import React from "react";
import coverImage from "../images/cover.jpg";

function Intro() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={coverImage}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="text-blue-700 font-bold">Hi</span>,My name is{" "}
              <span className="text-blue-500 font-bold">MD AFFAN ALAM</span>
              <br className="hidden lg:inline-block" />
              I'm{" "}
              <span className="text-blue-500 font-bold">
                Computer Science & Enginnering
              </span>{" "}
              Student
            </h1>
            <p className="mb-8 leading-relaxed">
              <span className="text-blue-300 font-bold">Welcome</span> to the
              exciting world of Computer Science and Engineering! As a student
              in this field, you are embarking on a journey that combines
              creativity, problem-solving, and innovation. Here's a personalized
              description for a Computer Science & Engineering student with a{" "}
              <span className="text-blue-300 font-bold">
                passion for coding
              </span>
              :
            </p>
            <div className="flex justify-center">
              <a href="/projects">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Projects
                </button>
              </a>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
