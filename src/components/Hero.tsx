"use client";

import React from "react";
import { BookOpen, Compass, Heart, Wind, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#EAE6D8] overflow-hidden"
    >
      {/* Subtle organic background geometry using the exact palette */}
      <div
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E4EEE6]/50 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 -mb-20 w-80 h-80 rounded-full bg-[#E8CDA2]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#315C50] inline-block" />
              Independent Mental Health Educational Project
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#24352F] tracking-tight leading-[1.12]">
              A quiet, honest space for mental health{" "}
              <span className="italic text-[#315C50]">understanding</span> and real support.
            </h1>

            <p className="text-base sm:text-lg text-[#536760] max-w-2xl font-normal leading-relaxed">
              Open Circle is a human-centered, college-developed resource dedicated to trustworthy
              guidance. Grounded in research from the World Health Organization, NHS, and NIMH, we
              provide evidence-based articles, a vetted support directory, private self-reflection,
              and direct connections to verified crisis lines.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              <a
                href="#learning-library"
                className="px-6 py-3.5 rounded-full bg-[#315C50] text-[#F8F6EF] font-medium text-sm hover:bg-[#24352F] transition-all shadow-xs flex items-center gap-2 group"
              >
                <span>Explore Resources</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#support-directory"
                className="px-6 py-3.5 rounded-full bg-white border border-[#DDE5DF] text-[#24352F] font-medium text-sm hover:bg-[#E4EEE6] hover:border-[#78917B]/40 transition-colors shadow-2xs"
              >
                Find Support Directory
              </a>

              <a
                href="#urgent-support"
                className="px-6 py-3.5 rounded-full bg-[#E8CDA2]/40 text-[#24352F] border border-[#E8CDA2] font-semibold text-sm hover:bg-[#E8CDA2] transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4 text-[#315C50]" />
                <span>Get Help (24/7)</span>
              </a>
            </div>

            {/* Transparency Note */}
            <div className="pt-4 flex items-center gap-2.5 text-xs text-[#6E827B]">
              <ShieldCheck className="w-4 h-4 text-[#78917B] shrink-0" />
              <span>
                Zero user tracking. No fabricated testimonials. All medical & support links are verified official portals.
              </span>
            </div>
          </div>

          {/* Original Restrained Illustration / Visual Focal Point */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white/70 backdrop-blur-xs rounded-3xl p-8 border border-[#E2DDD1] shadow-xs">
              {/* Botanical Serene Illustration */}
              <div className="w-full aspect-square relative flex items-center justify-center">
                <svg
                  className="w-full h-full max-w-[320px] max-h-[320px]"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Illustration of an open botanical circle symbolizing support, growth, and gentle healing"
                >
                  {/* Soft Background Aura */}
                  <circle cx="200" cy="200" r="160" fill="#F8F6EF" />
                  <circle cx="200" cy="200" r="130" fill="#E4EEE6" opacity="0.6" />

                  {/* Gentle Outer Ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="105"
                    stroke="#DDE5DF"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />

                  {/* Primary Hand-Drawn Open Circle Ring */}
                  <path
                    d="M 120 200 A 80 80 0 1 1 280 200 A 80 80 0 0 1 160 270"
                    stroke="#315C50"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Warm Beige Inner Glow */}
                  <circle cx="200" cy="200" r="48" fill="#E8CDA2" opacity="0.45" />
                  <circle cx="200" cy="200" r="28" fill="#E8CDA2" />

                  {/* Botanical Sage Leaves Flourishing on the Ring */}
                  <path
                    d="M 160 270 C 145 285 130 275 140 260 C 150 250 165 258 160 270 Z"
                    fill="#315C50"
                  />
                  <path
                    d="M 175 282 C 168 296 150 292 160 278 C 168 270 178 274 175 282 Z"
                    fill="#78917B"
                  />

                  {/* Branch Elements on Top Right */}
                  <path
                    d="M 270 140 C 290 130 295 145 280 152 C 270 155 265 145 270 140 Z"
                    fill="#78917B"
                  />
                  <path
                    d="M 255 120 C 268 108 278 118 266 128 C 258 132 250 126 255 120 Z"
                    fill="#315C50"
                  />

                  {/* Soft Grounding Stem */}
                  <path
                    d="M 200 248 C 200 230 195 210 200 185"
                    stroke="#24352F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 198 215 C 185 208 185 198 198 206 Z"
                    fill="#315C50"
                  />
                  <path
                    d="M 202 198 C 215 192 215 182 202 190 Z"
                    fill="#78917B"
                  />

                  {/* Core Quiet Accent */}
                  <circle cx="200" cy="182" r="4" fill="#315C50" />
                </svg>
              </div>

              {/* Quote / Editorial caption */}
              <div className="mt-4 pt-4 border-t border-[#EAE6D8] text-center">
                <p className="font-editorial italic text-sm text-[#24352F]">
                  “Mental health is a state of well-being that enables people to cope with the stresses of life and realize their abilities.”
                </p>
                <span className="block text-[11px] uppercase tracking-wider text-[#78917B] font-semibold mt-1">
                  World Health Organization Definition
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Access Quick-Jump Cards (Without Excessive Scrolling) */}
        <div className="mt-14 pt-8 border-t border-[#EAE6D8]">
          <h2 className="text-xs uppercase font-bold tracking-widest text-[#78917B] mb-5">
            Direct Access to Core Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Library */}
            <a
              href="#learning-library"
              className="group p-5 rounded-2xl bg-white border border-[#DDE5DF] hover:border-[#315C50] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#24352F] group-hover:text-[#315C50] transition-colors">
                  Learning Library
                </h3>
                <p className="text-xs text-[#536760] mt-1 leading-relaxed">
                  6 evidence-grounded articles on anxiety, depression, self-care, and supporting others.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#315C50] mt-3 flex items-center gap-1">
                Read articles →
              </span>
            </a>

            {/* Card 2: Directory */}
            <a
              href="#support-directory"
              className="group p-5 rounded-2xl bg-white border border-[#DDE5DF] hover:border-[#315C50] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#24352F] group-hover:text-[#315C50] transition-colors">
                  Support Directory
                </h3>
                <p className="text-xs text-[#536760] mt-1 leading-relaxed">
                  Searchable, filterable real services from Tele-MANAS, NAMI, 7 Cups, and NHS.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#315C50] mt-3 flex items-center gap-1">
                Filter services →
              </span>
            </a>

            {/* Card 3: Mood Check-in */}
            <a
              href="#mood-check-in"
              className="group p-5 rounded-2xl bg-white border border-[#DDE5DF] hover:border-[#315C50] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#24352F] group-hover:text-[#315C50] transition-colors">
                  Private Mood Check-in
                </h3>
                <p className="text-xs text-[#536760] mt-1 leading-relaxed">
                  Non-judgmental reflection. Completely anonymous, unsaved, and in-browser only.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#315C50] mt-3 flex items-center gap-1">
                Check in now →
              </span>
            </a>

            {/* Card 4: Breathing Space */}
            <a
              href="#breathing-space"
              className="group p-5 rounded-2xl bg-white border border-[#DDE5DF] hover:border-[#315C50] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#24352F] group-hover:text-[#315C50] transition-colors">
                  Guided Breathing
                </h3>
                <p className="text-xs text-[#536760] mt-1 leading-relaxed">
                  Interactive Box & 4-7-8 breathing pacing with start/pause and reduced-motion mode.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#315C50] mt-3 flex items-center gap-1">
                Breathe calmly →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
