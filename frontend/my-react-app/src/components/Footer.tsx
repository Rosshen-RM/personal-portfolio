import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Top row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-xl font-extrabold">Rosshen RM</span>
                        <span className="text-primary text-2xl ml-1">●</span>
                    </div>

                    {/* Navigation */}
                    <ul className="flex flex-wrap justify-center gap-6">
                        <li><a href="#features" className="hover:text-primary transition">Showcase</a></li>
                        <li><a href="#about" className="hover:text-primary transition">About</a></li>
                        <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
                        <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
                    </ul>

                    {/* Social */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition">GitHub</a>
                        <a href="#" className="hover:text-primary transition">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition">Twitter</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Rosshen RM Portfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
