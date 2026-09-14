import React from "react";
import { Download, Mail, CheckCircle } from "lucide-react";
import ExperienceTimeline from "../components/ui/ExperienceTimeline";
import ScrollReveal from "../components/animations/ScrollReveal";
import TiltCard from "../components/animations/TiltCard";
import { personalInfo, quickStats } from "../data/portfolioData";
import rosshenImg from "../assets/rosshen.jpg";
import resumeFile from "../assets/Rosshen CV.pdf.pdf";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-100/50 dark:bg-black/60 text-slate-900 dark:text-white relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Grid: Bio + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Bio & Information (7 Cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                DOSSIER // ABOUT ME
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 uppercase text-slate-900 dark:text-white">
                ENGINEERING HIGH-SPEED{" "}
                <span className="text-cyan-600 dark:text-[#0afcdb] drop-shadow-[0_0_15px_rgba(10,252,219,0.4)]">
                  WEB ARCHITECTURES
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-4 font-sans">
                {personalInfo.bio}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed mb-6 font-sans">
                I emphasize clean modular code, intuitive UI/UX, and maintainable architecture.
                When modernizing applications, I ensure zero downtime transitions, strong type-safety,
                and performance benchmarks that delight users.
              </p>
            </ScrollReveal>

            {/* Quick Stat Pills */}
            <ScrollReveal direction="up" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-mono">
                {quickStats.map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 shadow-xs transition-colors"
                  >
                    <st.icon
                      size={20}
                      className="text-cyan-600 dark:text-[#0afcdb] mb-2"
                    />
                    <div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider">
                      {st.label}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {st.value}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 font-mono">
                <a
                  href={resumeFile}
                  download="Rosshen_RM_CV.pdf"
                  className="px-6 py-3.5 rounded-lg bg-[#0afcdb] hover:bg-[#38ef7d] text-black font-bold shadow-[0_0_20px_rgba(10,252,219,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer clip-cyber-button hover:scale-105 active:scale-95 text-xs tracking-wider"
                >
                  <Download size={16} />
                  <span>DOWNLOAD CV.PDF</span>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-black/60 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs clip-cyber-button hover:border-cyan-500 dark:hover:border-[#0afcdb]/60 hover:scale-105 active:scale-95 text-xs tracking-wider"
                >
                  <Mail size={16} />
                  <span>INITIATE CONTACT</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Avatar with 3D Tilt and glowing cyber frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={150}>
              <TiltCard maxTilt={6} scale={1.02}>
                <div className="relative group">
                  {/* Cyber glowing backlight */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 dark:from-[#0afcdb] via-indigo-600 to-cyan-500 dark:to-[#0afcdb] rounded-3xl blur-xl opacity-30 dark:opacity-40 group-hover:opacity-75 transition duration-500 -z-10" />

                  {/* Image Frame */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/50 dark:border-[#0afcdb]/50 shadow-2xl bg-black clip-cyber-corner">
                    <img
                      src={rosshenImg}
                      alt="Rosshen RM - Front-End Developer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    />
                  </div>

                  {/* Experience badge overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white/95 dark:bg-black/90 border border-slate-200 dark:border-[#0afcdb]/40 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 backdrop-blur-md font-mono">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-[#0afcdb]/10 flex items-center justify-center text-cyan-600 dark:text-[#0afcdb]">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                        SYS STATUS
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        READY TO DEPLOY
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Experience & Projects Highlights Timeline */}
        <ExperienceTimeline />
      </div>
    </section>
  );
};

export default About;
