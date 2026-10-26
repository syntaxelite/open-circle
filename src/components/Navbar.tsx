"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Eye } from "lucide-react";

interface NavbarProps {
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Learning Library", href: "#learning-library" },
    { label: "Support Directory", href: "#support-directory" },
    { label: "Mood Check-in", href: "#mood-check-in" },
    { label: "Breathing Space", href: "#breathing-space" },
    { label: "Get Help", href: "#urgent-support", highlight: true },
    { label: "About & Sources", href: "#about-sources" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-[#F8F6EF]/95 backdrop-blur-md border-[#DDE5DF] shadow-xs"
          : "bg-[#F8F6EF] border-[#EAE6D8]"
      }`}
    >
      {/* Top emergency announcement bar */}
      <div className="bg-[#315C50] text-[#F8F6EF] px-4 py-1.5 text-xs font-medium text-center flex items-center justify-center gap-2">
        <PhoneCall className="w-3.5 h-3.5 text-[#E8CDA2]" aria-hidden="true" />
        <span>
          In acute crisis? In India call Tele-MANAS{" "}
          <a
            href="tel:14416"
            className="underline font-bold text-[#E8CDA2] hover:text-white"
          >
            14416
          </a>{" "}
          (24/7 Free) | In US/Canada dial{" "}
          <a
            href="tel:988"
            className="underline font-bold text-[#E8CDA2] hover:text-white"
          >
            988
          </a>
        </span>
        <a
          href="#urgent-support"
          className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded bg-[#24352F] text-xs hover:bg-[#1C2B26] transition-colors"
        >
          View All Helplines →
        </a>
      </div>

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#315C50] rounded-lg p-1"
        >
          {/* Custom Botanical Open Circle SVG */}
          <div className="w-10 h-10 rounded-full bg-[#E4EEE6] border border-[#78917B]/40 flex items-center justify-center text-[#315C50] group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Open Circle with leaf end */}
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
          <div>
            <span className="font-editorial text-2xl tracking-tight text-[#24352F] font-semibold block leading-none">
              Open Circle
            </span>
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#78917B] block mt-0.5">
              Mental Health & Support
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.highlight ? (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full bg-[#315C50] text-[#F8F6EF] font-medium text-sm hover:bg-[#24352F] transition-colors shadow-xs flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#315C50]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E8CDA2]" />
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#24352F]/85 hover:text-[#315C50] transition-colors py-1 border-b-2 border-transparent hover:border-[#315C50]/40"
              >
                {link.label}
              </a>
            )
          )}

          {/* Reduced motion toggle button */}
          <button
            id="toggle-reduced-motion-btn"
            type="button"
            onClick={onToggleReducedMotion}
            aria-pressed={reducedMotion}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
              reducedMotion
                ? "bg-[#315C50] text-[#F8F6EF] border-[#315C50]"
                : "bg-white/80 text-[#536760] border-[#DDE5DF] hover:bg-[#E4EEE6]"
            }`}
            title="Toggle reduced motion animations across the site"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{reducedMotion ? "Motion: Off" : "Reduced Motion"}</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            id="mobile-urgent-btn"
            href="#urgent-support"
            className="px-3 py-1.5 rounded-full bg-[#315C50] text-[#F8F6EF] font-medium text-xs flex items-center gap-1"
          >
            <PhoneCall className="w-3 h-3 text-[#E8CDA2]" />
            <span>Helplines</span>
          </a>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#24352F] hover:bg-[#E4EEE6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C50]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F6EF] border-b border-[#DDE5DF] px-4 pt-3 pb-6 shadow-md animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.highlight
                    ? "bg-[#315C50] text-[#F8F6EF] flex items-center gap-2 font-semibold"
                    : "text-[#24352F] hover:bg-[#E4EEE6]"
                }`}
              >
                {link.highlight && (
                  <PhoneCall className="w-4 h-4 text-[#E8CDA2]" />
                )}
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#DDE5DF]/60 flex items-center justify-between">
              <span className="text-xs text-[#536760]">Accessibility:</span>
              <button
                type="button"
                onClick={onToggleReducedMotion}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 ${
                  reducedMotion
                    ? "bg-[#315C50] text-[#F8F6EF] border-[#315C50]"
                    : "bg-white text-[#536760] border-[#DDE5DF]"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{reducedMotion ? "Motion: Off" : "Enable Reduced Motion"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
