import React, { useEffect, useRef } from "react";
import { Brush, Code2, Zap, Smartphone } from "lucide-react";

const toolkit = [
    {
        icon: Brush,
        title: "Modern UI Design",
        desc: "Creating beautiful, responsive interfaces that look great on any device using the latest design trends.",
    },
    {
        icon: Code2,
        title: "Clean Code",
        desc: "Writing maintainable, efficient code following best practices and modern development standards.",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        desc: "Ensuring fast load times and smooth experiences through efficient code and asset optimization.",
    },
    {
        icon: Smartphone,
        title: "Responsive Development",
        desc: "Building websites that work flawlessly across all screen sizes, from phones to large displays.",
    },
];

const Home: React.FC = () => {
    const terminalRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const el = terminalRef.current;
        if (!el) return;

        const text =
            "git clone https://github.com/AsmrProg-YT/Personal-Portfolios.git";
        let i = 0;

        el.textContent = "";
        const timer = setInterval(() => {
            el.textContent += text[i] || "";
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
                className="relative min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-linear-to-br  from-blue-200/40 via-white to-purple-200/40 dark:from-blue-900/30 dark:via-black dark:to-purple-900/30" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />


                </div>

                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        The{" "}
                        <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">React Developer
                        </span>{" "}
                        For The Web
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
                        Creating{" "}
                        <span className="text-gray-200 font-semibold">
                            high-quality web applications
                        </span>{" "}
                        with modern tools and best practices for exceptional user
                        experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition"
                        >
                            View Projects
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-3 rounded-lg font-semibold bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur transition"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Terminal */}
                    <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl bg-black/60 backdrop-blur border border-white/10">
                        <div className="flex items-center gap-2 px-4 py-3 bg-black/70">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="px-6 py-5 font-mono text-left text-sm md:text-base">
                            <span className="text-green-400">$</span>{" "}
                            <span ref={terminalRef} />
                            <span className="animate-pulse">▌</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TOOLKIT ================= */}
            <section className="py-10 dark:bg-black dark:text-white ">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        What's in my Toolkit
                    </h2>
                    <p className="text-lg text-gray-400 text-center mb-16">
                        Everything needed to build great products on the web.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {toolkit.map((item) => (
                            <div
                                key={item.title}
                                className="
                  bg-black/70 backdrop-blur
                  border border-white/10
                  rounded-xl p-8
                  shadow-lg shadow-black/50
                  transition-transform hover:-translate-y-1
                "
                            >
                                <div className="w-12 h-12 mb-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <item.icon size={22} />
                                </div>

                                <h3 className="text-xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
