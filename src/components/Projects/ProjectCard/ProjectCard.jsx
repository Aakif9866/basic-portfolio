import React from "react";
import Reveal from "../../Reveal/Reveal";
import { IoLogoGithub } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  return (
    <Reveal>
      <div className="max-w-screen-lg mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="">
            <h2 className="text-xl font-semibold mb-2 text-left">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4 lg:h-[30rem]">
              {project.description}
            </p>
            <div className="h-[13rem] ">
              <h3 className="text-lg font-semibold">Technologies Used:</h3>
              <ul className="list-disc pl-6">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-600">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`${project.link}`}
              className="flex items-center justify-center gap-2"
            >
              <IoLogoGithub className="h-6 w-6" />
              Click here to visit the github page
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
