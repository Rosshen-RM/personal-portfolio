import React, { useEffect, useState } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";
import type { ProjectData } from "../../types/portfolio.types";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "stack">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#070b12] border border-slate-300 dark:border-[#0afcdb]/40 rounded-2xl shadow-[0_0_50px_rgba(10,252,219,0.15)] overflow-hidden z-10 flex flex-col clip-cyber-corner">
        {/* Top HUD Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-100 dark:bg-black/95 border-b border-slate-200 dark:border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-[#0afcdb]">
            <Terminal size={14} />
            <span className="font-bold text-slate-900 dark:text-white uppercase">
              DOSSIER // {project.id}
            </span>
            <span className="hidden sm:inline text-slate-500 dark:text-gray-500">
              v1.0.4-LTS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 dark:bg-[#0afcdb]/10 text-cyan-700 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/40">
              {project.category}
            </span>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Modal Banner / Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-black shrink-0 border-b border-slate-200 dark:border-white/10">
            {project.img ? (
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div
                className={`w-full h-full bg-linear-to-br ${
                  project.fallbackGradient || "from-blue-900 via-indigo-950 to-black"
                } flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-cyber-grid opacity-40" />
                <Cpu size={64} className="text-cyan-500/40 dark:text-[#0afcdb]/40" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 font-mono">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
                <Sparkles size={12} />
                <span>SPECIFICATION BLUEPRINT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/40 px-6 font-mono text-xs font-bold">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-3 px-4 border-b-2 transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "border-cyan-500 dark:border-[#0afcdb] text-cyan-700 dark:text-[#0afcdb]"
                  : "border-transparent text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              // 01.OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`py-3 px-4 border-b-2 transition-all cursor-pointer ${
                activeTab === "features"
                  ? "border-cyan-500 dark:border-[#0afcdb] text-cyan-700 dark:text-[#0afcdb]"
                  : "border-transparent text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              // 02.DELIVERABLES
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`py-3 px-4 border-b-2 transition-all cursor-pointer ${
                activeTab === "stack"
                  ? "border-cyan-500 dark:border-[#0afcdb] text-cyan-700 dark:text-[#0afcdb]"
                  : "border-transparent text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              // 03.STACK_&amp;_METRICS
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {activeTab === "overview" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-xl bg-cyan-500/5 dark:bg-[#0afcdb]/5 border border-cyan-500/20 dark:border-[#0afcdb]/20">
                  <p className="text-sm sm:text-base text-slate-800 dark:text-gray-200 font-medium leading-relaxed font-sans">
                    {project.tagline}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Activity size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
                    <span>ENGINEERING CONTEXT</span>
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-sans">
                    {project.longDesc}
                  </p>
                </div>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                      <Layers size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
                      <span>KEY PERFORMANCE METRICS</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-gray-200 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#0afcdb]" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                  IMPLEMENTED FEATURES &amp; CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 dark:text-gray-200 bg-slate-50 dark:bg-white/5 p-3.5 rounded-xl border border-slate-200 dark:border-white/8 font-sans"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-cyan-600 dark:text-[#0afcdb] shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "stack" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                    PRODUCTION TECHNOLOGIES &amp; PACKAGES
                  </h4>
                  <div className="flex flex-wrap gap-2 font-mono">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 text-cyan-700 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-gray-400">
                  <div className="flex items-center gap-2 mb-1 text-slate-900 dark:text-white font-bold">
                    <Terminal size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
                    <span>REPRODUCIBILITY &amp; RUNTIME</span>
                  </div>
                  <p>
                    Full source repository includes documentation, reproducible seed scripts, and isolated module testing setups.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-5 bg-slate-50 dark:bg-black/90 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-3 justify-between items-center font-mono">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-[#0afcdb] text-white dark:text-black font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer clip-cyber-button"
          >
            <Github size={15} />
            <span>ACCESS REPOSITORY // GITHUB</span>
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-cyan-500 transition flex items-center gap-2 cursor-pointer clip-cyber-button"
            >
              <ExternalLink size={15} />
              <span>LIVE TRANSMISSION</span>
            </a>
          ) : (
            <span className="text-[11px] text-slate-500 dark:text-gray-500">
              DEPLOYMENT: INTERNAL ENTERPRISE PLATFORM
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;


