import React, { useEffect } from "react";
import weather from "../images/weather.jpg";
import protfolio from "../images/protfolio.jpg";
import { motion } from "framer-motion";

function Projects() {
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
    <section id="projects" className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">
        Projects
      </h2>
      <Project
        title="Weather Application"
        description="This Weather Application/website is built using HTML, CSS, and JavaScript. It provides users with real-time weather updates and forecasts, offering a user-friendly interface to stay informed about the current weather conditions."
        buildTech="HTML, CSS, JavaScript, Weather API"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://your-deployed-link.com"
        imageSrc={weather}
        imageSize="h-32 w-32"
      />

      <Project
        title="Personal Portfolio"
        description="This Personal Portfolio is a static website crafted with HTML and CSS. It serves as a digital resume, showcasing the creator's skills, experiences, and projects. The minimalistic design focuses on presenting the individual's professional profile effectively."
        buildTech="HTML, CSS, JavaScript"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://your-deployed-link.com"
        imageSrc={protfolio}
        imageSize="h-32 w-32"
      />

      <Project
        title="Email Validator"
        description="The Email Validator Application/website, developed with HTML and CSS, offers a simple tool to verify the validity of email addresses. Users can input an email, and the application checks its format and structure, providing feedback on whether it is a valid email address."
        buildTech="HTML, CSS, JavaScript, API"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://your-deployed-link.com"
        imageSrc={weather}
        imageSize="h-32 w-32"
      />

      <Project
        title="iNotebook"
        description="The iNotebook Application/website is a basic note-taking platform created using only HTML and CSS. It provides users with a platform to jot down quick notes, ideas, or reminders. The simplicity of the design enhances the ease of use for quick and efficient note-taking."
        buildTech="React, Node, Express, mongoDB"
        githubRepositoryLink="https://github.com/MdAffanAlam/https---github.com-MdAffanAlam-iNotebook-frontend"
        WebsiteLink="https://your-deployed-link.com"
        imageSrc={weather}
        imageSize="h-32 w-32"
      />

      <Project
        title="Word Counter"
        description="The Word Counter Application/website, developed with HTML and CSS, offers a tool to count the number of words in a given text. Users can input text, and the application provides an instant count of words, helping with tasks such as writing essays or analyzing document content."
        buildTech="React"
        githubRepositoryLink="https://github.com/MdAffanAlam/WordCounter"
        WebsiteLink="https://your-deployed-link.com"
        imageSrc={weather}
        imageSize="h-32 w-32"
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
  return (
    <motion.div
      initial={{ x: -2000, opacity: 0.2 }}
      animate={{ x: 0, opacity: 2}}
      transition={{ duration: 1 }}
      className="project bg-gray-200 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-500 via-gray-400 to-gray-400 mt-6 mb-2 text-black"
    >
      <motion.img
        className={`mb-4 md:mb-0 md:mr-4 rounded-md ${imageSize}`}
        src={imageSrc}
        alt={title}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{delay:3}}
      />
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
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
            {githubRepositoryLink}
          </a>
        </div>
        <div className="mt-2">
          <strong>Website Link:</strong>{" "}
          <a href={WebsiteLink} target="_blank" rel="noopener noreferrer">
            {WebsiteLink}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
