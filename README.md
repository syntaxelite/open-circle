# Open Circle — Mental Health Awareness & Support

An open, calm, and human-centered mental health awareness platform developed as a college project and real-world demonstration. Grounded in evidence-based guidance from the World Health Organization (WHO), National Health Service (NHS England), National Institute of Mental Health (NIMH), and India's Tele-MANAS initiative.

---

## Key Features

1. **Evidence-Based Learning Library**
   - 6 thoroughly researched psychoeducational guides covering Understanding Mental Health, Stress & Anxiety, Depression, 5 Steps to Wellbeing, Supporting Others, and Professional Care.
   - Grounded in citations from WHO, NHS, and NIMH with direct links to official publications.
   - Interactive modal reader with key takeaways and practical micro-habits.
   - Real-time search and category filtering with responsive empty states.

2. **Verified Support Resource Directory**
   - Curated directory of 12 legitimate organizations across peer support, clinical care, helplines, family support, and student care.
   - Clearly distinguishes peer emotional support from licensed clinical care.
   - Search by organization name, category, region, or keywords.

3. **Private In-Browser Mood Check-in**
   - Non-diagnostic reflection on 5 feelings: *Rough*, *Anxious*, *Okay*, *Good*, and *Hopeful*.
   - 100% private: selections stay client-side in the browser and are never stored, tracked, or transmitted.
   - Immediate gentle reflection, small coping suggestions, and a single-click reset.

4. **Guided Breathing Space**
   - 3 breathing techniques: Box Breathing (4-4-4-4), Calming Breath (4-7-8), and Equal Breathing (4-4).
   - Organic visual breathing circle with start, pause, resume, and reset controls.
   - Accessible Text Mode with a high-contrast progress bar for users who prefer text or have reduced motion preferences.

5. **24/7 Urgent Crisis Support**
   - Country switcher for India, United States & Canada, United Kingdom, and International directory.
   - Verified toll-free numbers:
     - **India (Tele-MANAS)**: `14416` or `1800-891-4416`
     - **USA & Canada**: `988`
     - **UK**: `111` (Mental health option) or `116 123` (Samaritans)
     - **International**: Direct link to FindAHelpline.com (130+ countries)
   - Prominent disclaimer clarifying that this website is an educational resource and not an emergency service.

6. **Accessibility & Editorial Design System**
   - Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.
   - Human-centered calm palette: Warm cream (`#F8F6EF`), Sage green (`#315C50`), Muted olive (`#78917B`), Soft green (`#E4EEE6`), Charcoal (`#24352F`), and Warm beige (`#E8CDA2`).
   - Accessible typography (*Plus Jakarta Sans* and *Newsreader* serif).
   - System and manual reduced-motion toggle.
   - Full keyboard navigation and semantic skip-links.

7. **Contact & Academic Inquiries**
   - Client-side validated contact form with distinct demonstration notice.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ installed on your system.
- npm (comes bundled with Node.js).

### Installation
Clone or navigate to the repository directory and install dependencies:
```bash
npm install
```

### Running Locally
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Quality Checks & Verification
- **Run Linter**:
  ```bash
  npm run lint
  ```
- **Run TypeScript Type Check**:
  ```bash
  npx tsc --noEmit
  ```
- **Build Production Bundle**:
  ```bash
  npm run build
  ```

---

## Privacy & Safety Disclaimers

- **Zero Telemetry**: No personal health data, mood selections, or contact inputs are logged, tracked, or shared.
- **Educational Only**: Content is for educational awareness and does not constitute clinical evaluation, diagnosis, or personalized treatment.
- **Crisis Response**: If in acute distress or medical danger, please contact local emergency authorities (112 / 911 / 999) or verified 24/7 helplines (Tele-MANAS `14416` / Lifeline `988`).

---

## License & Project Context
Developed as an open-source educational project for college evaluation and real-world mental health advocacy demonstration.
