import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Activity,
  Radio,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useToast } from "../components/ui/Toast";
import { personalInfo } from "../data/portfolioData";
import ScrollReveal from "../components/animations/ScrollReveal";

type FormStatus = "idle" | "sending" | "sent" | "error";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    showToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("sent");
      showToast("Transmission sent successfully. Will reply shortly.", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      showToast("Failed to transmit message. Please try direct email.", "error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-slate-100/50 dark:bg-[#000000] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#0afcdb]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-700 dark:text-[#0afcdb] text-xs font-mono font-semibold tracking-widest uppercase mb-4">
            <Radio size={13} className="animate-pulse text-cyan-600 dark:text-[#0afcdb]" />
            <span>SYSTEM_MODULE // 05.COMMS_UPLINK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Initiate <span className="text-cyan-600 dark:text-[#0afcdb] drop-shadow-[0_0_20px_rgba(10,252,219,0.4)]">Connection</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg font-mono text-sm leading-relaxed">
            Have an engineering challenge, full-stack opportunity, or legacy modernization initiative? Uplink directly or transmit your dispatch below.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Contact Information Cards (5 Cols) */}
          <ScrollReveal direction="right" delay={100} className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0a0f18]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/40 shadow-xs dark:shadow-none transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0afcdb]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 dark:bg-[#0afcdb]/10 border border-cyan-500/30 dark:border-[#0afcdb]/30 text-cyan-600 dark:text-[#0afcdb] flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-[#0afcdb] hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 transition cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-cyan-600 dark:text-[#0afcdb]" />
                      <span className="text-cyan-600 dark:text-[#0afcdb] font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                // DIRECT_DISPATCH
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Primary Email
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-cyan-600 dark:text-[#0afcdb] font-mono hover:underline break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Direct Phone & Voice Comms Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0a0f18]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/40 shadow-xs dark:shadow-none transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  AVAILABLE NOW
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                // VOICE_&_CELL
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Direct Phone
              </h3>
              <a
                href={`tel:+91${personalInfo.phone}`}
                className="text-sm text-cyan-600 dark:text-[#0afcdb] font-mono hover:underline"
              >
                +91 {personalInfo.phone}
              </a>
            </div>

            {/* Location & Live Availability Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0a0f18]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/40 shadow-xs dark:shadow-none transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  <span>ONLINE &amp; ACTIVE</span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                // STATION_LOCATION
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {personalInfo.location}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 font-mono">
                Open to Full-Time, Remote &amp; Hybrid Engineering Roles.
              </p>
            </div>

            {/* Telemetry & Social Uplinks Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0a0f18]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/40 shadow-xs dark:shadow-none transition-all duration-300">
              <div className="text-[11px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Activity size={12} className="text-cyan-600 dark:text-[#0afcdb]" />
                <span>// CODE_&amp;_NETWORK_PROFILES</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-100 dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:text-black hover:bg-[#0afcdb] hover:border-[#0afcdb] transition-all text-xs font-mono font-bold cursor-pointer"
                >
                  <FaGithub size={16} />
                  <span>GITHUB</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-100 dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:text-black hover:bg-[#0afcdb] hover:border-[#0afcdb] transition-all text-xs font-mono font-bold cursor-pointer"
                >
                  <FaLinkedin size={16} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Interactive Cyber Terminal Form (7 Cols) */}
          <ScrollReveal direction="left" delay={150} className="lg:col-span-7 flex">
            <form
              onSubmit={handleSubmit}
              className="w-full p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#0a0f18]/95 border border-slate-300 dark:border-[#0afcdb]/30 shadow-lg dark:shadow-[0_0_40px_rgba(10,252,219,0.08)] space-y-6 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-cyan-600/40 dark:text-[#0afcdb]/40 font-mono text-xs">+</div>
              <div className="absolute top-2 right-2 text-cyan-600/40 dark:text-[#0afcdb]/40 font-mono text-xs">+</div>
              <div className="absolute bottom-2 left-2 text-cyan-600/40 dark:text-[#0afcdb]/40 font-mono text-xs">+</div>
              <div className="absolute bottom-2 right-2 text-cyan-600/40 dark:text-[#0afcdb]/40 font-mono text-xs">+</div>

              <div>
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-[#0afcdb]">
                    <Terminal size={15} />
                    <span className="text-slate-900 dark:text-white font-bold">DISPATCH_TERMINAL</span>
                    <span className="text-slate-500 dark:text-gray-500">v2.4.0</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                      CALLSIGN / SENDER_NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060a10] text-slate-900 dark:text-white font-mono text-xs outline-none focus:border-cyan-500 dark:focus:border-[#0afcdb] focus:shadow-[0_0_15px_rgba(10,252,219,0.2)] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                      RETURN_EMAIL_ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. alex@enterprise.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060a10] text-slate-900 dark:text-white font-mono text-xs outline-none focus:border-cyan-500 dark:focus:border-[#0afcdb] focus:shadow-[0_0_15px_rgba(10,252,219,0.2)] transition"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                    DISPATCH_SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Modernization Collaboration / Architecture Role"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060a10] text-slate-900 dark:text-white font-mono text-xs outline-none focus:border-cyan-500 dark:focus:border-[#0afcdb] focus:shadow-[0_0_15px_rgba(10,252,219,0.2)] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                    PAYLOAD_MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Enter project specifications, tech stack requirements, or team discussion details..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060a10] text-slate-900 dark:text-white font-mono text-xs outline-none focus:border-cyan-500 dark:focus:border-[#0afcdb] focus:shadow-[0_0_15px_rgba(10,252,219,0.2)] transition resize-none leading-relaxed"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 px-6 bg-[#0afcdb] hover:bg-[#0afcdb]/90 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-lg shadow-md dark:shadow-[0_0_20px_rgba(10,252,219,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(10,252,219,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer clip-cyber-button"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING_PACKET...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>TRANSMIT DISPATCH // EXECUTE</span>
                    </>
                  )}
                </button>

                {status === "sent" && (
                  <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center gap-2.5 text-xs font-mono animate-fadeIn">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>
                      TRANSMISSION_CONFIRMED: Payload received. I will review and reply to your uplink soon.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/40 text-red-600 dark:text-red-400 flex items-center gap-2.5 text-xs font-mono animate-fadeIn">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>
                      TRANSMISSION_ERROR: Uplink timeout. Please mail directly to{" "}
                      <a href={`mailto:${personalInfo.email}`} className="underline text-slate-900 dark:text-white">
                        {personalInfo.email}
                      </a>
                    </span>
                  </div>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
