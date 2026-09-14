import React, { useState, useMemo, useRef, useEffect } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";
import type { ProjectData } from "../types/portfolio.types";
import { projectsData } from "../data/portfolioData";
import ScrollReveal from "../components/animations/ScrollReveal";
import {
  Sparkles,
  Search,
  LayoutGrid,
  Columns3,
  X,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = ["All", "Modernization", "Full Stack", "Frontend"];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"horizontal" | "grid">("horizontal");
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectData | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle horizontal scroll position update
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.75));
    if (newIndex >= 0 && newIndex < filteredProjects.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const children = sliderRef.current.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    } else if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (activeIndex < filteredProjects.length - 1) {
      scrollToSlide(activeIndex + 1);
    } else if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  // Reset slider scroll position when filter changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="py-28 bg-slate-50/60 dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-[#0afcdb]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/20 dark:border-[#0afcdb]/20 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold tracking-widest uppercase mb-4">
            <Sparkles size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
            <span>SELECTED WORK // 2024 — 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-white uppercase">
            Featured Case Studies &amp;{" "}
            <span className="text-cyan-600 dark:text-[#0afcdb]">
              Projects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Swipe or scroll horizontally to explore high-performance web platforms and legacy modernization conversions.
          </p>
        </ScrollReveal>

        {/* ================= CONTROLS: Filter Pills, Search, View Mode ================= */}
        <ScrollReveal
          direction="up"
          delay={100}
          className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#070c14]/90 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl backdrop-blur-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0afcdb] text-black font-bold shadow-md dark:shadow-[0_0_15px_rgba(10,252,219,0.4)] scale-102"
                      : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-[#0afcdb]/40"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                      isActive
                        ? "bg-black text-[#0afcdb]"
                        : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search Input & View Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="relative flex-1 sm:w-60">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-600 dark:text-[#0afcdb]"
              />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 dark:bg-[#03060c] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none focus:border-cyan-500 dark:focus:border-[#0afcdb] focus:shadow-[0_0_12px_rgba(10,252,219,0.2)] transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10">
              <button
                onClick={() => setViewMode("horizontal")}
                title="Horizontal Slider View"
                aria-label="Horizontal Slider View"
                className={`p-2 rounded-lg transition cursor-pointer flex items-center gap-1 text-xs font-mono font-bold ${
                  viewMode === "horizontal"
                    ? "bg-[#0afcdb] text-black shadow-xs"
                    : "text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Columns3 size={14} />
                <span className="hidden sm:inline">Slider</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                title="Grid Matrix View"
                aria-label="Grid Matrix View"
                className={`p-2 rounded-lg transition cursor-pointer flex items-center gap-1 text-xs font-mono font-bold ${
                  viewMode === "grid"
                    ? "bg-[#0afcdb] text-black shadow-xs"
                    : "text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Navigation Header with Prev / Next Arrow triggers */}
        {viewMode === "horizontal" && filteredProjects.length > 0 && (
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-gray-400">
              <span className="text-cyan-700 dark:text-[#0afcdb] font-bold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span>{String(filteredProjects.length).padStart(2, "0")}</span>
              <span className="hidden sm:inline-block text-slate-400 dark:text-gray-600 ml-2">
                • Scroll left / right or swipe
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#070c14] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 text-slate-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-[#0afcdb] flex items-center justify-center transition shadow-sm disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                disabled={activeIndex === filteredProjects.length - 1}
                aria-label="Next project"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#070c14] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 text-slate-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-[#0afcdb] flex items-center justify-center transition shadow-sm disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* ================= PROJECTS DISPLAY ================= */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-white/50 dark:bg-black/40 font-mono text-slate-500 dark:text-gray-400">
            <Code2 size={36} className="mx-auto mb-3 text-cyan-600 dark:text-[#0afcdb] opacity-60" />
            <p className="text-sm font-bold uppercase tracking-wider mb-2">
              No matching projects for "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 text-xs text-cyan-600 dark:text-[#0afcdb] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : viewMode === "horizontal" ? (
          /* ================= HORIZONTAL LEFT-TO-RIGHT SLIDER TRACK ================= */
          <div>
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-2 scroll-smooth no-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="w-[90vw] sm:w-[580px] lg:w-[740px] shrink-0 snap-center flex"
                >
                  <ProjectCard
                    project={project}
                    index={idx}
                    onOpenModal={(proj) => setActiveModalProject(proj)}
                    featuredLayout={true}
                  />
                </div>
              ))}
            </div>

            {/* Interactive Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {filteredProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 bg-[#0afcdb] shadow-[0_0_10px_rgba(10,252,219,0.8)]"
                      : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ================= GRID VIEW ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={idx * 70}
                className="flex h-full"
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onOpenModal={(proj) => setActiveModalProject(proj)}
                  featuredLayout={false}
                />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <ScrollReveal direction="up" delay={200} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/80 dark:bg-[#070c14]/80 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-gray-400 shadow-sm backdrop-blur-md">
            <span>Explore all repository commits, pull requests, and experiment branches on</span>
            <a
              href="https://github.com/Rosshen-RM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-[#0afcdb] hover:underline font-bold inline-flex items-center gap-1"
            >
              GitHub / Rosshen-RM <Sparkles size={12} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default Projects;
