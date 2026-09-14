import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Terminal, ShieldCheck, Sparkles } from "lucide-react";
import { navLinks, personalInfo } from "../../data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/90 dark:bg-[#030610] border-t border-slate-200 dark:border-white/10 pt-12 pb-32 text-slate-700 dark:text-gray-300 relative transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#0afcdb]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Cyber Brand Badge */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              className="flex items-center gap-2.5 font-mono font-bold text-base sm:text-lg tracking-wider group"
            >
              <div className="relative w-8 h-8 rounded-lg bg-white dark:bg-black border border-cyan-500 dark:border-[#0afcdb]/60 flex items-center justify-center text-cyan-600 dark:text-[#0afcdb] text-xs font-black shadow-[0_0_12px_rgba(10,252,219,0.3)] group-hover:scale-110 transition-all clip-cyber-button">
                <span>R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 dark:text-white text-sm tracking-[0.15em] uppercase font-bold group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb] transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono tracking-widest">
                  FULL-STACK // MODERNIZATION ENGINEER
                </span>
              </div>
            </a>
          </div>

          {/* Quick Monospace Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 text-xs font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-[#0afcdb] transition-colors duration-200"
                >
                  // {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Uplinks */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-black dark:hover:text-[#0afcdb] hover:border-cyan-500 dark:hover:border-[#0afcdb]/60 transition-all shadow-xs cursor-pointer hover:scale-110 active:scale-95"
            >
              <FaGithub size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-[#0077b5] dark:hover:text-[#0afcdb] hover:border-cyan-500 dark:hover:border-[#0afcdb]/60 transition-all shadow-xs cursor-pointer hover:scale-110 active:scale-95"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>

        {/* Telemetry Status Bar */}
        <div className="py-4 px-5 rounded-xl bg-white/70 dark:bg-[#0a0f18]/80 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono mb-8">
          <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>SECURITY: AES_256 // ZERO TRUST ARCHITECTURE</span>
          </div>

          <div className="flex items-center gap-2 text-cyan-600 dark:text-[#0afcdb]">
            <Terminal size={13} />
            <span>SYS_STATUS: ONLINE // IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Bottom copyright & tech stack bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-slate-600 dark:text-gray-400">
            <span>Engineered with</span>
            <Sparkles size={13} className="text-cyan-500 dark:text-[#0afcdb]" />
            <span>React 19, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

