import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
        py-24 
        bg-gray-50 
        text-black
        dark:bg-(--dark-bg)
        dark:text-white
        relative
      "
    >
      {/* Background Glow */}
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

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              About Me
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate Front-End Developer with hands-on experience in
              building scalable web applications using React, Java, and Spring
              Boot.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I have worked on modernizing legacy applications, converting Excel
              and desktop platforms into high-performance web applications like
              HVAC A2L Calculator and Sound Analyzer. I focus on writing clean,
              maintainable code while ensuring performance, security and
              usability.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-10">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good book.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="
                  px-8 py-3 rounded-lg 
                  bg-blue-600 hover:bg-blue-500 
                  shadow-lg shadow-blue-500/30 
                  font-semibold transition
                  text-white
                "
              >
                Contact Me
              </a>

              <a
                href="src\assets\Rosshen CV.pdf.pdf"
                className="
                  px-8 py-3 rounded-lg 
                  border border-gray-300
                  bg-white hover:bg-gray-100
                  dark:border-white/20
                  dark:bg-white/5 
                  dark:hover:bg-white/10
                  backdrop-blur
                  font-semibold
                  transition
                "
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div
              className="
                w-72 h-72 
                rounded-full overflow-hidden 
                border-4 border-gray-300
                dark:border-white/20
                shadow-[0_0_40px_rgba(0,0,0,0.6)]
              "
            >
              <img
                src="/src/assets/rosshen.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
