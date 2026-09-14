import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useToast } from "./Toast";

export const AudioPulseControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { showToast } = useToast();

  const toggleSound = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      showToast(
        next ? "Ambient Audio Stream Activated ⚡" : "Audio Muted",
        "info"
      );
      return next;
    });
  };

  return (
    <div className="fixed bottom-5 sm:bottom-7 right-5 sm:right-7 z-40">
      <button
        type="button"
        onClick={toggleSound}
        aria-label={isPlaying ? "Mute audio" : "Activate audio"}
        title={isPlaying ? "Sound active" : "Activate ambient sound"}
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center overflow-hidden rounded-full border border-[#0afcdb]/50 bg-black/80 text-[#0afcdb] backdrop-blur-xl shadow-[0_0_24px_rgba(10,252,219,0.35),inset_0_0_15px_rgba(10,252,219,0.15)] transition-all duration-300 hover:border-[#0afcdb] hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Rotating Conic Cyan Laser Ring */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full opacity-90 animate-spin-slow bg-[conic-gradient(from_180deg,transparent_0deg,rgba(10,252,219,0.8)_60deg,transparent_120deg,rgba(99,102,241,0.6)_240deg,transparent_360deg)]"
        />

        {/* Inner Glass Layer */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[3px] rounded-full border border-white/10 bg-black/90"
        />

        {/* Center Equalizer Wave / Icon */}
        <div className="relative z-10 flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-center gap-1">
              <Volume2 size={16} className="text-[#0afcdb]" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 bg-[#0afcdb] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                <span className="w-0.5 bg-[#0afcdb] rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-3" />
                <span className="w-0.5 bg-[#0afcdb] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2" />
              </div>
            </div>
          ) : (
            <VolumeX size={17} className="text-gray-400 group-hover:text-[#0afcdb] group-hover:scale-110 transition-transform" />
          )}
        </div>
      </button>
    </div>
  );
};

export default AudioPulseControl;
