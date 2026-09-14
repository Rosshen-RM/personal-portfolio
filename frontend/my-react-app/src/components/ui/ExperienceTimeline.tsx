import React, { useState } from "react";
import { Briefcase, Calendar, CheckCircle2, GraduationCap, Building2 } from "lucide-react";
import { experienceData, educationData } from "../../data/portfolioData";
import ScrollReveal from "../animations/ScrollReveal";

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <div className="mt-20 sm:mt-28">
      <ScrollReveal direction="up" className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          CAREER &amp; ACADEMIC BACKGROUND
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          Experience &amp; Education
        </h3>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
          Professional development track record at Saazvat Technologies and engineering education.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 mt-6 font-mono text-xs">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "experience"
                ? "bg-[#0afcdb] text-black shadow-md"
                : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Briefcase size={14} />
            <span>WORK EXPERIENCE (1+ YEAR)</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "education"
                ? "bg-[#0afcdb] text-black shadow-md"
                : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <GraduationCap size={15} />
            <span>EDUCATION &amp; DEGREES</span>
          </button>
        </div>
      </ScrollReveal>

      {/* Experience Timeline */}
      {activeTab === "experience" && (
        <div className="max-w-4xl mx-auto relative border-l-2 border-cyan-500/40 dark:border-[#0afcdb]/30 ml-4 sm:ml-8 md:ml-auto space-y-10 animate-fadeIn">
          {experienceData.map((exp, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 100}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500 dark:bg-[#0afcdb] border-4 border-slate-100 dark:border-black shadow-md dark:shadow-[0_0_12px_rgba(10,252,219,0.8)] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#070c14] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-[#0afcdb]/10 text-cyan-700 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/30 mb-2">
                      <Building2 size={12} />
                      Saazvat Technologies Private Limited
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-600 dark:text-gray-300 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 self-start sm:self-auto">
                    <Calendar size={13} className="text-cyan-600 dark:text-[#0afcdb]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {exp.description}
                </p>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-200 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-cyan-600 dark:text-[#0afcdb] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/8 font-mono">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Education Timeline */}
      {activeTab === "education" && (
        <div className="max-w-4xl mx-auto relative border-l-2 border-cyan-500/40 dark:border-[#0afcdb]/30 ml-4 sm:ml-8 md:ml-auto space-y-8 animate-fadeIn">
          {educationData.map((edu, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 100}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500 dark:bg-[#0afcdb] border-4 border-slate-100 dark:border-black shadow-md dark:shadow-[0_0_12px_rgba(10,252,219,0.8)] group-hover:scale-125 transition-transform" />

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#070c14] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0afcdb]/15 text-cyan-700 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/30">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-cyan-700 dark:text-[#0afcdb] mb-2 font-mono">
                  {edu.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-normal">
                  {edu.highlights}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceTimeline;
