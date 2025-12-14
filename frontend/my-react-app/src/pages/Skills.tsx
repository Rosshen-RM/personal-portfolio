import React from "react";

const skills = [
    { name: "HTML5", level: 100, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "React", level: 80, icon: "⚛️" },
    { name: "Git", level: 85, icon: "🔧" },
    { name: "Responsive Design", level: 90, icon: "📱" },
];

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-gray-50 dark:bg-(--dark-bg)"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    My Skills
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
                    Technologies and tools I use to bring products to life
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="
                bg-white dark:bg-(--dark-card)
                p-8 rounded-xl
                shadow-lg dark:shadow-black/40
                transition-transform hover:-translate-y-1
              "
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl">
                                {skill.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-xl font-bold mb-4">
                                {skill.name}
                            </h3>

                            {/* Progress bar */}
                            <div className="w-full h-2 bg-gray-200 dark:bg-blue-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-700"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
