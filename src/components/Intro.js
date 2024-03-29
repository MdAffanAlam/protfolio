import React , {useEffect} from "react";
import coverImage from "../images/cover.jpg";
import { motion } from "framer-motion";
import "../components/Animation.css";

function Intro() {
  const glowVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

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
    <>
      <section className="text-gray-600 body-font bg-gradient-to-br from-gray-500 via-gray-500 to-gray-500">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div
            initial={{
              opacity: 0,
              borderRadius: "50%",
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
              x: -100,
            }}
            animate={{
              opacity: 2,
              borderRadius: "0%",
              rotateY: 360,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
              x: 0,
            }}
            transition={{
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 120,
            }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center rounded-full border-4 border-solid border-black shadow-xl"
              alt="hero"
              src={coverImage}
            />
          </motion.div>
          ;
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              initial={{ x: 900, opacity: 0 }}
              animate={{ x: 0, opacity: 2 }}
              transition={{ duration: "1", delay: 1 }}
            >
              <span className="text-blue-800 font-bold">Hi</span>,My name is{" "}
              <span className="text-blue-800 font-bold">MD AFFAN ALAM</span>
              <br className="hidden lg:inline-block" />
              I'm{" "}
              <span className="font-bold">
                Computer Science & Enginnering
              </span>{" "}
              Student
            </motion.h1>
            <motion.p
              className="mb-8 leading-relaxed text-black"
              initial={{ x: 900, opacity: 0 }}
              animate={{ x: 0, opacity: 2 }}
              transition={{ duration: "1", delay: 1 }}
            >
              <span className="font-bold">Welcome</span> to the exciting world
              of Computer Science and Engineering! As a student in this field,
              you are embarking on a journey that combines creativity,
              problem-solving, and innovation. Here's a personalized description
              for a Computer Science & Engineering student with a{" "}
              <span className=" font-bold">passion for coding</span>:
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ x: 900, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a href="/projects">
                <motion.button
                  variants={glowVariants}
                  className=" glow-on-hover mr-4 inline-flex text-white border-0 py-2 px-12 rounded-full text-lg"
                >
                  Projects
                </motion.button>
              </a>
              <motion.button
                variants={glowVariants}
                className="glow-on-hover inline-flex text-white  border-0 py-2 px-6 rounded-full text-lg"
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>
        </div>
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
          <h2 class="programas titulo">
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
    </>
  );
}

export default Intro;
