import React from "react";

export interface ProjectData {
  id: string;
  title: string;
  category: "Modernization" | "Full Stack" | "Frontend" | "All";
  tagline: string;
  desc: string;
  longDesc: string;
  img?: string;
  fallbackGradient?: string;
  github: string;
  demoUrl?: string;
  tags: string[];
  metrics: string[];
  features: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  tagColor: string;
  gradient: string;
  desc: string;
  skills: { name: string; level: string }[];
  highlights: string[];
}

export interface Milestone {
  role: string;
  project: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ToolkitItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  spotlight: string;
}

export interface StatItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  numeric?: number;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

