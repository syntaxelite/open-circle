export interface HelplineItem {
  id: string;
  country: string;
  serviceName: string;
  governingBody: string;
  numbers: {
    display: string;
    dial: string;
    type: "Toll-Free Shortcode" | "Toll-Free Phone" | "Emergency Services" | "Text / SMS";
  }[];
  hours: string;
  languages: string;
  cost: string;
  officialUrl: string;
  description: string;
  immediateActions: string[];
}

export const URGENT_HELPLINES: HelplineItem[] = [
  {
    id: "india",
    country: "India",
    serviceName: "Tele-MANAS (Tele Mental Health Assistance and Networking Across States)",
    governingBody: "Ministry of Health and Family Welfare (MoHFW), Govt. of India",
    numbers: [
      {
        display: "14416",
        dial: "tel:14416",
        type: "Toll-Free Shortcode",
      },
      {
        display: "1800-891-4416",
        dial: "tel:18008914416",
        type: "Toll-Free Phone",
      },
      {
        display: "112 (National Emergency)",
        dial: "tel:112",
        type: "Emergency Services",
      },
    ],
    hours: "24 hours a day, 7 days a week, 365 days a year",
    languages: "Available in English, Hindi, and 20+ regional Indian languages",
    cost: "Completely Free & Confidential",
    officialUrl: "https://telemanas.mohfw.gov.in/",
    description:
      "India's dedicated national tele-mental health programme launched to provide accessible, dignified, and quality mental health counselling to every citizen. Operates with a two-tier system connecting callers to trained mental health counsellors, clinical psychologists, and psychiatrists.",
    immediateActions: [
      "If you or someone around you is in immediate danger of self-harm or medical emergency, call 112 immediately or reach the casualty/emergency ward of the nearest government or private hospital.",
      "For round-the-clock free mental health counselling and psychological first-aid, dial 14416 from any mobile phone or landline in India.",
    ],
  },
  {
    id: "usa-canada",
    country: "United States & Canada",
    serviceName: "988 Suicide & Crisis Lifeline",
    governingBody: "Substance Abuse and Mental Health Services Administration (SAMHSA) & Public Health Agency of Canada",
    numbers: [
      {
        display: "988 (Call or Text)",
        dial: "tel:988",
        type: "Toll-Free Shortcode",
      },
      {
        display: "911 (Emergency Services)",
        dial: "tel:911",
        type: "Emergency Services",
      },
    ],
    hours: "24/7, year-round",
    languages: "English and Spanish, with interpretation services for 240+ additional languages",
    cost: "Free and confidential",
    officialUrl: "https://988lifeline.org/",
    description:
      "The 988 Suicide & Crisis Lifeline provides 24/7, free, and confidential support for people in suicidal crisis or emotional distress across the US and Canada. You can call or text 988 to connect directly with trained crisis counselors.",
    immediateActions: [
      "If you are experiencing life-threatening danger, call 911 or visit the nearest emergency room.",
      "Dial or text 988 to talk with a trained counselor right now.",
    ],
  },
  {
    id: "uk",
    country: "United Kingdom",
    serviceName: "NHS 111 Mental Health Services & Samaritans",
    governingBody: "National Health Service (NHS England, Scotland, Wales)",
    numbers: [
      {
        display: "111 (Select Mental Health)",
        dial: "tel:111",
        type: "Toll-Free Shortcode",
      },
      {
        display: "116 123 (Samaritans)",
        dial: "tel:116123",
        type: "Toll-Free Phone",
      },
      {
        display: "999 (Emergency Services)",
        dial: "tel:999",
        type: "Emergency Services",
      },
    ],
    hours: "24 hours a day, 7 days a week",
    languages: "English and Welsh, with interpreter services available",
    cost: "Free on all UK networks",
    officialUrl: "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/",
    description:
      "In England, you can call NHS 111 and select option 2 for 24/7 urgent mental health support from clinical teams. Samaritans provides a free, round-the-clock listening line on 116 123.",
    immediateActions: [
      "For a medical or life-threatening emergency, dial 999 or attend the nearest Accident & Emergency (A&E) department.",
      "Call 111 to reach your local NHS urgent mental health crisis line.",
    ],
  },
  {
    id: "international",
    country: "International (All Other Countries)",
    serviceName: "Global Verified Helplines Directory",
    governingBody: "Find A Helpline (ThroughLine) & Befrienders Worldwide",
    numbers: [],
    hours: "Varies by country and regional service",
    languages: "Multilingual across 130+ nations",
    cost: "Free & confidential local resources",
    officialUrl: "https://findahelpline.com/",
    description:
      "If you are located outside India, the UK, or North America, Find A Helpline provides a vetted, free, and confidential lookup of crisis support, suicide prevention, and emotional support hotlines in over 130 countries.",
    immediateActions: [
      "Find your country's national emergency services number (e.g. 112 in the EU, 000 in Australia, 111 in New Zealand).",
      "Visit https://findahelpline.com/ to discover vetted free helplines operating in your specific area.",
    ],
  },
];
