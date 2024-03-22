import React, { useEffect } from "react";

const About = () => {
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
    <div className="font-montserrat min-h-screen">
      <section
        id="about"
        className="bg-gray-100 p-8 rounded-xl shadow-xl  mt-8 text-center text-gray-400 body-font bg-gradient-to-br from-gray-400 via-gray-400 to-gray-400"
      >
        <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
        <p className="font-mono text-base text-gray-800 leading-7">
          As a B.Tech CSE (Computer Science and Engineering) student, my
          academic journey has not only equipped me with a comprehensive
          understanding of computer science principles but has also ignited a
          profound passion for coding and development. Throughout my coursework,
          I have delved into a myriad of subjects, ranging from algorithms and
          data structures to database management and software engineering
          methodologies. This educational experience has not only provided me
          with a solid theoretical foundation but has also fueled my curiosity
          to explore the practical aspects of turning innovative ideas into
          functional, real-world solutions. Through hands-on projects, I have
          honed my skills in various programming languages and frameworks,
          allowing me to navigate both the front-end and back-end domains of web
          development. My commitment to coding extends beyond the academic
          realm, as I actively seek out opportunities to contribute to
          open-source projects, participate in coding competitions, and stay
          abreast of the latest industry trends. This continuous engagement has
          not only enriched my technical proficiency but has also nurtured a
          creative mindset that thrives on problem-solving and innovation. In
          essence, my journey as a B.Tech CSE student has cultivated a
          deep-seated passion for coding and development, transforming my
          academic pursuits into a dynamic exploration of turning concepts into
          tangible, impactful solutions in the ever-evolving landscape of
          technology.
        </p>
      </section>

      <section
        id="skills"
        className="bg-gray-100 p-8 rounded-xl shadow-xl mt-8 mb-4 bg-gradient-to-br from-gray-400 via-gray-400 to-gray-400"
      >
        <h2 className="text-3xl font-bold mb-4 text-black">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          <div>
            {" "}
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              HTML5
            </li>
          </div>
          <div>
            {" "}
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              CSS3
            </li>
          </div>
          <div>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              JavaScript
            </li>
          </div>
          <div>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              React
            </li>
          </div>
          <div>
            {" "}
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              Node.js
            </li>
          </div>
          <div>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              Java
            </li>
          </div>
          <div>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-blue-900 rounded-full text-lg">
              C/C++
            </li>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default About;
