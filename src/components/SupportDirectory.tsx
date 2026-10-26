"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Compass,
  ExternalLink,
  ShieldAlert,
  Users,
  Stethoscope,
  HeartHandshake,
  BookMarked,
  CheckCircle,
} from "lucide-react";
import {
  DIRECTORY_RESOURCES,
  DirectoryCategory,
  DirectoryResource,
} from "@/data/directory";

const CATEGORIES: DirectoryCategory[] = [
  "All",
  "Peer-Support Communities",
  "Professional Care",
  "Family & Caregiver Support",
  "Student & Young-Adult",
  "Educational & Self-Help",
];

export const SupportDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<DirectoryCategory>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSupportType, setSelectedSupportType] = useState<string>("All");

  const filteredResources = useMemo(() => {
    return DIRECTORY_RESOURCES.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesSupportType =
        selectedSupportType === "All" ||
        resource.supportType === selectedSupportType;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        resource.name.toLowerCase().includes(query) ||
        resource.organization.toLowerCase().includes(query) ||
        resource.shortDescription.toLowerCase().includes(query) ||
        resource.region.toLowerCase().includes(query) ||
        resource.audience.toLowerCase().includes(query);

      return matchesCategory && matchesSupportType && matchesSearch;
    });
  }, [selectedCategory, selectedSupportType, searchQuery]);

  const supportTypeIcon = (type: DirectoryResource["supportType"]) => {
    switch (type) {
      case "Peer Support":
        return <Users className="w-3.5 h-3.5 text-[#315C50]" />;
      case "Clinical / Professional Care":
        return <Stethoscope className="w-3.5 h-3.5 text-[#315C50]" />;
      case "Helpline & Triage":
        return <HeartHandshake className="w-3.5 h-3.5 text-[#315C50]" />;
      case "Informational / Self-Help":
        return <BookMarked className="w-3.5 h-3.5 text-[#315C50]" />;
      default:
        return <CheckCircle className="w-3.5 h-3.5 text-[#315C50]" />;
    }
  };

  return (
    <section
      id="support-directory"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F8F6EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#315C50]" />
            Vetted External Organizations
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            Support Resource Directory
          </h2>
          <p className="mt-3 text-base text-[#536760] leading-relaxed">
            A curated index of legitimate support services, peer groups, and clinical navigators.
            We clearly distinguish peer emotional support from licensed clinical care so you can
            find the appropriate level of assistance.
          </p>

          {/* Distinguishing Notice */}
          <div className="mt-4 p-3.5 rounded-xl bg-white border border-[#DDE5DF] text-xs text-[#24352F] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#78917B] shrink-0 mt-0.5" />
            <p>
              <strong>Important Clarity:</strong> Peer-support communities offer shared mutual
              connection and listening; they are not a substitute for clinical diagnosis or
              therapy. For immediate crisis, please utilize the 24/7 helplines detailed in our
              Urgent Support section.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 space-y-4">
          {/* Top row: search + support type filter */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#78917B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="directory-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, organization, region, or keywords..."
                className="w-full pl-9 pr-4 py-2.5 bg-white rounded-full border border-[#DDE5DF] text-xs text-[#24352F] placeholder-[#78917B] focus:outline-none focus:ring-2 focus:ring-[#315C50] focus:border-transparent transition-all"
                aria-label="Search directory resources"
              />
              {searchQuery && (
                <button
                  id="directory-clear-search-btn"
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#78917B] hover:text-[#24352F]"
                >
                  ×
                </button>
              )}
            </div>

            {/* Support Type Filter Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#536760] font-medium hidden sm:inline">
                Support Type:
              </span>
              <select
                id="directory-support-type-select"
                value={selectedSupportType}
                onChange={(e) => setSelectedSupportType(e.target.value)}
                className="bg-white border border-[#DDE5DF] rounded-full px-3.5 py-2 text-xs text-[#24352F] focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                aria-label="Filter by support type"
              >
                <option value="All">All Support Types</option>
                <option value="Peer Support">Peer Support</option>
                <option value="Clinical / Professional Care">Clinical / Professional</option>
                <option value="Helpline & Triage">Helpline & Triage</option>
                <option value="Informational / Self-Help">Educational / Self-Help</option>
              </select>
            </div>
          </div>

          {/* Category Pills Bar */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label="Resource Categories"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                id={`directory-cat-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={selectedCategory === category}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                  selectedCategory === category
                    ? "bg-[#315C50] text-[#F8F6EF] shadow-2xs"
                    : "bg-white text-[#536760] border border-[#DDE5DF] hover:bg-[#E4EEE6]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl border border-[#DDE5DF] p-6 flex flex-col justify-between hover:border-[#78917B] hover:shadow-xs transition-all"
            >
              <div>
                {/* Header badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E4EEE6] text-[#315C50] text-[11px] font-semibold">
                    {supportTypeIcon(res.supportType)}
                    {res.supportType}
                  </span>
                  <span className="text-[11px] font-medium text-[#78917B] px-2 py-0.5 rounded bg-[#F8F6EF]">
                    {res.cost}
                  </span>
                </div>

                {/* Organization & Name */}
                <h3 className="font-editorial text-xl font-normal text-[#24352F] leading-snug">
                  {res.name}
                </h3>
                <p className="text-[11px] text-[#78917B] font-medium mt-0.5">
                  Operated by: {res.organization}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs text-[#536760] leading-relaxed">
                  {res.shortDescription}
                </p>

                {/* Region & Access Mode */}
                <div className="mt-3.5 pt-3 border-t border-[#EAE6D8] space-y-1.5 text-[11px] text-[#536760]">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#24352F]">Region:</span>
                    <span>{res.region}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#24352F]">Access:</span>
                    <span>{res.accessMode}</span>
                  </div>
                  {res.phone && (
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#24352F]">Phone / Code:</span>
                      <span className="font-bold text-[#315C50]">{res.phone}</span>
                    </div>
                  )}
                </div>

                {/* Verified Points */}
                <div className="mt-3.5 pt-3 border-t border-[#EAE6D8]">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#78917B] block mb-1.5">
                    Verified Program Features
                  </span>
                  <ul className="space-y-1 text-[11px] text-[#24352F]">
                    {res.verifiedDetails.slice(0, 2).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#315C50]">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Notice & Action */}
              <div className="mt-5 pt-3 border-t border-[#EAE6D8] space-y-3">
                <p className="text-[10px] text-[#78917B] italic">
                  Note: {res.availabilityNotice}
                </p>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl bg-[#E4EEE6] text-[#315C50] font-semibold text-xs hover:bg-[#315C50] hover:text-[#F8F6EF] transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                >
                  <span>Visit Official Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="mt-12 text-center py-12 px-4 bg-white rounded-2xl border border-dashed border-[#DDE5DF]">
            <p className="font-editorial text-lg text-[#24352F]">
              No resources match your filter criteria.
            </p>
            <p className="text-xs text-[#536760] mt-1">
              Try choosing &ldquo;All&rdquo; categories or clearing the search query.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedSupportType("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#315C50] text-[#F8F6EF] text-xs font-medium hover:bg-[#24352F] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
