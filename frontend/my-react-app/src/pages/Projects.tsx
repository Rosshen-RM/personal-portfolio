import React from "react";
import ProjectCard from "../components/Projectcard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "A2L Calculator (HVAC)",
      desc: "Converted Excel based HVAC system calculator into a powerful web application improving accuracy and reducing manual effort.",
      img: "/src/assets/A2L.jpg",
      github: "https://github.com/",
      tags: ["React", "TypeScript", "REST API"],
    },
    {
      title: "Sound Analyzer",
      desc: "Web based sound measurement application supporting ducted & non-ducted devices with enhanced UI & performance.",
      img: "/src/assets/project2.jpg",
      github: "https://github.com/",
      tags: ["JavaScript", "Charts", "Web App"],
    },
    {
      title: "Timesheet Management",
      desc: "Full-stack timesheet app to manage employees, submissions, approvals & reports.",
      img: "/src/assets/timesheet.jpg",
      github: "https://github.com/",
      tags: ["Spring Boot", "PostgreSQL", "React"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 text-black  dark:bg-(--dark-bg) dark:text-white relative"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="
          absolute inset-0 
          bg-linear-to-br 
          from-blue-300/20 via-white to-purple-300/20 
          dark:from-blue-900/20 
          dark:via-black 
          dark:to-purple-900/20
        "
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
          Featured Projects
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
          A selection of projects I’ve worked on recently
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
