import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Reveal from "../Reveal/Reveal";

const projects = [
  {
    title: "BeyoundBoundsBlog",
    description:
      "A responsive blog application built with React.js using the Vite framework, state management with User Context, and styled with Tailwind CSS. The application allows users to interact with other people by providing a platform where they can share the latest updates happening around the world on different issues.Users can easily signup to the blog website. The data is stored locally in a DB(MongoDB),provide correct credentials and easily log in to the profile , easily add a new post sharing thoughts on the latest happenings,make changes if necessary after the post has been added. Bcrypt is used to encrypt the password so as to achieve basic security measures.The application is designed to work seamlessly on various screen sizes, including desktops, tablets, and mobile devices.",
    technologies: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Bcrypt.js",
      "JavaScript",
    ],
    link: "https://github.com/misky0310/BeyondBoundsBlog",
  },
  {
    title: "ToDo List App",
    description:
      "A responsive todo list application built with React.js using the Vite framework, state management with Redux Toolkit, and styled with Tailwind CSS. The application allows users to efficiently manage their tasks by providing a clean and intuitive user interface.Users can easily add new tasks to the todo list, mark tasks as completed to keep track of the progress, remove tasks that are no longer needed or have been completed.The application is designed to work seamlessly on various screen sizes, including desktops, tablets, and mobile devices.",
    technologies: ["React.js", "Tailwind", "React Redux", "JavaScript"],
    link: "https://github.com/misky0310/ToDoList-Redux",
  },
  {
    title: "True Feedback",
    description:
      "True Feedback is a web application designed for honest and anonymous communication among users. Built with Next.js, it leverages the power of server-side rendering and efficient routing for seamless user experience. NextAuth.js is integrated for authentication, providing a robust and secure authentication solution out of the box.The platform allows users to send anonymous messages to each other, fostering open and genuine dialogue. Users can sign up easily to access the platform's features. Data is stored locally in a MongoDB database. Users can securely log in to their profiles with encrypted passwords using Bcrypt.They can send and receive anonymous messages, as well as initiate direct messages by providing user IDs or profiles. The application is designed to be responsive, ensuring seamless functionality across desktops, tablets, and mobile devices.",
    technologies: [
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "Bcrypt",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
    ],
    link: "https://github.com/misky0310/TrueFeedback",
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <Reveal>
      <div id="projects" className="projects w-full">
        <div className="textCont flex flex-col items-center justify-center text-center py-20 gap-8 w-full">
          <h1 className="text-6xl">My Projects</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default Projects;
