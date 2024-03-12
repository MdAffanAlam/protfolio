import React,{useEffect} from "react";

const About = () => {
  useEffect(() => {
    document.body.classList.add("bg-gray-300");
    return () => {
      document.body.classList.remove("bg-gray-300");
    };
  }, []); 
  return (
    <div className="font-montserrat min-h-screen">
      <section
        id="about"
        className="bg-gray-100 p-8 rounded-xl shadow-xl  mt-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
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
        className="bg-gray-100 p-8 rounded-xl shadow-xl mt-8 mb-4"
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            HTML5
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            CSS3
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            JavaScript
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            React
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            Node.js
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            Java
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            C/C++
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
