import React, { useEffect, useRef } from "react";
import { Brush, Code2, Zap, Smartphone } from "lucide-react";

const toolkit = [
  {
    icon: Brush,
    title: "Modern UI Design",
    desc: "Experience in building scalable web applications using React, Tailwind CSS, Spring Boot, REST APIs and PostgreSQL",
    gradient: "from-blue-100 to-white dark:from-white/10 dark:to-white/5",
  },
  {
    icon: Code2,
    title: "Legacy Modernization",
    desc: "Converted complex Excel & Desktop applications into modern web platforms improving performance & usability",
    gradient: "from-purple-100 to-white dark:from-white/10 dark:to-white/5",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Ensuring fast load times and smooth experiences through efficient code and asset optimization.",
    gradient: "from-yellow-100 to-white dark:from-white/10 dark:to-white/5",
  },
  {
    icon: Smartphone,
    title: "Collaboration & Quality",
    desc: "Experience working with teams, writing clean code, reviews, version control and best practices.",
    gradient: "from-green-100 to-white dark:from-white/10 dark:to-white/5",
  },
];

const Home: React.FC = () => {
  const terminalRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const git = terminalRef.current;
    if (!git) return;

    const text = "git clone https://github.com/Rosshen-RM/";
    let i = 0;

   git.textContent = "";
    const timer = setInterval(() => {
      git.textContent += text[i] || "";
      i++;
      if (i > text.length) clearInterval(timer);
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="
          relative min-h-screen
          bg-white text-black
         dark:bg-[#050816]   dark:text-white
          overflow-hidden flex flex-col
          pt-28 md:pt-36 pb-20
        "
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            The{" "}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              React Developer
            </span>{" "}
            For The Web
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Creating{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              high-quality web applications
            </span>{" "}
            with modern tools and best practices for exceptional user
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="
                px-8 py-3 rounded-lg font-semibold
                bg-blue-600 hover:bg-blue-500
                shadow-lg shadow-blue-500/30
                transition
              "
            >
              View Projects
            </a>

            <a
              href="#about"
              className="
                px-8 py-3 rounded-lg font-semibold
                border border-black/80 dark:border-white/80
                bg-white/10 dark:bg-white/5
                hover:bg-black/5 dark:hover:bg-white/10
                backdrop-blur transition
              "
            >
              Learn More
            </a>
          </div>

          {/* Github Terminal */}
          <div
            className="
              max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl
              bg-gray-200 dark:bg-black/60
              border border-black/10 dark:border-white/10
            "
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-300 dark:bg-black/70">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="px-6 py-5 font-mono text-left text-sm md:text-base">
              <span className="text-green-600 dark:text-green-400">$</span>{" "}
              <span ref={terminalRef} />
              <span className="animate-pulse">▌</span>
            </div>
          </div>
        </div>

        {/* ================= TOOLKIT ================= */}
        
          <div className="max-w-7xl mx-auto px-6 mt-40  ">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              What's in my Toolkit
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
              I build scalable, reliable and user–focused web applications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {toolkit.map((item) => (
                <div
                  key={item.title}
                  className={`
                  rounded-3xl p-8 shadow-xl border border-gray-200
                  bg-linear-to-br ${item.gradient}
                  hover:-translate-y-1 transition-all duration-300
                  dark:border-white/10 dark:shadow-black/50
                `}
                >
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-white/70 dark:bg-white/10 flex items-center justify-center shadow mb-6">
                    <item.icon
                      size={28}
                      className="text-blue-500 dark:text-blue-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <button
                    className="
                    px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500
                    text-white font-semibold shadow-lg shadow-blue-500/30 transition
                  "
                  >
                    Know More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </>
  );
};

export default Home;
