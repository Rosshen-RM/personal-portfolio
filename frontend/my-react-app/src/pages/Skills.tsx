import React, { useState } from "react";
import { Sparkles, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { skillCategoriesData } from "../data/portfolioData";
import ScrollReveal from "../components/animations/ScrollReveal";
import TiltCard from "../components/animations/TiltCard";

export const Skills: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("frontend");

  const filteredCategories =
    selectedTab === "all"
      ? skillCategoriesData
      : skillCategoriesData.filter((c) => c.id === selectedTab);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-black/60 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            TECHNICAL MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 uppercase">
            SKILLS &amp; CAPABILITIES
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-mono">
            Categorized production technologies and enterprise tools
          </p>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal direction="up" delay={100} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 font-mono">
          <button
            onClick={() => setSelectedTab("all")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer clip-cyber-button ${
              selectedTab === "all"
                ? "bg-[#0afcdb] text-black shadow-md dark:shadow-[0_0_20px_rgba(10,252,219,0.35)]"
                : "bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-[#0afcdb]/40 hover:bg-slate-100 dark:hover:bg-white/10"
            }`}
          >
            ALL DISCIPLINES
          </button>
          {skillCategoriesData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedTab(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer clip-cyber-button ${
                selectedTab === cat.id
                  ? "bg-[#0afcdb] text-black shadow-md dark:shadow-[0_0_20px_rgba(10,252,219,0.35)]"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-[#0afcdb]/40 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </ScrollReveal>

        {/* Categories Grid - Equal Height Cards with Pinned Footers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCategories.map((cat, idx) => {
            const isExpanded = expandedId === cat.id;

            return (
              <ScrollReveal
                key={cat.id}
                direction="up"
                delay={idx * 100}
                className="flex h-full"
              >
                <TiltCard maxTilt={4} scale={1.015} className="w-full h-full">
                  <div className="h-full rounded-2xl bg-white dark:bg-[#05090e]/80 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 shadow-sm dark:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                    {/* Gradient Top Line */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 dark:from-[#0afcdb] via-indigo-500 to-cyan-500 dark:to-[#0afcdb]" />

                    <div className="p-6 sm:p-7">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                          <cat.icon size={24} className="text-cyan-600 dark:text-[#0afcdb]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                            {cat.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 dark:text-gray-500 font-mono">
                            {cat.skills.length} core technologies
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                        {cat.desc}
                      </p>

                      {/* Skills Grid */}
                      <div className="flex flex-wrap gap-2 mb-6 min-h-[5rem] font-mono">
                        {cat.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-gray-200 hover:border-cyan-500 dark:hover:border-[#0afcdb]/50 hover:text-cyan-600 dark:hover:text-[#0afcdb] transition-all"
                          >
                            <Sparkles size={10} className="text-cyan-600 dark:text-[#0afcdb]" />
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Accordion Experience Details */}
                      {isExpanded && (
                        <div className="pt-4 border-t border-slate-200 dark:border-white/8 space-y-2.5 animate-fadeIn">
                          <div className="text-[10px] font-mono font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                            APPLIED IMPLEMENTATION
                          </div>
                          {cat.highlights.map((point, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300 leading-relaxed font-sans"
                            >
                              <CheckCircle
                                size={14}
                                className="text-cyan-600 dark:text-[#0afcdb] shrink-0 mt-0.5"
                              />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer Action (Pinned to Bottom) */}
                    <div className="p-4 bg-slate-50 dark:bg-black/40 border-t border-slate-200 dark:border-white/8 flex justify-end mt-auto font-mono">
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : cat.id)
                        }
                        className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-[#0afcdb] hover:underline cursor-pointer"
                      >
                        <span>
                          {isExpanded ? "HIDE DETAILS" : "VIEW DETAILS"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp size={13} />
                        ) : (
                          <ChevronDown size={13} />
                        )}
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
