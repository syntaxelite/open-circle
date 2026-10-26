"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  AlertTriangle,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { URGENT_HELPLINES } from "@/data/helplines";

export const UrgentSupport: React.FC = () => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>("india");

  const currentItem =
    URGENT_HELPLINES.find((h) => h.id === selectedCountryId) ||
    URGENT_HELPLINES[0];

  return (
    <section
      id="urgent-support"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F2F7F3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent High-Contrast Emergency Notice */}
        <div className="rounded-3xl bg-[#24352F] text-[#F8F6EF] p-6 sm:p-8 border border-[#315C50] shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#315C50] text-[#E8CDA2] text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                Immediate Crisis Support
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                If You or Someone Around You is in Immediate Danger
              </h2>
              <p className="text-xs sm:text-sm text-[#D8DFD9] leading-relaxed">
                Open Circle is an educational website and is <strong>not</strong> an emergency
                service or clinical medical facility. If someone is experiencing life-threatening
                harm, please call your local emergency services or visit the nearest hospital
                emergency department immediately.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:112"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#E8CDA2] text-[#24352F] font-bold text-sm hover:bg-white transition-colors shadow-xs"
              >
                Call 112 (India / EU Emergency)
              </a>
              <a
                href="tel:988"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#315C50] text-white font-bold text-sm hover:bg-[#3D7062] transition-colors border border-[#78917B]/40"
              >
                Call / Text 988 (US / Canada)
              </a>
            </div>
          </div>
        </div>

        {/* Section Heading & Country Switcher */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-[#315C50]" />
            Verified Free Crisis Lines
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            National Helplines & Crisis Directories
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#536760] leading-relaxed">
            Free, confidential, and official crisis lines operated by government health ministries
            and certified mental health networks. Select your region below to view verified contact
            methods.
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div
          className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Select country for crisis resources"
        >
          {URGENT_HELPLINES.map((helpline) => (
            <button
              key={helpline.id}
              id={`urgent-country-tab-${helpline.id}`}
              type="button"
              onClick={() => setSelectedCountryId(helpline.id)}
              role="tab"
              aria-selected={selectedCountryId === helpline.id}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                selectedCountryId === helpline.id
                  ? "bg-[#315C50] text-[#F8F6EF] shadow-2xs font-semibold"
                  : "bg-white text-[#536760] border border-[#DDE5DF] hover:bg-[#E4EEE6]"
              }`}
            >
              {helpline.country}
            </button>
          ))}
        </div>

        {/* Active Helpline Details Card */}
        <div className="mt-6 bg-white rounded-3xl border border-[#DDE5DF] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Service Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#78917B]">
                  Official Government / Public Service
                </span>
                <h4 className="font-editorial text-2xl sm:text-3xl text-[#24352F] font-normal leading-snug">
                  {currentItem.serviceName}
                </h4>
                <p className="text-xs text-[#78917B] mt-0.5 font-medium">
                  Operated by: {currentItem.governingBody}
                </p>
              </div>

              <p className="text-sm text-[#536760] leading-relaxed">
                {currentItem.description}
              </p>

              {/* Verified Metadata Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#24352F]">
                <div className="p-3 rounded-xl bg-[#F8F6EF] border border-[#EAE6D8]">
                  <span className="font-semibold text-[#78917B] block text-[11px]">
                    Operating Hours
                  </span>
                  <span className="font-medium">{currentItem.hours}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F6EF] border border-[#EAE6D8]">
                  <span className="font-semibold text-[#78917B] block text-[11px]">
                    Cost & Privacy
                  </span>
                  <span className="font-medium">{currentItem.cost}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F6EF] border border-[#EAE6D8] sm:col-span-2">
                  <span className="font-semibold text-[#78917B] block text-[11px]">
                    Language Accessibility
                  </span>
                  <span className="font-medium">{currentItem.languages}</span>
                </div>
              </div>

              {/* Immediate Guidance Steps */}
              <div className="pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#315C50] block mb-2">
                  Recommended Immediate Steps
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#24352F]">
                  {currentItem.immediateActions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#315C50] shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Portal Link */}
              <div className="pt-2">
                <a
                  href={currentItem.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315C50] hover:text-[#24352F] underline"
                >
                  <span>Visit Official {currentItem.country} Service Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Direct Dial Telephone Action Box */}
            <div className="lg:col-span-5 bg-[#F8F6EF] rounded-2xl border border-[#DDE5DF] p-6 space-y-4">
              <h5 className="font-editorial text-lg text-[#24352F] font-medium">
                Direct Contact Lines
              </h5>
              <p className="text-xs text-[#536760] leading-relaxed">
                Click any button below to initiate a direct telephone call on your device. All lines
                listed are free and toll-free.
              </p>

              {currentItem.numbers.length > 0 ? (
                <div className="space-y-2.5">
                  {currentItem.numbers.map((num, idx) => (
                    <a
                      key={idx}
                      href={num.dial}
                      className="w-full p-4 rounded-xl bg-white border border-[#DDE5DF] hover:border-[#315C50] hover:bg-[#E4EEE6]/40 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#78917B] block">
                          {num.type}
                        </span>
                        <span className="text-lg font-bold text-[#315C50] group-hover:text-[#24352F] transition-colors">
                          {num.display}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#E4EEE6] text-[#315C50] flex items-center justify-center group-hover:bg-[#315C50] group-hover:text-white transition-colors">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                /* Fallback for international directory */
                <div className="space-y-3">
                  <p className="text-xs text-[#536760]">
                    Find A Helpline lists validated contact numbers for 130+ nations. Search by your
                    specific country code:
                  </p>
                  <a
                    href="https://findahelpline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#315C50] text-[#F8F6EF] font-bold text-xs hover:bg-[#24352F] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Open FindAHelpline.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* What to expect card */}
              <div className="pt-3 border-t border-[#EAE6D8] text-[11px] text-[#6E827B] space-y-1">
                <span className="font-semibold text-[#24352F] block">
                  What happens when you call?
                </span>
                <p>
                  A trained mental health counselor will answer, listen calmly without judgment,
                  support you through distress, and connect you with local care if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
