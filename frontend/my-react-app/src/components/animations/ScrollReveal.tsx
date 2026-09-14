import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // milliseconds
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const getTransform = () => {
    if (isIntersecting) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return "translate3d(0, 32px, 0)";
      case "down":
        return "translate3d(0, -32px, 0)";
      case "left":
        return "translate3d(32px, 0, 0)";
      case "right":
        return "translate3d(-32px, 0, 0)";
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

