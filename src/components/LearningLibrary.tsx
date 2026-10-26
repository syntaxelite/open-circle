"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  BookOpen,
  ExternalLink,
  Clock,
  X,
  CheckCircle2,
  AlertCircle,
  Tag,
  ArrowRight,
} from "lucide-react";
import { LEARNING_ARTICLES, LearningArticle } from "@/data/articles";

export const LearningLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<LearningArticle | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(LEARNING_ARTICLES.map((a) => a.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredArticles = useMemo(() => {
    return LEARNING_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.keyTakeaways.some((t) => t.toLowerCase().includes(query)) ||
        article.verifiedSource.publisher.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="learning-library"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F8F6EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#315C50]" />
            Evidence-Based Education
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            Mental Health Learning Library
          </h2>
          <p className="mt-3 text-base text-[#536760] leading-relaxed">
            Accessible, thoughtfully researched explanations covering emotional well-being,
            stress, low mood, and interpersonal support. Each article is directly grounded in public
            guidance from the WHO, NHS, or NIMH.
          </p>

          {/* Educational Disclaimer Banner */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#E4EEE6]/70 border border-[#78917B]/25 text-xs text-[#24352F] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#315C50] shrink-0 mt-0.5" />
            <p>
              <strong>Educational Notice:</strong> These articles provide general psychoeducation
              and are not intended as personal medical advice or individual diagnostic criteria.
              Always consult a licensed medical or psychological provider for clinical evaluations.
            </p>
          </div>
        </div>

        {/* Search and Category Filters */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Category Pills */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none"
            role="tablist"
            aria-label="Article categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                id={`library-cat-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
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

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#78917B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="library-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics or keywords..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-[#DDE5DF] text-xs text-[#24352F] placeholder-[#78917B] focus:outline-none focus:ring-2 focus:ring-[#315C50] focus:border-transparent transition-all"
              aria-label="Search learning articles"
            />
            {searchQuery && (
              <button
                id="library-clear-search-btn"
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78917B] hover:text-[#24352F]"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.slug}`}
              className="bg-white rounded-2xl border border-[#DDE5DF] p-6 flex flex-col justify-between hover:border-[#78917B] hover:shadow-xs transition-all"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#E4EEE6] text-[#315C50] text-[11px] font-semibold">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#78917B]">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl font-normal text-[#24352F] leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="mt-2.5 text-xs text-[#536760] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* Key takeaway snippet */}
                <div className="mt-4 pt-3.5 border-t border-[#EAE6D8]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78917B] block mb-1.5">
                    Key Grounding Point
                  </span>
                  <p className="text-xs text-[#24352F] italic">
                    “{article.keyTakeaways[0]}”
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#EAE6D8] flex items-center justify-between">
                <div className="text-[11px] text-[#78917B] truncate max-w-[170px]" title={article.verifiedSource.publisher}>
                  Source: {article.verifiedSource.publisher}
                </div>
                <button
                  id={`read-article-btn-${article.slug}`}
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4EEE6] text-[#315C50] font-semibold text-xs hover:bg-[#315C50] hover:text-[#F8F6EF] transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="mt-12 text-center py-12 px-4 bg-white rounded-2xl border border-dashed border-[#DDE5DF]">
            <p className="font-editorial text-lg text-[#24352F]">
              No articles found matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <p className="text-xs text-[#536760] mt-1">
              Try searching for &ldquo;stress&rdquo;, &ldquo;anxiety&rdquo;, or &ldquo;self-care&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#315C50] text-[#F8F6EF] text-xs font-medium hover:bg-[#24352F] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Full Article Reader Modal / Drawer */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#F8F6EF] w-full max-w-3xl rounded-3xl border border-[#DDE5DF] shadow-xl overflow-hidden relative max-h-[90vh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-white border-b border-[#EAE6D8] flex items-start justify-between gap-4 sticky top-0 z-10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#E4EEE6] text-[#315C50] text-xs font-semibold">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-[#78917B] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activeArticle.readTime}
                  </span>
                </div>
                <h2
                  id="modal-article-title"
                  className="font-editorial text-2xl sm:text-3xl text-[#24352F] font-normal leading-tight"
                >
                  {activeArticle.title}
                </h2>
              </div>
              <button
                id="close-article-modal-btn"
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full bg-[#F8F6EF] text-[#24352F] hover:bg-[#E4EEE6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#24352F]">
              {/* Summary Lead */}
              <p className="text-base text-[#536760] font-normal leading-relaxed border-l-2 border-[#315C50] pl-4 italic">
                {activeArticle.summary}
              </p>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-white border border-[#DDE5DF]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#315C50] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#315C50]" />
                  Key Takeaways
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#24352F]">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#315C50] font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Sections */}
              <div className="space-y-6 pt-2">
                {activeArticle.sections.map((section, idx) => (
                  <section key={idx} className="space-y-2.5">
                    <h3 className="font-editorial text-xl font-medium text-[#24352F]">
                      {section.title}
                    </h3>
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm text-[#536760] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Practical Micro-Habit */}
              <div className="p-5 rounded-2xl bg-[#E4EEE6] border border-[#78917B]/40">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#315C50] block mb-1">
                  Practical Exercise
                </span>
                <h4 className="font-semibold text-sm text-[#24352F]">
                  {activeArticle.practicalStep.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#536760] mt-1">
                  {activeArticle.practicalStep.description}
                </p>
              </div>

              {/* Source Verification Box */}
              <div className="p-4 rounded-xl bg-white border border-[#DDE5DF] text-xs text-[#6E827B] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-semibold text-[#24352F] block">
                    Verified Source: {activeArticle.verifiedSource.name}
                  </span>
                  <span className="text-[11px] text-[#78917B] block mt-0.5">
                    Publisher: {activeArticle.verifiedSource.publisher} • {activeArticle.verifiedSource.reviewDate}
                  </span>
                </div>
                <a
                  href={activeArticle.verifiedSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E4EEE6] text-[#315C50] font-semibold text-xs hover:bg-[#315C50] hover:text-[#F8F6EF] transition-colors shrink-0"
                >
                  <span>View Official Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-[#EAE6D8] flex items-center justify-between">
              <span className="text-xs text-[#78917B]">
                Independent educational synthesis
              </span>
              <button
                id="close-article-footer-btn"
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-full bg-[#315C50] text-[#F8F6EF] font-medium text-xs hover:bg-[#24352F] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
