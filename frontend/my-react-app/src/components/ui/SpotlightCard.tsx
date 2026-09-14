import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  spotlightColor?: string;
  laserBorder?: boolean;
  cyberCorners?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  contentClassName = "",
  spotlightColor = "rgba(10, 252, 219, 0.15)",
  laserBorder = false,
  cyberCorners = true,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#05090e]/80 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-xl hover:border-cyan-500/50 dark:hover:border-[#0afcdb]/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(10,252,219,0.15)] ${className}`}
      {...props}
    >
      {/* Laser Conic Gradient Border Highlight (Optional for featured cards) */}
      {laserBorder && (
        <div className="absolute -inset-[1px] bg-linear-to-r from-cyan-500 dark:from-[#0afcdb] via-indigo-500 to-cyan-500 dark:to-[#0afcdb] rounded-2xl opacity-40 blur-xs -z-10 pointer-events-none" />
      )}

      {/* Cyber Corner HUD Crosshairs */}
      {cyberCorners && (
        <>
          <span className="pointer-events-none absolute top-2 left-2 text-[10px] font-mono text-slate-400/40 dark:text-white/20 group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb]/60 transition-colors">
            +
          </span>
          <span className="pointer-events-none absolute top-2 right-2 text-[10px] font-mono text-slate-400/40 dark:text-white/20 group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb]/60 transition-colors">
            +
          </span>
          <span className="pointer-events-none absolute bottom-2 left-2 text-[10px] font-mono text-slate-400/40 dark:text-white/20 group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb]/60 transition-colors">
            +
          </span>
          <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-mono text-slate-400/40 dark:text-white/20 group-hover:text-cyan-600 dark:group-hover:text-[#0afcdb]/60 transition-colors">
            +
          </span>
        </>
      )}

      {/* Dynamic Cursor Following Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      <div className={`relative z-10 ${contentClassName || "h-full flex flex-col"}`}>{children}</div>
    </div>
  );
};

export default SpotlightCard;
