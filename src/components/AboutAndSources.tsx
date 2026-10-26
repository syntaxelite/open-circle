"use client";

import React from "react";
import {
  Info,
  ShieldCheck,
  ExternalLink,
  GraduationCap,
  FileCheck2,
} from "lucide-react";

export const AboutAndSources: React.FC = () => {
  const verifiedSourcesList = [
    {
      name: "World Health Organization (WHO)",
      role: "Global Health Standards & Determinants",
      description:
        "The specialized agency of the United Nations responsible for international public health. Our definitions of mental health and foundational articles are grounded in the WHO Comprehensive Mental Health Action Plan.",
      url: "https://www.who.int/health-topics/mental-health",
      citedIn: "Understanding Mental Health & Global Guidelines",
    },
    {
      name: "National Institute of Mental Health (NIMH)",
      role: "Clinical Research & Scientific Guidance",
      description:
        "The lead federal biomedical agency for mental disorder research in the US (part of NIH). Provides the scientific basis for our explanations of anxiety neurobiology, depression symptoms, and psychotherapy modalities.",
      url: "https://www.nimh.nih.gov/health",
      citedIn: "Stress & Anxiety, Depression, and Psychotherapy Guides",
    },
    {
      name: "National Health Service (NHS England)",
      role: "Evidence-Based Public Interventions",
      description:
        "The publicly funded healthcare system of the UK. We cite the NHS '5 Steps to Mental Wellbeing' and 'Every Mind Matters' frameworks for actionable lifestyle and caregiver guidance.",
      url: "https://www.nhs.uk/mental-health/",
      citedIn: "5 Steps to Wellbeing & Supporting a Loved One",
    },
    {
      name: "National Alliance on Mental Illness (NAMI)",
      role: "Grassroots Peer Support Models",
      description:
        "The largest grassroots mental health organization in the United States dedicated to building better lives for millions affected by mental illness through peer-led support groups.",
      url: "https://www.nami.org/",
      citedIn: "Peer Support & Family Caregiver Directory Listings",
    },
    {
      name: "Tele-MANAS (MoHFW India / NIMHANS)",
      role: "National Tele-Mental Health Infrastructure",
      description:
        "The Government of India's flagship 24/7 digital mental health initiative providing free multi-lingual psychological first aid and clinical triage across all 36 States and Union Territories.",
      url: "https://telemanas.mohfw.gov.in/",
      citedIn: "National Emergency & Crisis Tele-Counseling",
    },
    {
      name: "Find A Helpline (ThroughLine)",
      role: "International Crisis Directory",
      description:
        "An independently verified international directory connecting individuals across 130+ nations to free, confidential crisis hotlines and local support resources.",
      url: "https://findahelpline.com/",
      citedIn: "Global Directory & Cross-Border Helplines",
    },
  ];

  return (
    <section
      id="about-sources"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F8F6EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <Info className="w-3.5 h-3.5 text-[#315C50]" />
            About Open Circle & Source Integrity
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            Honest Purpose, Academic Grounding
          </h2>
          <p className="mt-3 text-base text-[#536760] leading-relaxed">
            Open Circle was conceived and built as an educational project to demonstrate how
            thoughtfully designed digital health tools can prioritize user dignity, factual accuracy,
            and strict privacy over commercial advertising or clickbait.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#DDE5DF] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#24352F] font-normal">
              Why Open Circle Exists
            </h3>
            <p className="text-xs text-[#536760] leading-relaxed">
              Many mental health websites today are cluttered with commercial ads, generic
              AI-generated text, or fabricated user reviews. Open Circle demonstrates an editorial,
              human-centered alternative that treats sensitive health topics with respect and care.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#DDE5DF] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#24352F] font-normal">
              What You Can Do Here
            </h3>
            <p className="text-xs text-[#536760] leading-relaxed">
              Explore 6 thoroughly researched psychoeducational guides, search vetted peer and
              clinical organizations, practice private mood reflection with zero telemetry, regulate
              your breathing with visual pacing, and access 24/7 crisis numbers.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#DDE5DF] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E4EEE6] text-[#315C50] flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#24352F] font-normal">
              Transparent Limitations
            </h3>
            <p className="text-xs text-[#536760] leading-relaxed">
              Open Circle is an independent informational project. We are not a medical provider,
              and we are not formally affiliated with or sponsored by the referenced organizations.
              Our tools do not diagnose conditions or replace clinical consultations.
            </p>
          </div>
        </div>

        {/* Source Directory Transparency Table / Cards */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#78917B]">
                Bibliography & Grounding
              </span>
              <h3 className="font-editorial text-2xl text-[#24352F] font-normal">
                Accredited Sources Referenced in this Project
              </h3>
            </div>
            <span className="text-xs text-[#536760]">
              All external links open official public health portals.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedSourcesList.map((source, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DDE5DF] p-5 flex flex-col justify-between hover:border-[#78917B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#315C50] px-2 py-0.5 rounded bg-[#E4EEE6]">
                      {source.role}
                    </span>
                  </div>
                  <h4 className="font-semibold text-base text-[#24352F]">
                    {source.name}
                  </h4>
                  <p className="mt-2 text-xs text-[#536760] leading-relaxed">
                    {source.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#EAE6D8] text-[11px] text-[#78917B]">
                    <strong>Cited in:</strong> {source.citedIn}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE6D8]">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315C50] hover:text-[#24352F]"
                  >
                    <span>Visit Source Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
