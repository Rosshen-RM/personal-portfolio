import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export const CyberSidebars: React.FC = () => {
  return (
    <>
      {/* LEFT SIDEBAR: Social Guidance Line (Desktop Only) */}
      <nav
        aria-label="Social media guidance links"
        className="hidden md:flex fixed left-5 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-5"
      >
        {/* Top glowing guideline */}
        <div className="h-16 w-px bg-gradient-to-t from-cyan-500/10 dark:from-[#0afcdb]/5 via-cyan-500/50 dark:via-[#0afcdb]/40 to-transparent" />

        {/* GitHub */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-[#0afcdb] transition-all duration-300 transform hover:scale-125 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
        >
          <FaGithub size={17} />
        </a>

        {/* LinkedIn */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-[#0afcdb] transition-all duration-300 transform hover:scale-125 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
        >
          <FaLinkedin size={17} />
        </a>

        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="Send direct email"
          className="p-2 text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-[#0afcdb] transition-all duration-300 transform hover:scale-125 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
        >
          <Mail size={17} />
        </a>

        {/* Bottom glowing guideline */}
        <div className="h-16 w-px bg-gradient-to-b from-cyan-500/10 dark:from-[#0afcdb]/5 via-cyan-500/50 dark:via-[#0afcdb]/40 to-transparent" />
      </nav>

      {/* RIGHT SIDEBAR: High-Tech Telemetry Metrics (Desktop Only) */}
      <aside
        aria-label="Professional telemetry metrics"
        className="hidden md:flex fixed right-5 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-6 select-none"
      >
        {/* Top guideline */}
        <div className="h-16 w-px bg-gradient-to-b from-slate-300 dark:from-white/5 via-slate-400 dark:via-white/20 to-slate-300 dark:to-white/5" />

        {/* Metric 1: Projects */}
        <div className="flex flex-col items-center justify-center gap-1.5 py-1">
          <span
            className="font-mono text-xs font-bold text-cyan-600 dark:text-[#0afcdb] tracking-tighter"
            style={{ writingMode: "vertical-rl" }}
          >
            10+
          </span>
          <span
            className="font-mono text-[9px] font-semibold text-slate-500 dark:text-gray-500 tracking-[0.25em]"
            style={{ writingMode: "vertical-rl" }}
          >
            PROJ
          </span>
        </div>

        {/* Metric 2: Experience */}
        <div className="flex flex-col items-center justify-center gap-1.5 py-1">
          <span
            className="font-mono text-xs font-bold text-cyan-600 dark:text-[#0afcdb] tracking-tighter"
            style={{ writingMode: "vertical-rl" }}
          >
            2+
          </span>
          <span
            className="font-mono text-[9px] font-semibold text-slate-500 dark:text-gray-500 tracking-[0.25em]"
            style={{ writingMode: "vertical-rl" }}
          >
            EXP
          </span>
        </div>

        {/* Metric 3: Modernization */}
        <div className="flex flex-col items-center justify-center gap-1.5 py-1">
          <span
            className="font-mono text-xs font-bold text-cyan-600 dark:text-[#0afcdb] tracking-tighter"
            style={{ writingMode: "vertical-rl" }}
          >
            100%
          </span>
          <span
            className="font-mono text-[9px] font-semibold text-slate-500 dark:text-gray-500 tracking-[0.25em]"
            style={{ writingMode: "vertical-rl" }}
          >
            MODERN
          </span>
        </div>

        {/* Bottom guideline */}
        <div className="h-16 w-px bg-gradient-to-t from-slate-300 dark:from-white/5 via-slate-400 dark:via-white/20 to-slate-300 dark:to-white/5" />
      </aside>
    </>
  );
};

export default CyberSidebars;

