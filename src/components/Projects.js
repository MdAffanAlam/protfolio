import React from "react";
import weather from "../images/Weather.png";
import protfolio from "../images/Protfolio.png";
import EmailValidator from "../images/Emailvalidator.png";
import Sports from "../images/Sports-zone.png";
import WordCounter from "../images/WordCounter.png";
import iNotebook from "../images/iNotebook.png";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="mt-8 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
      <Project
        title="Weather Application"
        description="The Weather Application/website is built using HTML, CSS, and JavaScript. It provides users with real-time weather updates and forecasts, offering a user-friendly interface to stay informed about the current weather conditions. The application utilizes a Weather API to fetch and display accurate weather data."
        buildTech="HTML, CSS, JavaScript, Weather API"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://weather-checker-site.netlify.app"
        imageSrc={weather}
        imageSize="h-32 w-42"
      />

      <Project
        title="DevFolio - A Personal Portfolio"
        description="DevFolio is a static website crafted with React.js, Tailwind CSS, and various npm packages. It serves as a digital resume, showcasing the creator's skills, experiences, and projects. The minimalistic design focuses on presenting the individual's professional profile effectively."
        buildTech="React.js, Tailwind CSS, npm Packages"
        githubRepositoryLink="https://github.com/MdAffanAlam/protfolio"
        WebsiteLink="https://affandevfolio.netlify.app"
        imageSrc={protfolio}
        imageSize="h-32 w-42"
      />

      <Project
        title="Email Validator"
        description="The Email Validator Application/website, developed with HTML, CSS, and JavaScript, offers a simple tool to verify the validity of email addresses. Users can input an email, and the application checks its format and structure, providing feedback on whether it is a valid email address. The application utilizes an Email API to perform the validation."
        buildTech="HTML, CSS, JavaScript, Email API"
        githubRepositoryLink="https://github.com/MdAffanAlam/EmailValidator"
        WebsiteLink="https://validatoremail.netlify.app/"
        imageSrc={EmailValidator}
        imageSize="h-32 w-42"
      />

      <Project
        title="iNotebook"
        description="iNotebook is a basic note-taking platform created using React.js, Node.js, Express.js, and MongoDB. It provides users with a platform to jot down quick notes, ideas, or reminders. The simplicity of the design enhances the ease of use for quick and efficient note-taking."
        buildTech="React.js, Node.js, Express.js, MongoDB"
        githubRepositoryLink="https://github.com/MdAffanAlam/https---github.com-MdAffanAlam-iNotebook-frontend"
        WebsiteLink="#"
        imageSrc={iNotebook}
        imageSize="h-32 w-42"
      />

      <Project
        title="Word Counter"
        description="The Word Counter is a simple application/website developed with React.js. It provides users with a tool to count the number of words in a given text. Users can input text, and the application provides an instant count of words, facilitating tasks such as writing essays or analyzing document content."
        buildTech="React.js"
        githubRepositoryLink="https://github.com/MdAffanAlam/WordCounter"
        WebsiteLink="https://wordsolution.netlify.app/"
        imageSrc={WordCounter}
        imageSize="h-32 w-42"
      />
      <Project
        title="Sports Zone"
        description="Sports Zone is a platform designed for sports enthusiasts. It provides users with the latest updates, news, and scores for various sports. Users can also interact with other enthusiasts through forums and discussions."
        buildTech="React.js, Node.js, Express, MongoDB"
        githubRepositoryLink="https://github.com/MdAffanAlam/Sport-Zone"
        WebsiteLink="#"
        imageSrc={Sports}
        imageSize="h-32 w-42"
      />
    </section>
  );
}

const Project = ({
  title,
  description,
  buildTech,
  githubRepositoryLink,
  WebsiteLink,
  imageSrc,
  imageSize,
}) => {
  const handleClick = (e) => {
    if (WebsiteLink === "#") {
      e.preventDefault();
      alert("This project is not yet deployed.");
    }
  };
  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 2 }}
      transition={{ duration: 1 }}
      className="project  p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center0 mt-6 mb-2 text-white"
    >
      <motion.img
        className={`mb-4 md:mb-0 md:mr-4 rounded-md ${imageSize} mx-auto md:mx-0 md:mr-4 md:ml-0`}
        src={imageSrc}
        alt={title}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ delay: 3 }}
      />
      <div>
        <h3 className="text-xl font-bold mb-2">
          <i class="fas fa-tag text-red-500"></i> {title}
        </h3>
        <p>
          <i class="fas fa-info-circle text-yellow-500"></i> {description}
        </p>
        <div className="mt-4">
          <strong>Build Technology:</strong> {buildTech}
        </div>
        <div className="mt-2">
          <strong>GitHub Repository:</strong>{" "}
          <a
            href={githubRepositoryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-2 text-purple-500"></i>
          </a>
        </div>
        <div className="mt-2">
          <strong>Website Link:</strong>{" "}
          <a href={WebsiteLink} target="_blank" rel="noopener noreferrer">
            <i
              className="fas fa-globe mr-2 text-green-500"
              onClick={handleClick}
            ></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
