"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  Info,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "success">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please provide your name or how you wish to be addressed.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format (e.g. name@example.com).";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write your message.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters so we can understand your inquiry.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStatus("idle");
      return;
    }

    setErrors({});
    // Local validation succeeds. Display transparent demonstration acknowledgement.
    setSubmittedStatus("success");
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      topic: "general",
      message: "",
    });
    setErrors({});
    setSubmittedStatus("idle");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-b border-[#EAE6D8] bg-[#F8F6EF]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4EEE6] border border-[#78917B]/30 text-xs font-semibold text-[#315C50] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#315C50]" />
            Project Inquiries & Feedback
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#24352F] tracking-tight font-normal">
            Contact & Academic Inquiries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536760] leading-relaxed">
            Have questions about this educational project, feedback on accessibility, or a
            suggestion to correct a verified resource? Reach out directly below.
          </p>
        </div>

        {/* Demonstration Disclaimer Alert */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-[#DDE5DF] text-xs text-[#536760] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#78917B] shrink-0 mt-0.5" />
          <p>
            <strong>Project Demonstration Notice:</strong> This contact form performs client-side
            validation to showcase frontend interaction patterns. For official project inquiries or
            academic evaluation, you may also email the maintainers directly at{" "}
            <a
              href="mailto:contact.opencircle@project.edu"
              className="text-[#315C50] font-semibold underline"
            >
              contact.opencircle@project.edu
            </a>
            . <em>Do not use this form for urgent mental health emergencies—use our Get Help section.</em>
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="mt-6 bg-white rounded-3xl border border-[#DDE5DF] p-6 sm:p-10 shadow-xs">
          {submittedStatus === "success" ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in-50 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#E4EEE6] text-[#315C50] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl text-[#24352F] font-normal">
                Message Validated Successfully
              </h3>
              <p className="text-xs sm:text-sm text-[#536760] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your feedback has been validated
                locally according to standard web form specifications. In a live production
                deployment, this would trigger an authenticated backend mailer or webhook.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-5 py-2.5 rounded-full bg-[#315C50] text-[#F8F6EF] text-xs font-semibold hover:bg-[#24352F] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#24352F] mb-1.5"
                  >
                    Your Name <span className="text-[#315C50]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#24352F] placeholder-[#78917B] focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                      errors.name
                        ? "border-red-400 bg-red-50/30"
                        : "border-[#DDE5DF] bg-[#F8F6EF]/40"
                    }`}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-[11px] text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#24352F] mb-1.5"
                  >
                    Email Address <span className="text-[#315C50]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. alex@university.edu"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#24352F] placeholder-[#78917B] focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                      errors.email
                        ? "border-red-400 bg-red-50/30"
                        : "border-[#DDE5DF] bg-[#F8F6EF]/40"
                    }`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-[11px] text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Inquiry Topic */}
              <div>
                <label
                  htmlFor="contact-topic"
                  className="block text-xs font-semibold text-[#24352F] mb-1.5"
                >
                  Inquiry Topic
                </label>
                <select
                  id="contact-topic"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5DF] bg-[#F8F6EF]/40 text-xs text-[#24352F] focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                >
                  <option value="general">General Educational Feedback</option>
                  <option value="resource">Suggest a Verified Resource or Correction</option>
                  <option value="academic">College Project / Evaluator Review</option>
                  <option value="accessibility">Accessibility & Usability Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#24352F] mb-1.5"
                >
                  Your Message <span className="text-[#315C50]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share your thoughts, suggestions, or project questions..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#24352F] placeholder-[#78917B] focus:outline-none focus:ring-2 focus:ring-[#315C50] ${
                    errors.message
                      ? "border-red-400 bg-red-50/30"
                      : "border-[#DDE5DF] bg-[#F8F6EF]/40"
                  }`}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-[11px] text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-[#78917B]">
                  * Required fields
                </span>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#315C50] text-[#F8F6EF] font-semibold text-xs hover:bg-[#24352F] transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#315C50]"
                >
                  <span>Submit Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
