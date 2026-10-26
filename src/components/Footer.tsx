"use client";

import React from "react";
import { ArrowUp, PhoneCall } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#24352F] text-[#F8F6EF] border-t border-[#315C50] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#315C50]/60">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E4EEE6] border border-[#78917B]/40 flex items-center justify-center text-[#315C50]">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="11"
                    stroke="#315C50"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="56 16"
                  />
                  <path
                    d="M23 10C24.5 7.5 27 7 27 7C27 7 26.5 9.5 24 11C23 11.6 22.3 11.2 23 10Z"
                    fill="#78917B"
                  />
                  <circle cx="16" cy="16" r="3" fill="#E8CDA2" />
                </svg>
              </div>
              <span className="font-editorial text-2xl font-semibold text-[#F8F6EF]">
                Open Circle
              </span>
            </div>

            <p className="text-xs text-[#D8DFD9] leading-relaxed max-w-sm">
              An independent educational initiative created to offer human-centered mental health
              awareness, vetted support resources, and quiet reflection. Grounded in research from the
              WHO, NHS, and NIMH.
            </p>

            <div className="text-[11px] text-[#A2B5AB] space-y-1">
              <p>• Zero user data tracking or profiling</p>
              <p>• No advertisements or commercial sponsorships</p>
              <p>• Built for college project demonstration and real-world utility</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#E8CDA2]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D8DFD9]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#learning-library" className="hover:text-white transition-colors">
                  Learning Library
                </a>
              </li>
              <li>
                <a href="#support-directory" className="hover:text-white transition-colors">
                  Support Directory
                </a>
              </li>
              <li>
                <a href="#mood-check-in" className="hover:text-white transition-colors">
                  Private Mood Check-in
                </a>
              </li>
              <li>
                <a href="#breathing-space" className="hover:text-white transition-colors">
                  Guided Breathing Activity
                </a>
              </li>
              <li>
                <a href="#urgent-support" className="hover:text-white transition-colors">
                  Urgent Help / Helplines
                </a>
              </li>
              <li>
                <a href="#about-sources" className="hover:text-white transition-colors">
                  About & Sources
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Helplines Quick Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#E8CDA2] flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5" />
              Emergency Helplines (24/7)
            </h4>
            <div className="space-y-2 text-xs text-[#D8DFD9]">
              <div className="p-2.5 rounded-xl bg-[#1C2B26] border border-[#315C50]">
                <strong className="text-white block">India (Tele-MANAS):</strong>
                <span>Toll-free shortcode: </span>
                <a href="tel:14416" className="font-bold text-[#E8CDA2] hover:underline">
                  14416
                </a>{" "}
                or{" "}
                <a href="tel:18008914416" className="font-bold text-[#E8CDA2] hover:underline">
                  1800-891-4416
                </a>
              </div>
              <div className="p-2.5 rounded-xl bg-[#1C2B26] border border-[#315C50]">
                <strong className="text-white block">USA & Canada (Crisis Lifeline):</strong>
                <span>Call or Text: </span>
                <a href="tel:988" className="font-bold text-[#E8CDA2] hover:underline">
                  988
                </a>
              </div>
              <div className="p-2.5 rounded-xl bg-[#1C2B26] border border-[#315C50]">
                <strong className="text-white block">United Kingdom (NHS / Samaritans):</strong>
                <span>Call </span>
                <a href="tel:111" className="font-bold text-[#E8CDA2] hover:underline">
                  111
                </a>{" "}
                (Mental Health Option) or{" "}
                <a href="tel:116123" className="font-bold text-[#E8CDA2] hover:underline">
                  116 123
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Medical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A2B5AB]">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            <strong>Disclaimer:</strong> Open Circle is an educational project created for
            demonstration purposes. The content provided is not intended to be a substitute for
            professional medical advice, clinical diagnosis, or medical treatment. Always consult a
            licensed physician or mental health professional.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-[#1C2B26] hover:bg-[#315C50] text-[#F8F6EF] transition-colors flex items-center gap-1.5 shrink-0 border border-[#315C50]"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 text-center text-[11px] text-[#78917B]">
          © 2026 Open Circle — Mental Health Awareness & Support. Open educational project.
        </div>
      </div>
    </footer>
  );
};
