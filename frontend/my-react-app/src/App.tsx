import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import CyberSidebars from "./components/layout/CyberSidebars";
import BottomNavDock from "./components/layout/BottomNavDock";
import AudioPulseControl from "./components/ui/AudioPulseControl";
import Footer from "./components/layout/Footer";
import ParticleBackground from "./components/ui/ParticleBackground";
import CommandPalette from "./components/ui/CommandPalette";
import { ToastProvider } from "./components/ui/Toast";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const PortfolioContent: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global shortcut for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#000000] text-slate-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-[#0afcdb] selection:text-black relative">
      {/* Interactive Cyber Particle Background */}
      <ParticleBackground />

      {/* Fixed Left & Right Khaled Oghli-style HUD Sidebars */}
      <CyberSidebars />

      {/* Top HUD Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating Bottom Dock Navigation */}
      <BottomNavDock />

      {/* Rotating Audio/Pulse HUD Trigger */}
      <AudioPulseControl />

      {/* Cyber Footer */}
      <Footer />

      {/* Command Palette Quick Navigation (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <PortfolioContent />
    </ToastProvider>
  );
};

export default App;
