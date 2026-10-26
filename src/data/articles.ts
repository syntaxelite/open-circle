export interface ArticleSection {
  title: string;
  content: string[];
}

export interface LearningArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  verifiedSource: {
    name: string;
    publisher: string;
    url: string;
    reviewDate: string;
  };
  keyTakeaways: string[];
  sections: ArticleSection[];
  practicalStep: {
    title: string;
    description: string;
  };
}

export const LEARNING_ARTICLES: LearningArticle[] = [
  {
    id: "understanding-mental-health",
    slug: "understanding-mental-health",
    title: "Understanding Mental Health: More Than the Absence of Illness",
    category: "Foundations",
    readTime: "5 min read",
    summary:
      "Mental health exists on a dynamic continuum. Understanding how emotional, psychological, and social factors interact helps replace stigma with compassionate awareness.",
    verifiedSource: {
      name: "WHO Fact Sheet on Mental Health",
      publisher: "World Health Organization (WHO)",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-health",
      reviewDate: "Verified against WHO published guidance",
    },
    keyTakeaways: [
      "Mental health is a fundamental human right and a state of well-being, not merely the absence of a disorder.",
      "It exists on a fluid continuum: anyone can experience periods of distress without having a diagnosed clinical condition.",
      "Biological attributes, life experiences, socio-economic factors, and relationships continually shape our mental health.",
      "Nurturing mental well-being requires collective compassion, systemic support, and personal self-care.",
    ],
    sections: [
      {
        title: "The Definition of Mental Health",
        content: [
          "The World Health Organization (WHO) defines mental health as an integral component of health: 'a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community.'",
          "Mental health is not a binary condition where an individual is either entirely 'well' or 'unwell'. Rather, it fluctuates throughout our lives in response to changing circumstances, grief, physical health, and environment.",
        ],
      },
      {
        title: "The Continuum Model",
        content: [
          "Many psychologists visualize mental well-being as a spectrum ranging from healthy functioning to reacting, struggling, and severe crisis. Recognizing where you are today allows you to take supportive action early rather than waiting for distress to become overwhelming.",
          "It is completely normal to move between different states. Experiencing sadness, worry, or frustration during challenging life transitions does not mean a person is 'broken'; it reflects a natural human response to stress.",
        ],
      },
      {
        title: "Dismantling Common Misconceptions",
        content: [
          "Misconception 1: Mental health struggles are a sign of personal weakness. Reality: Mental health conditions are medical and psychological realities influenced by genetics, brain chemistry, life trauma, and environmental factors.",
          "Misconception 2: You only need to care for mental health if you have a disorder. Reality: Just as everyone has physical health to look after, everyone has mental health that benefits from regular maintenance and care.",
        ],
      },
    ],
    practicalStep: {
      title: "Daily Check-in Habit",
      description:
        "Take two quiet minutes each evening to ask yourself: 'How did my mind feel today, and what supported or drained my energy?' Note it without judgment.",
    },
  },
  {
    id: "stress-and-anxiety",
    slug: "stress-and-anxiety",
    title: "Stress and Anxiety: Recognizing Signals & Evidence-Based Coping",
    category: "Emotional Health",
    readTime: "6 min read",
    summary:
      "Stress is an adaptive response to external pressure, while anxiety is an internal reaction that can linger. Learn how your nervous system responds and explore verified calming techniques.",
    verifiedSource: {
      name: "Anxiety Disorders & Caring for Your Mental Health",
      publisher: "National Institute of Mental Health (NIMH)",
      url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
      reviewDate: "Grounded in NIMH clinical educational material",
    },
    keyTakeaways: [
      "Stress is typically triggered by an identifiable external stressor (e.g., exams, deadlines, conflict) and dissipates when the stressor is resolved.",
      "Anxiety is characterized by persistent, excessive worries that don't go away even in the absence of an immediate stressor.",
      "Physical symptoms like rapid heart rate, shallow breathing, muscle tension, and digestive upset are normal physiological autonomic responses.",
      "Controlled breathing, stimulus reduction, cognitive reframing, and regular movement help regulate an overstimulated nervous system.",
    ],
    sections: [
      {
        title: "Differentiating Stress from Anxiety",
        content: [
          "According to the National Institute of Mental Health (NIMH), while stress and anxiety share many physical and emotional symptoms, their underlying drivers differ.",
          "Stress generally has an identifiable external trigger (such as an academic exam, work pressure, or illness). Once the situation passes, the stress reaction usually subsides.",
          "Anxiety, by contrast, is internal and persistent. It involves anticipated threats, 'what-if' ruminations, and physical hyper-arousal that may occur even when everything appears calm on the surface.",
        ],
      },
      {
        title: "How the Autonomic Nervous System Reacts",
        content: [
          "When the brain's amygdala detects a perceived threat, it triggers the sympathetic nervous system ('fight-or-flight'). Epinephrine and cortisol surge, heartbeat quickens, and blood flow directs to large muscles.",
          "When this system is repeatedly triggered by modern cognitive stressors without an outlet, chronic fatigue and tension accumulate. Stimulating the vagus nerve through prolonged exhalations activates the parasympathetic ('rest-and-digest') brake.",
        ],
      },
      {
        title: "Grounded Coping Techniques",
        content: [
          "1. Physiological Sigh & Paced Breathing: Research shows that extending exhalations relative to inhalations slows heart rate through respiratory sinus arrhythmia.",
          "2. The 5-4-3-2-1 Sensory Grounding: Identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste to anchor your awareness in the present.",
          "3. Worry Compartmentalization: Designate a 15-minute 'worry window' during the day. If intrusive worries arise outside that window, jot them down and gently postpone reviewing them.",
        ],
      },
    ],
    practicalStep: {
      title: "The Grounding Anchor",
      description:
        "When feeling acute anxiety, place both feet firmly flat on the floor, unclench your jaw, drop your shoulders away from your ears, and take three long, slow exhales.",
    },
  },
  {
    id: "depression-and-low-mood",
    slug: "depression-and-low-mood",
    title: "Depression and Low Mood: Understanding the Fog & Pathways Forward",
    category: "Clinical Awareness",
    readTime: "7 min read",
    summary:
      "Low mood is a common human experience, but persistent depression alters energy, motivation, and perspective. Explore signs, compassionate self-care, and when to seek professional help.",
    verifiedSource: {
      name: "Depression Information & NHS Overview",
      publisher: "National Health Service (NHS) & NIMH",
      url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/",
      reviewDate: "Reviewed against NHS and NIMH diagnostic summaries",
    },
    keyTakeaways: [
      "Depression is more than feeling sad for a few days; it is a clinical condition that persists for weeks or months.",
      "Core indicators include persistent emptiness, anhedonia (loss of pleasure in activities once enjoyed), sleep disturbances, and intense cognitive fatigue.",
      "Depression is not laziness, lack of willpower, or a character flaw.",
      "Effective evidence-based treatments exist, including cognitive behavioral therapy (CBT), interpersonal psychotherapy, and medical interventions guided by a physician.",
    ],
    sections: [
      {
        title: "Recognizing Persistent Low Mood",
        content: [
          "We all experience sadness, grief, or temporary loss of enthusiasm. However, the NHS guidelines note that when low feelings persist continuously for more than two weeks and interfere with work, studies, or relationships, it may indicate clinical depression.",
          "Depression often manifests physically: profound heaviness in the limbs, disruption of natural circadian sleep patterns (insomnia or oversleeping), unexplained aches, and shifts in appetite.",
        ],
      },
      {
        title: "The Trap of Behavioral Deactivation",
        content: [
          "Depression frequently triggers a vicious cycle: feeling exhausted leads to withdrawal from social contact and daily activities; withdrawal reduces opportunities for positive feedback and connection; and the resulting isolation deepens the depressive state.",
          "In cognitive behavioral therapy (CBT), 'behavioral activation' breaks this cycle by introducing tiny, manageable tasks (like taking a 5-minute walk or making a bed) to gently reignite momentum without overwhelming the nervous system.",
        ],
      },
      {
        title: "When to Seek Compassionate Professional Help",
        content: [
          "If low mood continues for several weeks without lifting, reaching out to a healthcare professional (such as a general physician or clinical counselor) is an important step.",
          "If feelings of hopelessness lead to thoughts of self-harm or suicide, immediate support is critical. Free, confidential crisis lines like Tele-MANAS (14416 in India) or 988 (in the US & Canada) are available 24/7.",
        ],
      },
    ],
    practicalStep: {
      title: "Micro-Goal for Low Energy Days",
      description:
        "On days when everything feels heavy, pick just one 'micro-action' that requires less than 3 minutes: open a window for fresh air, drink a full glass of water, or step into natural sunlight.",
    },
  },
  {
    id: "emotional-wellbeing-self-care",
    slug: "emotional-wellbeing-self-care",
    title: "Emotional Well-being & Daily Self-Care: The 5 NHS Evidence-Based Steps",
    category: "Self-Care",
    readTime: "5 min read",
    summary:
      "Real self-care is not superficial pampering; it is building consistent psychological hygiene. Explore the 5 evidence-based steps to mental wellbeing established by the UK NHS.",
    verifiedSource: {
      name: "5 Steps to Mental Wellbeing",
      publisher: "National Health Service (NHS)",
      url: "https://www.nhs.uk/mental-health/self-help/guides-and-tools/5-steps-to-mental-wellbeing/",
      reviewDate: "Published and maintained by NHS England",
    },
    keyTakeaways: [
      "Evidence shows there are 5 specific daily actions that meaningfully enhance emotional resilience and life satisfaction.",
      "1. Connect with people: meaningful social interaction fosters belonging and emotional safety.",
      "2. Be physically active: regular moderate movement boosts mood-regulating neurotransmitters.",
      "3. Learn new skills: engaging curiosity builds self-efficacy and confidence.",
      "4. Give to others: small acts of kindness activate neurological reward circuits.",
      "5. Pay attention to the present moment: mindfulness helps prevent negative rumination.",
    ],
    sections: [
      {
        title: "Step 1: Connect With Others",
        content: [
          "Strong relationships foster a sense of belonging and provide emotional buffers during times of difficulty. The NHS suggests spending quality time with family, having face-to-face conversations, or joining community groups.",
          "Even a brief authentic check-in with a trusted peer can significantly lower perceived stress levels.",
        ],
      },
      {
        title: "Step 2 & 3: Movement and Lifelong Learning",
        content: [
          "Physical activity does not require grueling workouts. A 20-minute daily walk, gentle stretching, or dancing to music elevates dopamine and endorphins while lowering systemic inflammation.",
          "Learning a new hobby, reading a book, or developing a craft stimulates neuroplasticity and gives a genuine sense of personal accomplishment.",
        ],
      },
      {
        title: "Step 4 & 5: Giving and Present-Moment Awareness",
        content: [
          "Acts of giving—whether volunteering time, thanking someone sincerely, or helping a neighbor—shift attention away from personal worries toward mutual human connection.",
          "Practicing mindfulness simply means noticing your thoughts, physical sensations, and surroundings without rushing to judge them. This interrupts automatic spirals of anxious anticipation.",
        ],
      },
    ],
    practicalStep: {
      title: "Select One Step for Today",
      description:
        "Choose just one of the 5 NHS steps to focus on today. Keep it simple: send one kind text to a friend, or pause for 60 seconds to notice the sounds around you.",
    },
  },
  {
    id: "supporting-a-friend",
    slug: "supporting-a-friend",
    title: "Supporting a Friend or Loved One: Active Listening Without Fixing",
    category: "Relationships & Support",
    readTime: "6 min read",
    summary:
      "When someone is hurting, the natural instinct is to offer advice or solve the problem. Learn how compassionate presence and non-judgmental listening offer deeper comfort.",
    verifiedSource: {
      name: "Supporting Someone with a Mental Health Issue & Family Resources",
      publisher: "NHS Every Mind Matters & NAMI",
      url: "https://www.nhs.uk/every-mind-matters/supporting-others/",
      reviewDate: "Reviewed against NHS and NAMI caregiver guidance",
    },
    keyTakeaways: [
      "People experiencing emotional distress rarely need instant solutions; they need validation and a safe space to feel heard.",
      "Active listening requires full presence, tolerating pauses, and reflecting back what you hear without interrupting.",
      "Avoid dismissive phrases like 'look on the bright side' or 'everything happens for a reason'.",
      "Supporters must set healthy personal boundaries to prevent secondary emotional burnout.",
    ],
    sections: [
      {
        title: "Opening the Conversation Gently",
        content: [
          "Choose a calm, private setting where neither of you feels rushed. Open with gentle observations rather than interrogations.",
          "Helpful openings include: 'I noticed you've seemed a bit quiet lately, and I just wanted to see how you're really doing,' or 'I care about you and I'm here whenever you want to talk.'",
        ],
      },
      {
        title: "The Power of Validation vs. 'Fixing'",
        content: [
          "It is uncomfortable to watch someone we care about experience pain, so we frequently rush to say 'Don't worry, you'll be fine!' While well-intentioned, this can make the person feel misunderstood.",
          "Instead, practice validation: 'That sounds exhausting,' or 'It makes total sense that you feel overwhelmed right now.' Sitting with someone in their distress is one of the most generous gifts of friendship.",
        ],
      },
      {
        title: "Protecting Your Own Well-being",
        content: [
          "You cannot pour from an empty cup. You are a supporter, not their therapist or emergency responder. Encourage them to seek professional support if their distress is persistent.",
          "Recognize your own limits and seek support for yourself if caring for someone begins to affect your own mental health.",
        ],
      },
    ],
    practicalStep: {
      title: "The Three Validating Phrases",
      description:
        "Next time a friend shares a struggle, try using one of these phrases: 1) 'Thank you for trusting me with this,' 2) 'I am right here with you,' 3) 'Would you prefer to vent, or would you like to brainstorm options together?'",
    },
  },
  {
    id: "when-to-seek-professional-support",
    slug: "when-to-seek-professional-support",
    title: "Recognizing When Professional Support May Help: Demystifying Therapy & Care",
    category: "Professional Care",
    readTime: "6 min read",
    summary:
      "Deciding to consult a therapist, counselor, or physician is a proactive step in self-advocacy. Understand the signs that indicate professional care can help and what to expect.",
    verifiedSource: {
      name: "Mental Health Medications & Psychotherapies Guide",
      publisher: "National Institute of Mental Health (NIMH)",
      url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
      reviewDate: "Grounded in NIMH clinical summaries",
    },
    keyTakeaways: [
      "Professional support is not reserved only for rock-bottom crises; it is effective for life adjustments, persistent anxiety, and relationship patterns.",
      "Key indicators include difficulties functioning in daily tasks, persistent distress exceeding 2-3 weeks, and relying on harmful coping mechanisms.",
      "Different modalities serve different needs: Cognitive Behavioral Therapy (CBT), Psychodynamic therapy, and medical psychiatric evaluation.",
      "A therapeutic relationship requires trust; it is completely acceptable to interview multiple therapists to find an empathetic fit.",
    ],
    sections: [
      {
        title: "Clear Signs That It May Be Time to Reach Out",
        content: [
          "1. Duration: Emotional distress or low mood that persists for several consecutive weeks without relief.",
          "2. Impairment: Difficulty getting out of bed, meeting academic or workplace responsibilities, or maintaining personal hygiene.",
          "3. Isolation: Systematically avoiding friends, family, and activities that previously brought joy.",
          "4. Unhealthy coping: Increasing reliance on alcohol, substance use, or risky behaviors to numb uncomfortable emotions.",
        ],
      },
      {
        title: "Understanding Common Therapy Modalities",
        content: [
          "Cognitive Behavioral Therapy (CBT): A structured, goal-oriented modality focused on recognizing unhelpful cognitive distortions and replacing them with adaptive behavioral experiments.",
          "Acceptance and Commitment Therapy (ACT): Helps individuals accept difficult feelings while taking action aligned with their core values.",
          "Medical Consultations: Clinical psychiatrists and physicians can evaluate whether physiological imbalances or medications may support recovery alongside psychotherapy.",
        ],
      },
      {
        title: "How to Take the First Step",
        content: [
          "Start by visiting a general practitioner or university counseling center, or consult verified tele-health services like Tele-MANAS (14416 in India).",
          "Prepare a small note listing the symptoms you have experienced, how long they have lasted, and what you hope to achieve through support.",
        ],
      },
    ],
    practicalStep: {
      title: "Preparation Reflection",
      description:
        "Write down three specific challenges that have felt hardest to manage over the past month. Having them written down makes the initial conversation with a counselor much easier.",
    },
  },
];
