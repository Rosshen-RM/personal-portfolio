import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import { Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full bg-white/50 dark:bg-black/40 backdrop-blur-lg shadow ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex jusitify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to pink-600 bg-clip-text text-transparent">
          Rosshen R M
        </h1>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="hover:text-red-500 dark:hover:text-red-400"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-red-500 dark:hover:text-red-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-red-500 dark:hover:text-red-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-red-500 dark:hover:text-red-400"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
