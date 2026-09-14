import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  Terminal,
} from "lucide-react";
import SpotlightCard from "../components/ui/SpotlightCard";
import { useToast } from "../components/ui/Toast";
import ScrollReveal from "../components/animations/ScrollReveal";
import TiltCard from "../components/animations/TiltCard";
import { personalInfo, heroRoles, toolkitData } from "../data/portfolioData";

export const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  // Typewriter effect
  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const copyCloneCommand = () => {
    navigator.clipboard.writeText(personalInfo.cloneRepoCommand);
    setCopied(true);
    showToast("Repository clone command copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none -z-10" />

      {/* Cyber Neon Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0afcdb]/10 blur-[140px] rounded-full -z-10 pointer-events-none animate-pulse-cyan" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/15 blur-[130px] rounded-full -z-10 pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Telemetry Status Badge */}
        <ScrollReveal direction="down" delay={50}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-black/80 border border-cyan-500/40 dark:border-[#0afcdb]/40 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(10,252,219,0.2)] animate-float">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-[#0afcdb] animate-ping" />
            <span>SYS // AVAILABLE FOR OPPORTUNITIES</span>
            <Sparkles size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
          </div>
        </ScrollReveal>

        {/* Hero Title */}
        <ScrollReveal direction="up" delay={100}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white uppercase font-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-gray-200 dark:to-gray-400">
              {personalInfo.name}
            </span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-slate-700 dark:text-gray-300 tracking-normal block mt-2">
              <span className="text-cyan-600 dark:text-[#0afcdb] border-b border-cyan-500/40 dark:border-[#0afcdb]/40 pb-1">
                {displayedText}
              </span>
              <span className="animate-pulse text-cyan-600 dark:text-[#0afcdb]">_</span>
            </span>
          </h1>
        </ScrollReveal>

        {/* Hero Subtitle */}
        <ScrollReveal direction="up" delay={150}>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
            Crafting high-performance web experiences, modernizing legacy enterprise
            applications, and building full-stack platforms with clean code.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 font-mono">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold bg-[#0afcdb] hover:bg-[#38ef7d] text-black shadow-md dark:shadow-[0_0_24px_rgba(10,252,219,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_35px_rgba(10,252,219,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer clip-cyber-button hover:scale-105 active:scale-95 text-xs tracking-wider"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-black/60 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white backdrop-blur-md transition-all duration-300 cursor-pointer clip-cyber-button hover:border-cyan-500 dark:hover:border-[#0afcdb]/60 hover:scale-105 active:scale-95 text-xs tracking-wider shadow-sm"
            >
              GET IN TOUCH
            </a>
          </div>
        </ScrollReveal>

        {/* Interactive Github Terminal with Scanline Frame */}
        <ScrollReveal direction="up" delay={250}>
          <TiltCard maxTilt={3} scale={1.01} className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 dark:border-white/12 bg-black/90 text-gray-100 text-left relative">
              {/* Header HUD Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/95 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0afcdb]" />
                  <span className="text-xs text-gray-400 font-mono ml-2 flex items-center gap-1.5">
                    <Terminal size={12} className="text-[#0afcdb]" />
                    <span>bash ~ rosshen-portfolio</span>
                  </span>
                </div>
                <button
                  onClick={copyCloneCommand}
                  title="Copy to clipboard"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-white/10 hover:bg-[#0afcdb] hover:text-black text-gray-200 transition cursor-pointer border border-white/10"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#0afcdb] font-bold">$</span>
                  <span className="text-gray-200">{personalInfo.cloneRepoCommand}</span>
                </div>
                <div className="text-gray-400 text-xs">
                  &gt; STACK: React 19 • TypeScript • Tailwind CSS • Vite • Spring Boot
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </section>



      {/* ================= TOOLKIT & EXPERTISE ================= */}
      <section id="toolkit" className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            CORE PROTOCOLS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            TECHNICAL DISCIPLINES
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-mono">
            How I architect, engineer, and deliver resilient enterprise software
          </p>
        </ScrollReveal>

        {/* Equal-Height Grid Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {toolkitData.map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx * 75} className="flex h-full">
              <TiltCard maxTilt={4} scale={1.015} className="w-full h-full">
                <SpotlightCard
                  spotlightColor="rgba(10, 252, 219, 0.18)"
                  className="p-8 group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-xs group-hover:border-cyan-500/50 dark:group-hover:border-[#0afcdb]/50 group-hover:scale-110 transition-all">
                      <item.icon size={24} className="text-cyan-600 dark:text-[#0afcdb]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-mono">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/8 mt-auto font-mono">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 group-hover:border-cyan-500/30 dark:group-hover:border-[#0afcdb]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
