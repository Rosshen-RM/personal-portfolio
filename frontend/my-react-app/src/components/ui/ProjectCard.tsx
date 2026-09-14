import React from "react";
import {
  Github,
  ArrowUpRight,
  Sparkles,
  Activity,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import type { ProjectData } from "../../types/portfolio.types";
import SpotlightCard from "./SpotlightCard";
import TiltCard from "../animations/TiltCard";

interface Props {
  project: ProjectData;
  index: number;
  onOpenModal: (project: ProjectData) => void;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<Props> = ({
  project,
  index,
  onOpenModal,
  featuredLayout = false,
}) => {
  const {
    id,
    title,
    desc,
    tagline,
    img,
    tags,
    github,
    category,
    featured,
    metrics,
  } = project;

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <TiltCard maxTilt={featuredLayout ? 2 : 4} scale={1.01} className="w-full">
      <SpotlightCard
        laserBorder={featured}
        spotlightColor="rgba(10, 252, 219, 0.18)"
        className="group w-full rounded-2xl bg-white dark:bg-[#070b12] border border-slate-200 dark:border-white/10 shadow-lg hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 transition-all duration-500"
        contentClassName="w-full"
      >
        {/* ================= CARD TOPBAR: Index, Category & Live Status ================= */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-white/8 bg-slate-50/80 dark:bg-black/40 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="font-bold text-cyan-700 dark:text-[#0afcdb]">
              // {formattedIndex}
            </span>
            <span className="h-3 w-px bg-slate-300 dark:bg-white/20" />
            <span className="text-slate-600 dark:text-gray-400 font-semibold uppercase tracking-wider">
              {category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {featured && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 dark:bg-[#0afcdb]/10 text-cyan-700 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/30">
                <Sparkles size={11} className="animate-pulse" />
                FEATURED
              </span>
            )}
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              DEPLOYED
            </span>
          </div>
        </div>

        {/* ================= MAIN CONTENT BODY ================= */}
        <div
          className={`p-6 sm:p-8 ${
            featuredLayout
              ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              : "flex flex-col gap-6"
          }`}
        >
          {/* Visual Showcase Viewport */}
          <div
            className={`relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 group/image cursor-pointer ${
              featuredLayout ? "lg:col-span-6 order-1 lg:order-2 h-64 sm:h-80 lg:h-96" : "h-56 sm:h-64 w-full"
            }`}
            onClick={() => onOpenModal(project)}
          >
            {img ? (
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover object-center group-hover/image:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              /* High-End Visual Mockup for Projects without direct image assets */
              <div className="w-full h-full bg-linear-to-br from-[#0c1322] via-[#080d16] to-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-25" />
                
                {id === "sound-analyzer" ? (
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/40 flex items-center justify-center mb-4 text-cyan-600 dark:text-[#0afcdb] shadow-[0_0_30px_rgba(10,252,219,0.3)]">
                      <Activity size={32} className="animate-pulse" />
                    </div>
                    {/* Simulated Acoustic Audio Waves */}
                    <div className="flex items-end gap-1.5 h-10 mb-3">
                      {[40, 75, 55, 95, 30, 85, 60, 100, 45, 70, 90, 50, 80].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-1.5 bg-linear-to-t from-indigo-500 to-[#0afcdb] rounded-full opacity-80"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      ACOUSTIC WAVEFORM ENGINE
                    </span>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                      <Cpu size={32} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-600 dark:text-[#0afcdb] mb-2">
                      <span>REACT 19 + TAILWIND V4</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      CREATIVE DEV PORTFOLIO
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

            {/* Hover Action Floating Pill */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-5 py-2.5 rounded-full bg-[#0afcdb] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(10,252,219,0.8)] flex items-center gap-2 transform group-hover/image:scale-105 transition-transform">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>

          {/* Text & Specs Column */}
          <div
            className={`flex flex-col justify-between ${
              featuredLayout ? "lg:col-span-6 order-2 lg:order-1" : ""
            }`}
          >
            <div>
              {/* Project Title */}
              <h3
                onClick={() => onOpenModal(project)}
                className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb] transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>{title}</span>
                <ArrowUpRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-600 dark:text-[#0afcdb] shrink-0"
                />
              </h3>

              {/* Tagline */}
              {tagline && (
                <p className="text-xs sm:text-sm font-mono text-cyan-700 dark:text-[#0afcdb] font-semibold mb-3">
                  {tagline}
                </p>
              )}

              {/* Core Description */}
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                {desc}
              </p>

              {/* Engineering Metrics Highlight */}
              {metrics && metrics.length > 0 && (
                <div className="mb-6 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
                    <span>KEY ARCHITECTURAL IMPACT</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-gray-200">
                    {metrics[0]}
                  </p>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 group-hover:border-cyan-500/30 dark:group-hover:border-[#0afcdb]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/8">
              <button
                onClick={() => onOpenModal(project)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-[#0afcdb] text-black shadow-md hover:shadow-[0_0_20px_rgba(10,252,219,0.5)] hover:scale-102 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight size={14} />
              </button>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Github size={14} />
                <span>CODE</span>
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
};

export default ProjectCard;
