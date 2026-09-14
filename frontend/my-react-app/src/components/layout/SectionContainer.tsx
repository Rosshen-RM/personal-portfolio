import React from "react";
import ScrollReveal from "../animations/ScrollReveal";

interface SectionContainerProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  darkBgAlt?: boolean;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  badge,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
  darkBgAlt = false,
}) => {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 relative ${
        darkBgAlt
          ? "bg-gray-50/60 dark:bg-[#050816]/70"
          : "bg-white dark:bg-[#050816]"
      } ${className}`}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${containerClassName}`}>
        {/* Section Header */}
        {(badge || title) && (
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {badge}
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </ScrollReveal>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;

