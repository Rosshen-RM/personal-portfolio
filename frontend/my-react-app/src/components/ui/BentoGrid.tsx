import React, { useState, useEffect } from "react";
import {
  Clock,
  Zap,
  Cpu,
  Sparkles,
  TrendingUp,
  Sliders,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "../animations/ScrollReveal";
import AnimatedCounter from "../animations/AnimatedCounter";

export const BentoGrid: React.FC = () => {
  // Live IST Clock state
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mini A2L Calculator state
  const [roomArea, setRoomArea] = useState<number>(35); // m2
  const [refrigerantCharge, setRefrigerantCharge] = useState<number>(1.8); // kg

  // Estimated A2L safety metric
  const safetyThreshold = (roomArea * 0.061).toFixed(2);
  const isSafe = refrigerantCharge <= parseFloat(safetyThreshold) * 1.5;

  const techStack = [
    { name: "React 19", role: "UI Engine", color: "text-[#0afcdb]" },
    { name: "TypeScript", role: "Type Safety", color: "text-blue-400" },
    { name: "Spring Boot", role: "REST Backend", color: "text-emerald-400" },
    { name: "PostgreSQL", role: "Persistent DB", color: "text-indigo-400" },
    { name: "Tailwind CSS", role: "Design Tokens", color: "text-teal-300" },
    { name: "Vite", role: "Bundler", color: "text-purple-400" },
  ];

  return (
    <div className="mt-28">
      {/* Section Header */}
      <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          TELEMETRY // DASHBOARD
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          SYSTEM STATUS &amp; METRICS
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-mono">
          Live timezone clock, modernization impact, interactive demo runner, and architecture
        </p>
      </ScrollReveal>

      {/* Bento Grid Container - Harmonized 12-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* TILE 1: Live IST Timezone & Collaboration (8 Cols) */}
        <ScrollReveal direction="up" delay={50} className="md:col-span-8 flex">
          <SpotlightCard className="w-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  <span>ONLINE // AVAILABLE FOR HIRE</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400 font-mono">
                  <Clock size={14} className="text-cyan-600 dark:text-[#0afcdb]" />
                  <span>INDIA (IST UTC+5:30)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                  GLOBAL COLLABORATION
                </h3>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-600 dark:text-[#0afcdb] drop-shadow-[0_0_12px_rgba(10,252,219,0.4)]">
                  {timeStr || "12:00:00 PM"}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                Engineered for distributed asynchronous teams. Available for full-stack engineering,
                contract modernization, and high-performance React architectures.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 dark:border-white/8 mt-auto font-mono">
              <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                <div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider">Turnaround</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">&lt; 24h Response</div>
              </div>
              <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                <div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider">Deployment</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Remote / Onsite</div>
              </div>
              <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5 col-span-2 sm:col-span-1">
                <div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider">Status</div>
                <div className="text-sm font-bold text-cyan-600 dark:text-[#0afcdb]">Immediate</div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* TILE 2: Legacy Modernization Impact Metric (4 Cols) */}
        <ScrollReveal direction="up" delay={150} className="md:col-span-4 flex">
          <SpotlightCard className="w-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-[#0afcdb]/10 text-cyan-600 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/30 flex items-center justify-center mb-6">
                <TrendingUp size={20} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-mono">
                MODERNIZATION METRIC
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                Transforming sluggish desktop &amp; Excel calculation tools into web apps.
              </p>

              <div className="space-y-3 font-mono">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-600 dark:text-gray-400">Calculation Speed</span>
                    <span className="text-cyan-600 dark:text-[#0afcdb] font-bold">
                      <AnimatedCounter end={10} suffix="x Faster" />
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-black rounded-full overflow-hidden border border-slate-300 dark:border-white/10">
                    <div className="w-[95%] h-full bg-cyan-500 dark:bg-[#0afcdb] rounded-full shadow-[0_0_8px_rgba(10,252,219,0.8)]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-600 dark:text-gray-400">Client Installation</span>
                    <span className="text-cyan-600 dark:text-[#0afcdb] font-bold">0 mins (Instant)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-black rounded-full overflow-hidden border border-slate-300 dark:border-white/10">
                    <div className="w-[100%] h-full bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/8 flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 font-mono">
              <Zap size={14} className="text-amber-500" />
              <span>Zero client installation footprint</span>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* TILE 3: Interactive Live A2L Calculator Mini-Runner (6 Cols) */}
        <ScrollReveal direction="up" delay={200} className="md:col-span-6 flex">
          <SpotlightCard
            laserBorder
            spotlightColor="rgba(10, 252, 219, 0.25)"
            className="w-full p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-[#0afcdb]/10 text-cyan-600 dark:text-[#0afcdb] border border-cyan-500/30 dark:border-[#0afcdb]/30 flex items-center justify-center">
                    <Sliders size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                      A2L SIMULATOR // RUNNER
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                      Live formula evaluation demo
                    </p>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${
                    isSafe
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                  }`}
                >
                  {isSafe ? "STATUS: SAFE ✓" : "ALERT: REVIEW"}
                </span>
              </div>

              <div className="space-y-4 my-5 bg-slate-50 dark:bg-black/60 p-4 rounded-xl border border-slate-200 dark:border-white/10 font-mono">
                {/* Room Area Slider */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-gray-300 mb-1">
                    <span>Room Volume / Area:</span>
                    <span className="font-bold text-cyan-600 dark:text-[#0afcdb]">
                      {roomArea} m²
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    value={roomArea}
                    onChange={(e) => setRoomArea(Number(e.target.value))}
                    className="w-full accent-cyan-500 dark:accent-[#0afcdb] cursor-pointer h-1.5 bg-slate-200 dark:bg-gray-800 rounded-lg"
                  />
                </div>

                {/* Refrigerant Charge Slider */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-gray-300 mb-1">
                    <span>Refrigerant Charge:</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      {refrigerantCharge} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="6.0"
                    step="0.1"
                    value={refrigerantCharge}
                    onChange={(e) => setRefrigerantCharge(Number(e.target.value))}
                    className="w-full accent-indigo-500 dark:accent-indigo-400 cursor-pointer h-1.5 bg-slate-200 dark:bg-gray-800 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/8 flex items-center justify-between text-xs mt-auto font-mono">
              <span className="text-slate-600 dark:text-gray-400">
                Max Allowable Limit: <strong className="text-slate-900 dark:text-white">{safetyThreshold} kg</strong>
              </span>
              <span className="text-cyan-600 dark:text-[#0afcdb] font-semibold">
                React + TS Engine
              </span>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* TILE 4: Tech Stack Radar & Principles (6 Cols) */}
        <ScrollReveal direction="up" delay={250} className="md:col-span-6 flex">
          <SpotlightCard className="w-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                  <Cpu size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                    ARCHITECTURE RADAR
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                    Production stack &amp; protocols
                  </p>
                </div>
              </div>

              {/* Grid of tech tags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-4 font-mono">
                {techStack.map((t) => (
                  <div
                    key={t.name}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 flex flex-col hover:border-cyan-500/30 dark:hover:border-[#0afcdb]/30 transition-colors"
                  >
                    <span className={`text-xs font-bold ${t.color}`}>{t.name}</span>
                    <span className="text-[9px] text-slate-500 dark:text-gray-400">{t.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/8 flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 font-mono mt-auto">
              <Sparkles size={14} className="text-cyan-600 dark:text-[#0afcdb]" />
              <span>Clean Architecture • Type-Safe • Enterprise</span>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BentoGrid;
