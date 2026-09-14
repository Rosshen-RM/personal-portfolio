import React from "react";
import { Home, User, Cpu, FolderGit2, Mail } from "lucide-react";
import { navLinks } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export const BottomNavDock: React.FC = () => {
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const { activeSection } = useScrollSpy(sectionIds, 160);

  const getIcon = (id: string, active: boolean) => {
    const className = `transition-all duration-300 ${
      active
        ? "text-cyan-600 dark:text-[#0afcdb] drop-shadow-[0_0_8px_rgba(10,252,219,0.6)]"
        : "text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"
    }`;
    switch (id) {
      case "home":
        return <Home size={16} className={className} />;
      case "about":
        return <User size={16} className={className} />;
      case "skills":
        return <Cpu size={16} className={className} />;
      case "projects":
        return <FolderGit2 size={16} className={className} />;
      case "contact":
        return <Mail size={16} className={className} />;
      default:
        return <Home size={16} className={className} />;
    }
  };

  return (
    <nav
      aria-label="Bottom section navigation dock"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center pointer-events-auto"
    >
      <div className="relative flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-full border border-slate-300/80 dark:border-white/15 bg-white/80 dark:bg-black/75 backdrop-blur-2xl shadow-xl dark:shadow-[0_10px_35px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] transition-colors duration-300">
        {/* Top subtle hairline glow */}
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-[#0afcdb]/50 to-transparent" />

        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-mono font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
                isActive
                  ? "text-slate-900 dark:text-white bg-slate-200/80 dark:bg-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(10,252,219,0.25)] font-bold"
                  : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {/* Active illuminated pill border */}
              {isActive && (
                <span className="absolute inset-0 rounded-full border border-cyan-500/50 dark:border-[#0afcdb]/40 pointer-events-none" />
              )}

              {getIcon(sectionId, isActive)}
              <span className="hidden md:inline text-[11px] font-bold">{link.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavDock;

