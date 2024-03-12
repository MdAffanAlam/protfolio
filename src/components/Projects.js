import React from "react";

function Projects() {
 /* useEffect(() => {
    document.body.style.background =
    "linear-gradient(to bottom right, #D6BCFA, #FEB8D8, #FDC9F6)";// Replace with your desired gradient
    return () => {
      document.body.style.background = "";
    };
  }, []);*/
  return (
    <section id="projects" className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>

      {/* Each project is a separate component to improve readability */}
      <Project
        title="Weather Application"
        description="This Weather Application/website is built using HTML, CSS, and JavaScript. It provides users with real-time weather updates and forecasts, offering a user-friendly interface to stay informed about the current weather conditions."
        buildTech="HTML, CSS, JavaScript,Weather API"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://your-deployed-link.com"
      />

      <Project
        title="Personal Portfolio"
        description="This Personal Portfolio is a static website crafted with HTML and CSS. It serves as a digital resume, showcasing the creator's skills, experiences, and projects. The minimalistic design focuses on presenting the individual's professional profile effectively."
        buildTech="HTML, CSS, JavaScript"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://your-deployed-link.com"
      />

      <Project
        title="Email Validator"
        description="The Email Validator Application/website, developed with HTML and CSS, offers a simple tool to verify the validity of email addresses. Users can input an email, and the application checks its format and structure, providing feedback on whether it is a valid email address."
        buildTech="HTML, CSS, JavaScript,API"
        githubRepositoryLink="https://github.com/MdAffanAlam/Whether-Application"
        WebsiteLink="https://your-deployed-link.com"
      />

      <Project
        title="iNotebook"
        description="The iNotebook Application/website is a basic note-taking platform created using only HTML and CSS. It provides users with a platform to jot down quick notes, ideas, or reminders. The simplicity of the design enhances the ease of use for quick and efficient note-taking."
        buildTech="React, Node, Express, mongoDB"
        githubRepositoryLink="https://github.com/MdAffanAlam/https---github.com-MdAffanAlam-iNotebook-frontend "
        WebsiteLink="https://your-deployed-link.com"
      />

      <Project
        title="Word Counter"
        description="The Word Counter Application/website, developed with HTML and CSS, offers a tool to count the number of words in a given text. Users can input text, and the application provides an instant count of words, helping with tasks such as writing essays or analyzing document content."
        buildTech="React"
        githubRepositoryLink="https://github.com/MdAffanAlam/WordCounter"
        WebsiteLink="https://your-deployed-link.com"
      />
    </section>
  );
}

// Separate component for Project for improved readability
const Project = ({
  title,
  description,
  buildTech,
  githubRepositoryLink,
  WebsiteLink,
}) => {
  return (
    <div className="project bg-gray-200 p-8 rounded-xl shadow-md mb-8">
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
  );
};

export default Projects;
