import React from "react";
import "../components/Animation.css";
import aboutImg from "../images/AboutImg.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="font-montserrat min-h-screen">
      <section
        id="about"
        className=" p-8 rounded-xl shadow-xl  mt-8 text-center body-font"
      >
        <motion.h1
          className="text-3xl font-bold mb-4 bg-gradient-to-l from-gray-400 via-white to-red-500 bg-clip-text text-transparent"
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="flex justify-center items-center"
          initial={{ y: -2000, opacity: 0.6 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            className="rounded-full mb-4 md:w-1/2 lg:w-1/4 xl:w-1/5"
            src={aboutImg}
            alt="Profile"
          />
        </motion.div>

        <motion.p
          className="font-mono text-base text-white leading-7"
          initial={{ x: 3000, opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: 2 }}
        >
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
          development.
        </motion.p>
      </section>

      <div class="container">
        <div class="col">
          <h2 class="titulo">
            Technical<span className="space">Skills</span>{" "}
          </h2>
          <ul class="skill">
            <li>
              <span class="blueline html"></span>
              <em>HTML</em>
            </li>
            <li>
              <span class="blueline css"></span>
              <em>CSS</em>
            </li>
            <li>
              <span class="blueline javascript"></span>
              <em>Javascript</em>
            </li>
            <li>
              <span class="blueline javascript"></span>
              <em>node js</em>
            </li>
            <li>
              <span class="blueline mongodb"></span>
              <em>mongodb</em>
            </li>
            <li>
              <span class="blueline java"></span>
              <em>java</em>
            </li>
            <li>
              <span class="blueline c"></span>
              <em>c programming</em>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2 class="plataformas titulo">Frameworks</h2>
          <ul class="skill">
            <li>
              <span class="greenline bootstrap"></span>
              <em>Bootstrap</em>
            </li>
            <li>
              <span class="greenline tailwind"></span>
              <em>Tailwind CSS</em>
            </li>
            <li>
              <span class="greenline react"></span>
              <em>React js</em>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2 class="programas titulo prof">
            Professional<span className="space">Skills</span>
          </h2>
          <ul class="skill">
            <li>
              <span class="redline creativity"></span>
              <em>Creativity</em>
            </li>
            <li>
              <span class="redline communication"></span>
              <em>Communication</em>
            </li>
            <li>
              <span class="redline problem-solving"></span>
              <em>Problem Solving</em>
            </li>
            <li>
              <span class="redline team-work"></span>
              <em>Team-Work</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
