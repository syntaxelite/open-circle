"use client";

import React, { useState } from "react";
import {
  Heart,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";
import { MOOD_OPTIONS, MoodType, MoodOption } from "@/data/moodData";

export const MoodCheckIn: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const currentOption: MoodOption | null = selectedMood
    ? MOOD_OPTIONS[selectedMood]
    : null;

  const handleReset = () => {
    setSelectedMood(null);
  };

  return (
    <section
      id="mood-check-in"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F8F6EF]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#315C50]" />
            Private Moment for Yourself
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            Private Mood Check-in
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536760] leading-relaxed">
            Pause for a moment without expectations. Select how things feel right now to receive a
            gentle, compassionate reflection and simple grounding suggestions.
          </p>

          {/* Privacy & Non-Diagnostic Guarantee */}
          <div className="mt-5 p-3.5 rounded-2xl bg-white border border-[#DDE5DF] text-xs text-[#536760] flex items-center justify-center gap-2 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#315C50] shrink-0" />
            <span>
              <strong>100% In-Browser Privacy:</strong> Your selection is never stored, tracked, or
              transmitted. It clears as soon as you refresh or leave this page.
            </span>
          </div>
        </div>

        {/* 5 Mood Selector Buttons */}
        <div className="mt-10">
          <div
            className="grid grid-cols-2 sm:grid-cols-5 gap-3"
            role="group"
            aria-label="Select your current feeling"
          >
            {(
              [
                { id: "rough", label: "Rough", hint: "Struggling or heavy" },
                { id: "anxious", label: "Anxious", hint: "Tense or racing" },
                { id: "okay", label: "Okay", hint: "Steady or navigating" },
                { id: "good", label: "Good", hint: "Balanced or content" },
                { id: "hopeful", label: "Hopeful", hint: "Looking forward" },
              ] as const
            ).map((mood) => {
              const isSelected = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  id={`mood-btn-${mood.id}`}
                  type="button"
                  onClick={() => setSelectedMood(mood.id)}
                  aria-pressed={isSelected}
                  className={`p-4 rounded-2xl border text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                    isSelected
                      ? "bg-[#315C50] text-[#F8F6EF] border-[#315C50] shadow-sm scale-102"
                      : "bg-white text-[#24352F] border-[#DDE5DF] hover:border-[#78917B] hover:bg-[#E4EEE6]/50"
                  }`}
                >
                  <span className="block text-base sm:text-lg font-editorial font-medium">
                    {mood.label}
                  </span>
                  <span
                    className={`block text-[11px] mt-1 ${
                      isSelected ? "text-[#E4EEE6]" : "text-[#78917B]"
                    }`}
                  >
                    {mood.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Reflection Output Card */}
        {currentOption && (
          <div
            id="mood-reflection-card"
            className="mt-8 bg-white rounded-3xl border border-[#DDE5DF] p-6 sm:p-8 shadow-xs animate-in fade-in-50 duration-200"
          >
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#EAE6D8]">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#78917B]">
                  Currently Feeling
                </span>
                <h3 className="font-editorial text-2xl text-[#315C50] font-normal">
                  {currentOption.label} — {currentOption.subtitle}
                </h3>
              </div>
              <button
                id="mood-clear-btn"
                type="button"
                onClick={handleReset}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-medium text-[#536760] bg-[#F8F6EF] hover:bg-[#E4EEE6] hover:text-[#24352F] border border-[#DDE5DF] transition-colors flex items-center gap-1.5"
                title="Wipe selection from memory"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Selection</span>
              </button>
            </div>

            {/* Compassionate Tone Lead */}
            <div className="mt-6 p-4 rounded-2xl bg-[#E4EEE6]/50 border border-[#78917B]/20">
              <p className="text-sm sm:text-base text-[#24352F] leading-relaxed italic font-editorial">
                “{currentOption.toneDescription}”
              </p>
            </div>

            {/* Reflection Prompt */}
            <div className="mt-6">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#78917B] mb-1.5">
                Gentle Reflection
              </h4>
              <p className="text-sm text-[#24352F] leading-relaxed">
                {currentOption.reflectionPrompt}
              </p>
            </div>

            {/* Non-judgmental Suggestions */}
            <div className="mt-6 pt-5 border-t border-[#EAE6D8]">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#315C50] mb-3">
                Small, Optional Steps for Right Now
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentOption.gentleSuggestions.map((sug, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F8F6EF] border border-[#EAE6D8] flex flex-col justify-between"
                  >
                    <div>
                      <h5 className="font-semibold text-xs text-[#24352F]">
                        {sug.title}
                      </h5>
                      <p className="text-xs text-[#536760] mt-1 leading-relaxed">
                        {sug.description}
                      </p>
                    </div>
                    {sug.actionLabel && sug.actionTarget && (
                      <a
                        href={sug.actionTarget}
                        className="mt-3 text-xs font-semibold text-[#315C50] hover:text-[#24352F] inline-flex items-center gap-1"
                      >
                        <span>{sug.actionLabel}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Grounding Anchor Reminder */}
            <div className="mt-6 pt-4 border-t border-[#EAE6D8] flex items-start gap-2.5 text-xs text-[#6E827B]">
              <Sparkles className="w-4 h-4 text-[#E8CDA2] shrink-0 mt-0.5" />
              <p>
                <strong>Quiet Anchor:</strong> {currentOption.groundingReminder}
              </p>
            </div>
          </div>
        )}

        {/* Informational Disclaimer Footer */}
        <div className="mt-6 text-center text-[11px] text-[#78917B] flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>
            This tool does not measure, score, or diagnose depression, anxiety, or any medical condition.
          </span>
        </div>
      </div>
    </section>
  );
};
