import React, { useContext } from "react";
import { Moon, Sun, Search } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import { personalInfo } from "../../data/portfolioData";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 transition-all duration-300 bg-white/75 dark:bg-black/65 backdrop-blur-md border-b border-slate-200/80 dark:border-white/8 text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo with Cyber Hex Icon */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group font-mono font-bold text-base sm:text-lg tracking-wider"
        >
          <div className="relative w-8 h-8 rounded-lg bg-slate-100 dark:bg-black border border-cyan-500 dark:border-[#0afcdb]/60 flex items-center justify-center text-cyan-600 dark:text-[#0afcdb] text-xs font-black shadow-[0_0_12px_rgba(10,252,219,0.3)] group-hover:scale-110 transition-all clip-cyber-button">
            <span>R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 dark:text-white text-sm tracking-[0.15em] uppercase font-bold group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono tracking-widest hidden sm:inline">
              DEV // FULL-STACK
            </span>
          </div>
        </a>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Quick Command Palette Launcher */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-xs font-mono transition cursor-pointer border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-[#0afcdb]/50 shadow-xs"
            >
              <Search size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
              <span className="hidden sm:inline">CMD PALETTE</span>
              <kbd className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-black/60 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-gray-400">
                Ctrl K
              </kbd>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-[#0afcdb]/50 transition cursor-pointer"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? (
              <Moon size={16} className="text-slate-700" />
            ) : (
              <Sun size={16} className="text-[#0afcdb]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
