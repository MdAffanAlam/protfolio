// Import React and necessary components from Tailwind CSS
import React from "react";

const About = () => {
  return (
    <div className="font-montserrat min-h-screen bg-gray-200">
      <section
        id="about"
        className="bg-gray-300 p-8 rounded-md shadow-md mt-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
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
        className="bg-gray-200 p-8 rounded-md shadow-md mt-8"
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

      <section id="projects" className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>

        {/* Each project is a separate component to improve readability */}
        <Project
          title="Weather Application"
          description="This Weather Application/website is built using HTML, CSS, and JavaScript. It provides users with real-time weather updates and forecasts, offering a user-friendly interface to stay informed about the current weather conditions."
        />

        <Project
          title="Personal Portfolio"
          description="This Personal Portfolio is a static website crafted with HTML and CSS. It serves as a digital resume, showcasing the creator's skills, experiences, and projects. The minimalistic design focuses on presenting the individual's professional profile effectively."
        />

        <Project
          title="Email Validator"
          description="The Email Validator Application/website, developed with HTML and CSS, offers a simple tool to verify the validity of email addresses. Users can input an email, and the application checks its format and structure, providing feedback on whether it is a valid email address."
        />

        <Project
          title="iNotebook"
          description="The iNotebook Application/website is a basic note-taking platform created using only HTML and CSS. It provides users with a platform to jot down quick notes, ideas, or reminders. The simplicity of the design enhances the ease of use for quick and efficient note-taking."
        />

        <Project
          title="Word Counter"
          description="The Word Counter Application/website, developed with HTML and CSS, offers a tool to count the number of words in a given text. Users can input text, and the application provides an instant count of words, helping with tasks such as writing essays or analyzing document content."
        />
      </section>
    </div>
  );
};

// Separate component for Project for improved readability
const Project = ({ title, description }) => {
  return (
    <div className="project bg-gray-200 p-8 rounded-md shadow-md mb-8">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default About;
