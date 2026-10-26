"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LearningLibrary } from "@/components/LearningLibrary";
import { SupportDirectory } from "@/components/SupportDirectory";
import { MoodCheckIn } from "@/components/MoodCheckIn";
import { BreathingExercise } from "@/components/BreathingExercise";
import { UrgentSupport } from "@/components/UrgentSupport";
import { AboutAndSources } from "@/components/AboutAndSources";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check for OS-level prefers-reduced-motion on initial mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        queueMicrotask(() => {
          setReducedMotion(true);
        });
      }

      const handler = (e: MediaQueryListEvent) => {
        setReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  const handleToggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F8F6EF] text-[#24352F] ${
        reducedMotion ? "reduce-motion-active" : ""
      }`}
    >
      {/* Navigation */}
      <Navbar
        reducedMotion={reducedMotion}
        onToggleReducedMotion={handleToggleReducedMotion}
      />

      {/* Main Content Area with Skip Link Anchor */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {/* Section A: Home / Hero */}
        <Hero />

        {/* Section B: Mental Health Learning Library */}
        <LearningLibrary />

        {/* Section C: Support Resource Directory */}
        <SupportDirectory />

        {/* Section D: Private Mood Check-in */}
        <MoodCheckIn />

        {/* Section E: Guided Breathing Exercise */}
        <BreathingExercise reducedMotion={reducedMotion} />

        {/* Section F: Urgent Support / Get Help */}
        <UrgentSupport />

        {/* Section G: About & Sources */}
        <AboutAndSources />

        {/* Section H: Contact & Feedback */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
