import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Open Circle — Mental Health Awareness & Support",
  description:
    "A calm, trustworthy, and human-centered space for mental health education, verified support resources, private reflection, and guided breathing.",
  keywords: [
    "mental health",
    "mental health support",
    "Tele-MANAS",
    "crisis support",
    "anxiety and depression",
    "breathing exercise",
    "mental health directory",
    "NHS",
    "WHO",
    "NIMH",
  ],
  authors: [{ name: "Open Circle Project" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8F6EF] text-[#24352F] font-sans antialiased selection:bg-[#E4EEE6] selection:text-[#315C50]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#315C50] focus:text-[#F8F6EF] focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E8CDA2]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
