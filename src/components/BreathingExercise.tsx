"use client";

import React, { useState, useEffect } from "react";
import {
  Wind,
  Play,
  Pause,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";

interface Phase {
  name: string;
  duration: number; // in seconds
  instruction: string;
}

interface Technique {
  id: string;
  name: string;
  description: string;
  phases: Phase[];
}

const TECHNIQUES: Technique[] = [
  {
    id: "box",
    name: "Box Breathing (4-4-4-4)",
    description:
      "Equal intervals for inhale, hold, exhale, and rest. Used widely for grounding racing thoughts and autonomic regulation.",
    phases: [
      { name: "Inhale", duration: 4, instruction: "Breathe in slowly through your nose" },
      { name: "Hold", duration: 4, instruction: "Hold your breath gently and softly" },
      { name: "Exhale", duration: 4, instruction: "Slowly exhale completely through your mouth" },
      { name: "Rest", duration: 4, instruction: "Rest and pause before the next breath" },
    ],
  },
  {
    id: "478",
    name: "Calming Breath (4-7-8)",
    description:
      "Extended holding and prolonged exhale designed to stimulate the vagus nerve and encourage relaxation before sleep or after stress.",
    phases: [
      { name: "Inhale", duration: 4, instruction: "Inhale quietly through your nose" },
      { name: "Hold", duration: 7, instruction: "Gently hold your breath without strain" },
      { name: "Exhale", duration: 8, instruction: "Release your breath slowly and smoothly" },
    ],
  },
  {
    id: "equal",
    name: "Equal Breathing (4-4)",
    description:
      "A simple, natural rhythm matching gentle inhale and exhale durations to settle nervous energy.",
    phases: [
      { name: "Inhale", duration: 4, instruction: "Inhale smoothly for four counts" },
      { name: "Exhale", duration: 4, instruction: "Exhale smoothly for four counts" },
    ],
  },
];

interface BreathingExerciseProps {
  reducedMotion: boolean;
}

export const BreathingExercise: React.FC<BreathingExerciseProps> = ({
  reducedMotion,
}) => {
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>("box");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState<number>(0);
  const [secondsLeftInPhase, setSecondsLeftInPhase] = useState<number>(4);
  const [cyclesCompleted, setCyclesCompleted] = useState<number>(0);
  const [forceReducedMotion, setForceReducedMotion] = useState<boolean>(false);

  const currentTechnique =
    TECHNIQUES.find((t) => t.id === selectedTechniqueId) || TECHNIQUES[0];
  const currentPhase = currentTechnique.phases[currentPhaseIndex];

  // Reset phase timer when technique changes
  const handleTechniqueChange = (id: string) => {
    setSelectedTechniqueId(id);
    setIsActive(false);
    setCurrentPhaseIndex(0);
    const tech = TECHNIQUES.find((t) => t.id === id) || TECHNIQUES[0];
    setSecondsLeftInPhase(tech.phases[0].duration);
    setCyclesCompleted(0);
  };

  // Main countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive) {
      timer = setInterval(() => {
        setSecondsLeftInPhase((prev) => {
          if (prev <= 1) {
            // Advance to next phase
            setCurrentPhaseIndex((prevIndex) => {
              const nextIndex =
                (prevIndex + 1) % currentTechnique.phases.length;
              if (nextIndex === 0) {
                setCyclesCompleted((c) => c + 1);
              }
              return nextIndex;
            });
            // Return next phase duration
            const nextIndex =
              (currentPhaseIndex + 1) % currentTechnique.phases.length;
            return currentTechnique.phases[nextIndex].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, currentPhaseIndex, currentTechnique.phases]);

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setCurrentPhaseIndex(0);
    setSecondsLeftInPhase(currentTechnique.phases[0].duration);
    setCyclesCompleted(0);
  };

  const isReduced = reducedMotion || forceReducedMotion;

  // Calculate percentage of phase completed for smooth visual cues
  const phaseProgress =
    ((currentPhase.duration - secondsLeftInPhase) / currentPhase.duration) * 100;

  // Visual scaling logic for standard motion
  const getScaleClass = () => {
    if (!isActive) return "scale-100";
    if (currentPhase.name === "Inhale") return "scale-115";
    if (currentPhase.name === "Hold") return "scale-115";
    if (currentPhase.name === "Exhale") return "scale-90";
    return "scale-95";
  };

  return (
    <section
      id="breathing-space"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F8F6EF]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <Wind className="w-3.5 h-3.5 text-[#315C50]" />
            Nervous System Regulation
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            Guided Breathing Space
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536760] leading-relaxed">
            Rhythmic breathing gently down-regulates sympathetic arousal. Follow the visual or text
            cues at your own natural pace. You can pause or stop whenever you wish.
          </p>

          {/* Safety note */}
          <div className="mt-4 p-3 rounded-xl bg-white border border-[#DDE5DF] text-xs text-[#536760] flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#78917B] shrink-0" />
            <span>
              <strong>Comfort Notice:</strong> Never force your breath. If you feel lightheaded,
              pause and return to your natural breathing pattern.
            </span>
          </div>
        </div>

        {/* Breathing App Card */}
        <div className="mt-10 bg-white rounded-3xl border border-[#DDE5DF] p-6 sm:p-10 shadow-xs">
          {/* Technique Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#EAE6D8]">
            <div
              className="flex items-center gap-1.5 p-1 bg-[#F8F6EF] rounded-full border border-[#DDE5DF] w-full sm:w-auto overflow-x-auto"
              role="tablist"
              aria-label="Breathing techniques"
            >
              {TECHNIQUES.map((tech) => (
                <button
                  key={tech.id}
                  id={`breathing-tab-${tech.id}`}
                  type="button"
                  onClick={() => handleTechniqueChange(tech.id)}
                  role="tab"
                  aria-selected={selectedTechniqueId === tech.id}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                    selectedTechniqueId === tech.id
                      ? "bg-[#315C50] text-[#F8F6EF] shadow-2xs"
                      : "text-[#536760] hover:text-[#24352F]"
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>

            {/* Technique Description */}
            <div className="text-right text-xs text-[#78917B] hidden sm:block">
              Cycles: <strong className="text-[#315C50] font-bold text-sm">{cyclesCompleted}</strong>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#536760] text-center max-w-xl mx-auto">
            {currentTechnique.description}
          </p>

          {/* Breathing Visualizer Stage */}
          <div className="my-10 flex flex-col items-center justify-center min-h-[300px]">
            {isReduced ? (
              /* Reduced-Motion Mode: High-contrast calm progress bar & countdown */
              <div className="w-full max-w-md p-8 rounded-2xl bg-[#F8F6EF] border border-[#DDE5DF] text-center space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#78917B]">
                  Phase: {currentPhase.name}
                </span>
                <div className="text-4xl font-editorial font-bold text-[#315C50]">
                  {secondsLeftInPhase}s
                </div>
                <p className="text-sm font-medium text-[#24352F]">
                  {isActive ? currentPhase.instruction : "Ready to begin"}
                </p>

                {/* Accessible Progress Bar */}
                <div className="w-full bg-[#DDE5DF] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-[#315C50] h-3 rounded-full transition-all duration-300"
                    style={{ width: `${phaseProgress}%` }}
                    aria-valuenow={Math.round(phaseProgress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    role="progressbar"
                  />
                </div>
              </div>
            ) : (
              /* Organic Expanding/Contracting Breathing Ring */
              <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80">
                {/* Outer Ripple Ring */}
                <div
                  className={`absolute inset-0 rounded-full border border-[#78917B]/20 transition-all duration-1000 ${
                    isActive ? "scale-105 opacity-80" : "scale-100 opacity-30"
                  }`}
                  aria-hidden="true"
                />

                {/* Middle Soft Green Halo */}
                <div
                  className={`absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full bg-[#E4EEE6]/60 transition-transform duration-1000 ease-in-out ${getScaleClass()}`}
                  aria-hidden="true"
                />

                {/* Core Breathing Circle */}
                <div
                  className={`relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#315C50] text-[#F8F6EF] flex flex-col items-center justify-center p-6 text-center shadow-md transition-transform duration-1000 ease-in-out ${getScaleClass()}`}
                >
                  <span className="text-[11px] uppercase tracking-widest text-[#E8CDA2] font-semibold">
                    {isActive ? currentPhase.name : "Ready"}
                  </span>
                  <span className="text-4xl font-editorial font-bold my-1 text-white">
                    {isActive ? secondsLeftInPhase : "●"}
                  </span>
                  <span className="text-xs text-[#E4EEE6] leading-tight max-w-[150px]">
                    {isActive ? currentPhase.instruction : "Press Start below"}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-[#EAE6D8]">
            <button
              id="breathing-start-pause-btn"
              type="button"
              onClick={handleStartPause}
              className="px-6 py-3 rounded-full bg-[#315C50] text-[#F8F6EF] font-semibold text-sm hover:bg-[#24352F] transition-all shadow-xs flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#315C50]"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Breathing</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{cyclesCompleted > 0 ? "Resume Breathing" : "Start Breathing"}</span>
                </>
              )}
            </button>

            <button
              id="breathing-reset-btn"
              type="button"
              onClick={handleReset}
              className="px-5 py-3 rounded-full bg-[#F8F6EF] border border-[#DDE5DF] text-[#536760] font-medium text-sm hover:bg-[#E4EEE6] hover:text-[#24352F] transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#315C50]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>

            {/* Toggle accessible reduced motion inside exercise */}
            <button
              id="breathing-text-mode-btn"
              type="button"
              onClick={() => setForceReducedMotion(!forceReducedMotion)}
              className={`px-4 py-3 rounded-full text-xs font-medium border transition-colors ${
                isReduced
                  ? "bg-[#E4EEE6] text-[#315C50] border-[#78917B]/40"
                  : "bg-white text-[#78917B] border-[#DDE5DF] hover:bg-[#F8F6EF]"
              }`}
            >
              {isReduced ? "Text Mode (Active)" : "Switch to Text Mode"}
            </button>
          </div>

          {/* Phase Sequence Indicators */}
          <div className="mt-8 pt-6 border-t border-[#EAE6D8]">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#78917B] block text-center mb-3">
              Interval Breakdown
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {currentTechnique.phases.map((phase, idx) => {
                const isCurrent = isActive && idx === currentPhaseIndex;
                return (
                  <div
                    key={idx}
                    className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                      isCurrent
                        ? "bg-[#315C50] text-[#F8F6EF] border-[#315C50] font-bold"
                        : "bg-[#F8F6EF] text-[#536760] border-[#DDE5DF]"
                    }`}
                  >
                    <span>{phase.name}</span>
                    <span className="opacity-75">({phase.duration}s)</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
