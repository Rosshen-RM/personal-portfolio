import React, { useState } from "react";
import { Code2, Server, Settings } from "lucide-react";

const skillSections = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-blue-500" size={36} />,
    gradient: "from-blue-500/10 to-blue-500/0",
    desc: "Building responsive and user-friendly UI for the web.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Responsive UI",
    ],
    work: [
      "Developed modern responsive UIs",
      "Built interactive dashboards",
      "Converted legacy UI to modern web apps",
    ],
  },

  {
    title: "Backend Development",
    icon: <Server className="text-purple-500" size={36} />,
    gradient: "from-purple-500/10 to-purple-500/0",
    desc: "Designing secure & scalable backend systems.",
    skills: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    work: [
      "Developed REST APIs",
      "Integrated database driven applications",
      "Worked on production ready backend services",
    ],
  },

  {
    title: "Version Control & Tools",
    icon: <Settings className="text-green-500" size={36} />,
    gradient: "from-green-500/10 to-green-500/0",
    desc: "Ensuring smooth collaboration & efficient workflow.",
    skills: ["Git", "GitHub", "Postman"],
    work: [
      "Managed source control using Git & GitHub",
      "Performed API testing with Postman",
      "Followed modern development workflows",
    ],
  },
];

const Skills: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-[#050816]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>

        <p className="text-gray-400 dark:text-gray-500 text-center text-lg mb-16">
          Technologies I use to build reliable and scalable applications
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillSections.map((section, index) => (
            <div
              key={section.title}
              className="
                bg-white dark:bg-(--dark-card)
                p-8 rounded-2xl
                shadow-xl dark:shadow-black/40
                border border-gray-200/40 dark:border-white/10
                hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-1
                relative overflow-hidden
              "
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${section.gradient}`}
              />

              {/* Content */}
              <div className="relative">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                    w-12 h-12 rounded-xl 
                    bg-white dark:bg-gray-800 
                    flex items-center justify-center
                    shadow-md
                  "
                  >
                    {section.icon}
                  </div>

                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {section.desc}
                </p>

                {/* Button */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="
                    px-6 py-2 rounded-lg font-semibold
                    bg-blue-600 hover:bg-blue-500
                    text-white
                    transition
                  "
                >
                  {openIndex === index ? "Hide Details" : "Know More"}
                </button>

                {/* Expanded Section */}
                {openIndex === index && (
                  <div className="mt-6 animate-fadeIn">
                    <h4 className="font-semibold text-lg mb-2">Skills</h4>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {section.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            px-4 py-2 
                            text-sm font-medium
                            bg-gray-200 dark:bg-gray-700
                            rounded-full
                            shadow-sm
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-lg mb-2">Experience</h4>

                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                      {section.work.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
