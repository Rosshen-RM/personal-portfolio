import React from "react";

interface Props {
  title: string;
  desc: string;
  img: string;
  tags?: string[];
  github: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  desc,
  img,
  tags = [],
  github,
}) => {
  return (
    <div
      className="
        relative
        bg-white/80 dark:bg-white/5
        backdrop-blur-xl
        rounded-2xl
        shadow-xl
        border border-gray-200 dark:border-white/10
        overflow-hidden
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all duration-300
      "
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

      {/* IMAGE */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={img}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-3 dark:text-white">{title}</h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {desc}
        </p>

        {/* TAGS */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((t) => (
              <span
                key={t}
                className="
                  px-3 py-1 
                  rounded-full 
                  text-sm 
                  bg-gray-200 dark:bg-white/10 
                  border border-gray-300 dark:border-white/20 
                  text-gray-700 dark:text-gray-300
                "
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* BUTTON */}
        <div className="flex justify-between items-center">
          <a
            href={github}
            target="_blank"
            className="
              px-6 py-2 
              rounded-lg 
              bg-blue-600 hover:bg-blue-500 
              text-white 
              font-semibold
              shadow-lg shadow-blue-500/30
              transition
            "
          >
            View Code
          </a>

          <span className="text-gray-500 dark:text-gray-300 text-sm">
            💻 GitHub Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
