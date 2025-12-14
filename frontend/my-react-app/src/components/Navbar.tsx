import React, { useEffect, useState, useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useContext(ThemeContext);

  useEffect(() => {
    const handle = () => setOpen(false);
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm">


      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-xl font-extrabold mr-2">
              ROSSHEN RM
            </a>
            <span className="text-primary text-2xl">●</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#features" className="hover:text-primary">Showcase</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setOpen(!open)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-300" />
                <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-300" />
                <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-300" />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform ${open ? "translate-x-0" : "translate-x-full"
          } transition-transform bg-white dark:bg-(--dark-card)
`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8 text-2xl">
          <a href="#features" onClick={() => setOpen(false)}>Showcase</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
