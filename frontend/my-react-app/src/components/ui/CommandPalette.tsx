import React, { useEffect, useState, useCallback } from "react";
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  Mail,
  Download,
  Copy,
  Moon,
  Sun,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useToast } from "./Toast";
import { personalInfo } from "../../data/portfolioData";
import resumeFile from "../../assets/Rosshen CV.pdf.pdf";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggle } = useTheme();
  const { showToast } = useToast();

  const handleClose = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      handleClose();
    },
    [handleClose]
  );

  const commands: CommandItem[] = [
    {
      id: "nav-home",
      label: "Go to Home",
      category: "Navigation",
      icon: Home,
      action: () => scrollToSection("home"),
      shortcut: "H",
    },
    {
      id: "nav-about",
      label: "Go to About Me",
      category: "Navigation",
      icon: User,
      action: () => scrollToSection("about"),
      shortcut: "A",
    },
    {
      id: "nav-skills",
      label: "Go to Skills & Toolkit",
      category: "Navigation",
      icon: Cpu,
      action: () => scrollToSection("skills"),
      shortcut: "S",
    },
    {
      id: "nav-projects",
      label: "Go to Featured Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
      shortcut: "P",
    },
    {
      id: "nav-contact",
      label: "Go to Contact",
      category: "Navigation",
      icon: Mail,
      action: () => scrollToSection("contact"),
      shortcut: "C",
    },
    {
      id: "act-resume",
      label: "Download Resume / CV",
      category: "Actions",
      icon: Download,
      action: () => {
        const link = document.createElement("a");
        link.href = resumeFile;
        link.download = "Rosshen_RM_CV.pdf";
        link.click();
        showToast(`Downloading ${personalInfo.name}'s Resume PDF`, "success");
        handleClose();
      },
    },
    {
      id: "act-copy-email",
      label: "Copy Email Address",
      category: "Actions",
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        showToast("Email copied to clipboard!", "success");
        handleClose();
      },
    },
    {
      id: "act-toggle-theme",
      label: `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`,
      category: "Actions",
      icon: theme === "light" ? Moon : Sun,
      action: () => {
        toggle();
        showToast(
          `Theme changed to ${theme === "light" ? "Dark" : "Light"}`,
          "info"
        );
        handleClose();
      },
      shortcut: "T",
    },
    {
      id: "soc-github",
      label: "Open GitHub Profile",
      category: "Social",
      icon: Github,
      action: () => {
        window.open(personalInfo.github, "_blank");
        handleClose();
      },
    },
    {
      id: "soc-linkedin",
      label: "Open LinkedIn Profile",
      category: "Social",
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.linkedin, "_blank");
        handleClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Click backdrop to dismiss */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Palette Container */}
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0b1120] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-white/10">
          <Search className="text-gray-400 dark:text-gray-500" size={20} />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none text-sm sm:text-base"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <cmd.icon
                      size={17}
                      className={
                        isSelected
                          ? "text-white"
                          : "text-gray-400 dark:text-gray-500"
                      }
                    />
                    <span>{cmd.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-blue-700/60 text-white"
                          : "bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <ArrowRight size={14} className="text-white" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-black/40 border-t border-gray-100 dark:border-white/5 text-[11px] text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>{personalInfo.name} Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

