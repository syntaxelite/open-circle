export type DirectoryCategory =
  | "All"
  | "Peer-Support Communities"
  | "Professional Care"
  | "Family & Caregiver Support"
  | "Student & Young-Adult"
  | "Educational & Self-Help";

export interface DirectoryResource {
  id: string;
  name: string;
  organization: string;
  category: DirectoryCategory;
  supportType: "Peer Support" | "Clinical / Professional Care" | "Informational / Self-Help" | "Helpline & Triage";
  cost: "Free" | "Free (NHS Covered)" | "Free / Optional Paid" | "Covered by Public Health / Variable" | string;
  accessMode: string;
  region: string;
  audience: string;
  phone?: string;
  url: string;
  shortDescription: string;
  verifiedDetails: string[];
  availabilityNotice: string;
}

export const DIRECTORY_RESOURCES: DirectoryResource[] = [
  {
    id: "tele-manas-india",
    name: "Tele-MANAS (Tele Mental Health Assistance and Networking Across States)",
    organization: "Ministry of Health and Family Welfare (MoHFW), Govt. of India / NIMHANS",
    category: "Professional Care",
    supportType: "Helpline & Triage",
    cost: "Free",
    accessMode: "Toll-Free Phone (24/7)",
    region: "India (All States & UTs)",
    audience: "Anyone in India seeking mental health support or crisis counseling",
    phone: "14416 / 1800-891-4416",
    url: "https://telemanas.mohfw.gov.in/",
    shortDescription:
      "India's official national 24/7 mental health helpline providing immediate psychological first aid, tele-counseling, and connections to clinical psychologists and psychiatrists.",
    verifiedDetails: [
      "Operates 24/7 toll-free nationwide via short code 14416 and 1800-891-4416.",
      "Multilingual counseling available in English, Hindi, and over 18 regional Indian languages.",
      "Two-tier structure: trained counselors handle initial triage and can escalate to clinical psychologists or psychiatrists for audio/video consultation and e-prescriptions if necessary.",
      "Coordinated by NIMHANS as the apex national nodal center.",
    ],
    availabilityNotice:
      "Service is free and active 24/7. Regional language availability may vary based on local center shifts.",
  },
  {
    id: "7-cups",
    name: "7 Cups of Tea — Free Emotional Listening",
    organization: "7 Cups Inc.",
    category: "Peer-Support Communities",
    supportType: "Peer Support",
    cost: "Free / Optional Paid",
    accessMode: "Online Web Chat & Mobile App",
    region: "Global",
    audience: "Anyone seeking compassionate active listening or peer community",
    url: "https://www.7cups.com/",
    shortDescription:
      "A global online platform offering 1-on-1 confidential chats with trained volunteer active listeners, group support rooms, and guided wellness paths.",
    verifiedDetails: [
      "Free 24/7 text-based active listening provided by volunteers who have completed listening training.",
      "Strictly non-clinical peer support: listeners provide empathy, not therapy, diagnosis, or crisis intervention.",
      "Anonymous participation without disclosing personal identity.",
      "Optional, fee-based licensed therapy is also offered separately for adults wanting professional counseling.",
    ],
    availabilityNotice:
      "Volunteer listeners are available globally 24/7, though wait times can vary during peak hours. Not suitable for emergency crisis.",
  },
  {
    id: "nami-connection",
    name: "NAMI Connection Recovery Support Group",
    organization: "National Alliance on Mental Illness (NAMI)",
    category: "Peer-Support Communities",
    supportType: "Peer Support",
    cost: "Free",
    accessMode: "Online Video & Local In-Person Chapters",
    region: "United States & Online",
    audience: "Adults (18+) living with any mental health condition",
    phone: "1-800-950-6264 (HelpLine)",
    url: "https://www.nami.org/support-education/support-groups/nami-connection/",
    shortDescription:
      "A free, peer-led support group for adults with mental health conditions. Facilitated by trained peers with lived experience who offer mutual understanding and hope.",
    verifiedDetails: [
      "Free 90-minute weekly or bi-weekly peer support sessions.",
      "Follows a structured, non-judgmental model where participants share experiences without unsolicited advice.",
      "Facilitators are trained peers who also live in mental health recovery.",
      "Strictly respects confidentiality and voluntary participation.",
    ],
    availabilityNotice:
      "Meeting schedules, registration links, and virtual formats depend on individual local NAMI affiliates. Please verify your local chapter's timetable.",
  },
  {
    id: "nami-family-support",
    name: "NAMI Family Support Group",
    organization: "National Alliance on Mental Illness (NAMI)",
    category: "Family & Caregiver Support",
    supportType: "Peer Support",
    cost: "Free",
    accessMode: "Online Video & Local In-Person Chapters",
    region: "United States & Online",
    audience: "Adult family members, partners, and caregivers of individuals with mental health conditions",
    phone: "1-800-950-6264 (HelpLine)",
    url: "https://www.nami.org/support-education/support-groups/nami-family-support-group/",
    shortDescription:
      "A peer-led support group designed specifically for family members, caregivers, and loved ones of individuals living with mental health challenges.",
    verifiedDetails: [
      "Led by trained family members who have direct personal experience supporting someone with a mental health condition.",
      "Provides emotional validation, practical coping strategies, and reduced feelings of isolation for caregivers.",
      "Completely free of charge and open to any adult loved one.",
    ],
    availabilityNotice:
      "Groups meet once or twice per month. Please check with your regional affiliate for exact dates and virtual access links.",
  },
  {
    id: "nhs-talking-therapies",
    name: "NHS Talking Therapies for Anxiety and Depression",
    organization: "National Health Service (NHS England)",
    category: "Professional Care",
    supportType: "Clinical / Professional Care",
    cost: "Free (NHS Covered)",
    accessMode: "In-Person, Phone & Video (Self-Referral)",
    region: "United Kingdom (England)",
    audience: "Adults (18+) registered with a GP in England experiencing anxiety or depression",
    url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/",
    shortDescription:
      "Official NHS psychological services offering evidence-based cognitive behavioral therapy (CBT), guided self-help, and counseling with no GP referral required.",
    verifiedDetails: [
      "Allows direct online self-referral without needing to visit a doctor first.",
      "Offers evidence-based psychological therapies including CBT, guided digital programs, and interpersonal counseling.",
      "Staffed by accredited clinical practitioners and psychological wellbeing practitioners.",
    ],
    availabilityNotice:
      "Waiting times vary significantly by local NHS integrated care board. Emergency support is not handled through talking therapies; use NHS 111 or 999 instead.",
  },
  {
    id: "nimh-resource-center",
    name: "NIMH Health Information & Treatment Navigation",
    organization: "National Institute of Mental Health (NIMH / NIH)",
    category: "Educational & Self-Help",
    supportType: "Informational / Self-Help",
    cost: "Free",
    accessMode: "Website, Email & Phone Information Line",
    region: "Global / United States",
    audience: "General public, patients, researchers, and students seeking vetted scientific information",
    phone: "1-866-615-6464",
    url: "https://www.nimh.nih.gov/health",
    shortDescription:
      "The lead federal agency for research on mental disorders, offering authoritative, science-based health topic guides, clinical trial databases, and treatment locating resources.",
    verifiedDetails: [
      "Publishes comprehensive clinical booklets, infographics, and research updates.",
      "Connects users to the official SAMHSA treatment facility locator.",
      "Information staff available Monday through Friday, 8:30 a.m. to 5 p.m. ET (English and Spanish).",
      "Does not offer personal medical advice, diagnoses, or direct medical treatment.",
    ],
    availabilityNotice:
      "Web resources accessible globally 24/7. Information phone line operates on US Eastern Time.",
  },
  {
    id: "youngminds-uk",
    name: "YoungMinds — Youth Mental Health & Parents' Guidance",
    organization: "YoungMinds UK",
    category: "Student & Young-Adult",
    supportType: "Informational / Self-Help",
    cost: "Free",
    accessMode: "Website, Crisis Text Messenger & Parents' Helpline",
    region: "United Kingdom & Global web readers",
    audience: "Children, adolescents, young adults (under 25), and their parents/carers",
    url: "https://www.youngminds.org.uk/",
    shortDescription:
      "A leading UK charity dedicated to young people's mental health, providing age-appropriate coping guides, a dedicated Parents' Helpline, and youth advocacy.",
    verifiedDetails: [
      "Provides practical advice on exam stress, body image, grief, friendships, and identity.",
      "Free Parents' Helpline offering phone and webchat advice for adults worried about a child's mental health.",
      "Offers the YoungMinds Crisis Messenger (free 24/7 text support via text YM to 85258 in the UK).",
    ],
    availabilityNotice:
      "Web resources accessible worldwide. Helpline and text messenger services are geographically restricted to UK residents.",
  },
  {
    id: "active-minds",
    name: "Active Minds — Student Mental Health on Campus",
    organization: "Active Minds Non-Profit",
    category: "Student & Young-Adult",
    supportType: "Peer Support",
    cost: "Free",
    accessMode: "Student Chapters & Digital Community",
    region: "United States & College Campuses",
    audience: "High school, college, and university students (ages 14-25)",
    url: "https://www.activeminds.org/",
    shortDescription:
      "A premier non-profit supporting mental health awareness and peer-to-peer education for young adults with over 600 student-led campus chapters.",
    verifiedDetails: [
      "Pioneered the 'V-A-R' (Validate, Appreciate, Refer) everyday active-listening framework for peers.",
      "Empowers students to reduce stigma, advocate for campus policy improvements, and support friends.",
      "Provides free digital workshops and leadership toolkits for students.",
    ],
    availabilityNotice:
      "Campus chapters follow academic calendars. Digital tools and guides are accessible anytime online.",
  },
  {
    id: "nhs-every-mind-matters",
    name: "NHS Every Mind Matters",
    organization: "National Health Service (NHS England / UK Gov)",
    category: "Educational & Self-Help",
    supportType: "Informational / Self-Help",
    cost: "Free",
    accessMode: "Web Portal & Interactive Mind Plan",
    region: "Global (English)",
    audience: "Individuals looking for practical everyday self-help and actionable lifestyle steps",
    url: "https://www.nhs.uk/every-mind-matters/",
    shortDescription:
      "NHS-developed interactive platform providing personalized 5-question 'Mind Plans', audio relaxation guides, and expert advice for managing anxiety, low mood, and sleep.",
    verifiedDetails: [
      "Includes evidence-backed audio guides for deep breathing, progressive muscle relaxation, and unhelpful thinking habits.",
      "Features specific resources for children, teens, and working professionals.",
      "Completely free with no advertising or commercial sponsorships.",
    ],
    availabilityNotice:
      "Freely accessible online at all times.",
  },
  {
    id: "find-a-helpline",
    name: "Find A Helpline — Global Crisis Service Directory",
    organization: "ThroughLine / International Support Network",
    category: "Educational & Self-Help",
    supportType: "Helpline & Triage",
    cost: "Free",
    accessMode: "Web Directory",
    region: "Global (Over 130 Countries)",
    audience: "Anyone anywhere seeking verified local crisis support, suicide prevention lines, or domestic safety helplines",
    url: "https://findahelpline.com/",
    shortDescription:
      "A vetted, independent international directory connecting people to free, confidential crisis lines and text services in over 130 countries worldwide.",
    verifiedDetails: [
      "Filters resources by country, issue (crisis, anxiety, depression, LGBTQ+, youth), and contact mode (phone, SMS, webchat).",
      "Regularly audits and verifies contact numbers to prevent outdated helpline listings.",
      "Strictly free to use with zero data tracking of user queries.",
    ],
    availabilityNotice:
      "Online directory accessible 24/7. Operating hours of individual helplines are listed directly on their specific profile cards.",
  },
  {
    id: "befrienders-worldwide",
    name: "Befrienders Worldwide",
    organization: "Befrienders Worldwide Charity",
    category: "Peer-Support Communities",
    supportType: "Peer Support",
    cost: "Free",
    accessMode: "Volunteer Hotlines & Email Support",
    region: "Global (32 Countries)",
    audience: "Individuals in emotional distress or despair, and those concerned about suicide",
    url: "https://www.befrienders.org/",
    shortDescription:
      "A global volunteer network of 349 emotional support centers across 32 countries providing compassionate, non-judgmental active listening to people in distress.",
    verifiedDetails: [
      "Member helplines operate with trained volunteers who respect total confidentiality.",
      "Offers open-ended listening without attempting to tell callers what they should do.",
      "Includes an interactive search tool to locate local suicide prevention centers across five continents.",
    ],
    availabilityNotice:
      "Individual center hours depend on local volunteer availability. Please check the specific center listing on the website.",
  },
  {
    id: "who-mental-health-portal",
    name: "WHO Global Mental Health Program & Fact Sheets",
    organization: "World Health Organization (United Nations)",
    category: "Educational & Self-Help",
    supportType: "Informational / Self-Help",
    cost: "Free",
    accessMode: "Public Research & Guideline Repository",
    region: "Global (6 UN Languages)",
    audience: "Students, educators, public health practitioners, and citizens worldwide",
    url: "https://www.who.int/health-topics/mental-health",
    shortDescription:
      "The definitive public health portal from the World Health Organization, offering global mental health reports, psychological first-aid manuals, and human-rights-based mental health initiatives.",
    verifiedDetails: [
      "Author of the WHO Mental Health Gap Action Programme (mhGAP) and Comprehensive Mental Health Action Plan.",
      "Offers freely downloadable guides like 'Doing What Matters in Times of Stress' (an illustrated stress-management guide).",
      "Publishes evidence-based standards on rights and quality in mental health care.",
    ],
    availabilityNotice:
      "Public documentation and global guidance freely accessible online 24/7.",
  },
];
