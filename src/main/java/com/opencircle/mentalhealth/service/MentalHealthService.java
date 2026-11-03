package com.opencircle.mentalhealth.service;

import com.opencircle.mentalhealth.model.*;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class MentalHealthService {

    private final List<Article> articles = new ArrayList<>();
    private final List<DirectoryResource> directoryResources = new ArrayList<>();
    private final List<HelplineItem> helplines = new ArrayList<>();
    private final Map<String, MoodOption> moodOptions = new LinkedHashMap<>();
    private final List<BreathingTechnique> breathingTechniques = new ArrayList<>();

    public MentalHealthService() {
        initArticles();
        initDirectoryResources();
        initHelplines();
        initMoodOptions();
        initBreathingTechniques();
    }

    private void initArticles() {
        // 1. Understanding Mental Health
        articles.add(new Article(
                "understanding-mental-health",
                "understanding-mental-health",
                "Understanding Mental Health: More Than the Absence of Illness",
                "Foundations",
                "5 min read",
                "Mental health exists on a dynamic continuum. Understanding how emotional, psychological, and social factors interact helps replace stigma with compassionate awareness.",
                new VerifiedSource(
                        "WHO Fact Sheet on Mental Health",
                        "World Health Organization (WHO)",
                        "https://www.who.int/news-room/fact-sheets/detail/mental-health",
                        "Verified against WHO published guidance"
                ),
                List.of(
                        "Mental health is a fundamental human right and a state of well-being, not merely the absence of a disorder.",
                        "It exists on a fluid continuum: anyone can experience periods of distress without having a diagnosed clinical condition.",
                        "Biological attributes, life experiences, socio-economic factors, and relationships continually shape our mental health.",
                        "Nurturing mental well-being requires collective compassion, systemic support, and personal self-care."
                ),
                List.of(
                        new ArticleSection("The Definition of Mental Health", List.of(
                                "The World Health Organization (WHO) defines mental health as an integral component of health: 'a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community.'",
                                "Mental health is not a binary condition where an individual is either entirely 'well' or 'unwell'. Rather, it fluctuates throughout our lives in response to changing circumstances, grief, physical health, and environment."
                        )),
                        new ArticleSection("The Continuum Model", List.of(
                                "Many psychologists visualize mental well-being as a spectrum ranging from healthy functioning to reacting, struggling, and severe crisis. Recognizing where you are today allows you to take supportive action early rather than waiting for distress to become overwhelming.",
                                "It is completely normal to move between different states. Experiencing sadness, worry, or frustration during challenging life transitions does not mean a person is 'broken'; it reflects a natural human response to stress."
                        )),
                        new ArticleSection("Dismantling Common Misconceptions", List.of(
                                "Misconception 1: Mental health struggles are a sign of personal weakness. Reality: Mental health conditions are medical and psychological realities influenced by genetics, brain chemistry, life trauma, and environmental factors.",
                                "Misconception 2: You only need to care for mental health if you have a disorder. Reality: Just as everyone has physical health to look after, everyone has mental health that benefits from regular maintenance and care."
                        ))
                ),
                new PracticalStep("Daily Check-in Habit",
                        "Take two quiet minutes each evening to ask yourself: 'How did my mind feel today, and what supported or drained my energy?' Note it without judgment.")
        ));

        // 2. Stress and Anxiety
        articles.add(new Article(
                "stress-and-anxiety",
                "stress-and-anxiety",
                "Stress and Anxiety: Recognizing Signals & Evidence-Based Coping",
                "Emotional Health",
                "6 min read",
                "Stress is an adaptive response to external pressure, while anxiety is an internal reaction that can linger. Learn how your nervous system responds and explore verified calming techniques.",
                new VerifiedSource(
                        "Anxiety Disorders & Caring for Your Mental Health",
                        "National Institute of Mental Health (NIMH)",
                        "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
                        "Grounded in NIMH clinical educational material"
                ),
                List.of(
                        "Stress is typically triggered by an identifiable external stressor (e.g., exams, deadlines, conflict) and dissipates when the stressor is resolved.",
                        "Anxiety is characterized by persistent, excessive worries that don't go away even in the absence of an immediate stressor.",
                        "Physical symptoms like rapid heart rate, shallow breathing, muscle tension, and digestive upset are normal physiological autonomic responses.",
                        "Controlled breathing, stimulus reduction, cognitive reframing, and regular movement help regulate an overstimulated nervous system."
                ),
                List.of(
                        new ArticleSection("Differentiating Stress from Anxiety", List.of(
                                "According to the National Institute of Mental Health (NIMH), while stress and anxiety share many physical and emotional symptoms, their underlying drivers differ.",
                                "Stress generally has an identifiable external trigger (such as an academic exam, work pressure, or illness). Once the situation passes, the stress reaction usually subsides.",
                                "Anxiety, by contrast, is internal and persistent. It involves anticipated threats, 'what-if' ruminations, and physical hyper-arousal that may occur even when everything appears calm on the surface."
                        )),
                        new ArticleSection("How the Autonomic Nervous System Reacts", List.of(
                                "When the brain's amygdala detects a perceived threat, it triggers the sympathetic nervous system ('fight-or-flight'). Epinephrine and cortisol surge, heartbeat quickens, and blood flow directs to large muscles.",
                                "When this system is repeatedly triggered by modern cognitive stressors without an outlet, chronic fatigue and tension accumulate. Stimulating the vagus nerve through prolonged exhalations activates the parasympathetic ('rest-and-digest') brake."
                        )),
                        new ArticleSection("Grounded Coping Techniques", List.of(
                                "1. Physiological Sigh & Paced Breathing: Research shows that extending exhalations relative to inhalations slows heart rate through respiratory sinus arrhythmia.",
                                "2. The 5-4-3-2-1 Sensory Grounding: Identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste to anchor your awareness in the present.",
                                "3. Worry Compartmentalization: Designate a 15-minute 'worry window' during the day. If intrusive worries arise outside that window, jot them down and gently postpone reviewing them."
                        ))
                ),
                new PracticalStep("The Grounding Anchor",
                        "When feeling acute anxiety, place both feet firmly flat on the floor, unclench your jaw, drop your shoulders away from your ears, and take three long, slow exhales.")
        ));

        // 3. Depression and Low Mood
        articles.add(new Article(
                "depression-and-low-mood",
                "depression-and-low-mood",
                "Depression and Low Mood: Understanding the Fog & Pathways Forward",
                "Clinical Awareness",
                "7 min read",
                "Low mood is a common human experience, but persistent depression alters energy, motivation, and perspective. Explore signs, compassionate self-care, and when to seek professional help.",
                new VerifiedSource(
                        "Depression Information & NHS Overview",
                        "National Health Service (NHS) & NIMH",
                        "https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/",
                        "Reviewed against NHS and NIMH diagnostic summaries"
                ),
                List.of(
                        "Depression is more than feeling sad for a few days; it is a clinical condition that persists for weeks or months.",
                        "Core indicators include persistent emptiness, anhedonia (loss of pleasure in activities once enjoyed), sleep disturbances, and intense cognitive fatigue.",
                        "Depression is not laziness, lack of willpower, or a character flaw.",
                        "Effective evidence-based treatments exist, including cognitive behavioral therapy (CBT), interpersonal psychotherapy, and medical interventions guided by a physician."
                ),
                List.of(
                        new ArticleSection("Recognizing Persistent Low Mood", List.of(
                                "We all experience sadness, grief, or temporary loss of enthusiasm. However, the NHS guidelines note that when low feelings persist continuously for more than two weeks and interfere with work, studies, or relationships, it may indicate clinical depression.",
                                "Depression often manifests physically: profound heaviness in the limbs, disruption of natural circadian sleep patterns (insomnia or oversleeping), unexplained aches, and shifts in appetite."
                        )),
                        new ArticleSection("The Trap of Behavioral Deactivation", List.of(
                                "Depression frequently triggers a vicious cycle: feeling exhausted leads to withdrawal from social contact and daily activities; withdrawal reduces opportunities for positive feedback and connection; and the resulting isolation deepens the depressive state.",
                                "In cognitive behavioral therapy (CBT), 'behavioral activation' breaks this cycle by introducing tiny, manageable tasks (like taking a 5-minute walk or making a bed) to gently reignite momentum without overwhelming the nervous system."
                        )),
                        new ArticleSection("When to Seek Compassionate Professional Help", List.of(
                                "If low mood continues for several weeks without lifting, reaching out to a healthcare professional (such as a general physician or clinical counselor) is an important step.",
                                "If feelings of hopelessness lead to thoughts of self-harm or suicide, immediate support is critical. Free, confidential crisis lines like Tele-MANAS (14416 in India) or 988 (in the US & Canada) are available 24/7."
                        ))
                ),
                new PracticalStep("Micro-Goal for Low Energy Days",
                        "On days when everything feels heavy, pick just one 'micro-action' that requires less than 3 minutes: open a window for fresh air, drink a full glass of water, or step into natural sunlight.")
        ));

        // 4. Emotional Well-being & Daily Self-Care
        articles.add(new Article(
                "emotional-wellbeing-self-care",
                "emotional-wellbeing-self-care",
                "Emotional Well-being & Daily Self-Care: The 5 NHS Evidence-Based Steps",
                "Self-Care",
                "5 min read",
                "Real self-care is not superficial pampering; it is building consistent psychological hygiene. Explore the 5 evidence-based steps to mental wellbeing established by the UK NHS.",
                new VerifiedSource(
                        "5 Steps to Mental Wellbeing",
                        "National Health Service (NHS)",
                        "https://www.nhs.uk/mental-health/self-help/guides-and-tools/5-steps-to-mental-wellbeing/",
                        "Published and maintained by NHS England"
                ),
                List.of(
                        "Evidence shows there are 5 specific daily actions that meaningfully enhance emotional resilience and life satisfaction.",
                        "1. Connect with people: meaningful social interaction fosters belonging and emotional safety.",
                        "2. Be physically active: regular moderate movement boosts mood-regulating neurotransmitters.",
                        "3. Learn new skills: engaging curiosity builds self-efficacy and confidence.",
                        "4. Give to others: small acts of kindness activate neurological reward circuits.",
                        "5. Pay attention to the present moment: mindfulness helps prevent negative rumination."
                ),
                List.of(
                        new ArticleSection("Step 1: Connect With Others", List.of(
                                "Strong relationships foster a sense of belonging and provide emotional buffers during times of difficulty. The NHS suggests spending quality time with family, having face-to-face conversations, or joining community groups.",
                                "Even a brief authentic check-in with a trusted peer can significantly lower perceived stress levels."
                        )),
                        new ArticleSection("Step 2 & 3: Movement and Lifelong Learning", List.of(
                                "Physical activity does not require grueling workouts. A 20-minute daily walk, gentle stretching, or dancing to music elevates dopamine and endorphins while lowering systemic inflammation.",
                                "Learning a new hobby, reading a book, or developing a craft stimulates neuroplasticity and gives a genuine sense of personal accomplishment."
                        )),
                        new ArticleSection("Step 4 & 5: Giving and Present-Moment Awareness", List.of(
                                "Acts of giving—whether volunteering time, thanking someone sincerely, or helping a neighbor—shift attention away from personal worries toward mutual human connection.",
                                "Practicing mindfulness simply means noticing your thoughts, physical sensations, and surroundings without rushing to judge them. This interrupts automatic spirals of anxious anticipation."
                        ))
                ),
                new PracticalStep("Select One Step for Today",
                        "Choose just one of the 5 NHS steps to focus on today. Keep it simple: send one kind text to a friend, or pause for 60 seconds to notice the sounds around you.")
        ));

        // 5. Supporting a Friend or Loved One
        articles.add(new Article(
                "supporting-a-friend",
                "supporting-a-friend",
                "Supporting a Friend or Loved One: Active Listening Without Fixing",
                "Relationships & Support",
                "6 min read",
                "When someone is hurting, the natural instinct is to offer advice or solve the problem. Learn how compassionate presence and non-judgmental listening offer deeper comfort.",
                new VerifiedSource(
                        "Supporting Someone with a Mental Health Issue & Family Resources",
                        "NHS Every Mind Matters & NAMI",
                        "https://www.nhs.uk/every-mind-matters/supporting-others/",
                        "Reviewed against NHS and NAMI caregiver guidance"
                ),
                List.of(
                        "People experiencing emotional distress rarely need instant solutions; they need validation and a safe space to feel heard.",
                        "Active listening requires full presence, tolerating pauses, and reflecting back what you hear without interrupting.",
                        "Avoid dismissive phrases like 'look on the bright side' or 'everything happens for a reason'.",
                        "Supporters must set healthy personal boundaries to prevent secondary emotional burnout."
                ),
                List.of(
                        new ArticleSection("Opening the Conversation Gently", List.of(
                                "Choose a calm, private setting where neither of you feels rushed. Open with gentle observations rather than interrogations.",
                                "Helpful openings include: 'I noticed you've seemed a bit quiet lately, and I just wanted to see how you're really doing,' or 'I care about you and I'm here whenever you want to talk.'"
                        )),
                        new ArticleSection("The Power of Validation vs. 'Fixing'", List.of(
                                "It is uncomfortable to watch someone we care about experience pain, so we frequently rush to say 'Don't worry, you'll be fine!' While well-intentioned, this can make the person feel misunderstood.",
                                "Instead, practice validation: 'That sounds exhausting,' or 'It makes total sense that you feel overwhelmed right now.' Sitting with someone in their distress is one of the most generous gifts of friendship."
                        )),
                        new ArticleSection("Protecting Your Own Well-being", List.of(
                                "You cannot pour from an empty cup. You are a supporter, not their therapist or emergency responder. Encourage them to seek professional support if their distress is persistent.",
                                "Recognize your own limits and seek support for yourself if caring for someone begins to affect your own mental health."
                        ))
                ),
                new PracticalStep("The Three Validating Phrases",
                        "Next time a friend shares a struggle, try using one of these phrases: 1) 'Thank you for trusting me with this,' 2) 'I am right here with you,' 3) 'Would you prefer to vent, or would you like to brainstorm options together?'")
        ));

        // 6. When to Seek Professional Support
        articles.add(new Article(
                "when-to-seek-professional-support",
                "when-to-seek-professional-support",
                "Recognizing When Professional Support May Help: Demystifying Therapy & Care",
                "Professional Care",
                "6 min read",
                "Deciding to consult a therapist, counselor, or physician is a proactive step in self-advocacy. Understand the signs that indicate professional care can help and what to expect.",
                new VerifiedSource(
                        "Mental Health Medications & Psychotherapies Guide",
                        "National Institute of Mental Health (NIMH)",
                        "https://www.nimh.nih.gov/health/topics/psychotherapies",
                        "Grounded in NIMH clinical summaries"
                ),
                List.of(
                        "Professional support is not reserved only for rock-bottom crises; it is effective for life adjustments, persistent anxiety, and relationship patterns.",
                        "Key indicators include difficulties functioning in daily tasks, persistent distress exceeding 2-3 weeks, and relying on harmful coping mechanisms.",
                        "Different modalities serve different needs: Cognitive Behavioral Therapy (CBT), Psychodynamic therapy, and medical psychiatric evaluation.",
                        "A therapeutic relationship requires trust; it is completely acceptable to interview multiple therapists to find an empathetic fit."
                ),
                List.of(
                        new ArticleSection("Clear Signs That It May Be Time to Reach Out", List.of(
                                "1. Duration: Emotional distress or low mood that persists for several consecutive weeks without relief.",
                                "2. Impairment: Difficulty getting out of bed, meeting academic or workplace responsibilities, or maintaining personal hygiene.",
                                "3. Isolation: Systematically avoiding friends, family, and activities that previously brought joy.",
                                "4. Unhealthy coping: Increasing reliance on alcohol, substance use, or risky behaviors to numb uncomfortable emotions."
                        )),
                        new ArticleSection("Understanding Common Therapy Modalities", List.of(
                                "Cognitive Behavioral Therapy (CBT): A structured, goal-oriented modality focused on recognizing unhelpful cognitive distortions and replacing them with adaptive behavioral experiments.",
                                "Acceptance and Commitment Therapy (ACT): Helps individuals accept difficult feelings while taking action aligned with their core values.",
                                "Medical Consultations: Clinical psychiatrists and physicians can evaluate whether physiological imbalances or medications may support recovery alongside psychotherapy."
                        )),
                        new ArticleSection("How to Take the First Step", List.of(
                                "Start by visiting a general practitioner or university counseling center, or consult verified tele-health services like Tele-MANAS (14416 in India).",
                                "Prepare a small note listing the symptoms you have experienced, how long they have lasted, and what you hope to achieve through support."
                        ))
                ),
                new PracticalStep("Preparation Reflection",
                        "Write down three specific challenges that have felt hardest to manage over the past month. Having them written down makes the initial conversation with a counselor much easier.")
        ));
    }

    private void initDirectoryResources() {
        directoryResources.add(new DirectoryResource(
                "tele-manas-india",
                "Tele-MANAS (Tele Mental Health Assistance and Networking Across States)",
                "Ministry of Health and Family Welfare (MoHFW), Govt. of India / NIMHANS",
                "Professional Care",
                "Helpline & Triage",
                "Free",
                "Toll-Free Phone (24/7)",
                "India (All States & UTs)",
                "Anyone in India seeking mental health support or crisis counseling",
                "14416 / 1800-891-4416",
                "https://telemanas.mohfw.gov.in/",
                "India's official national 24/7 mental health helpline providing immediate psychological first aid, tele-counseling, and connections to clinical psychologists and psychiatrists.",
                List.of(
                        "Operates 24/7 toll-free nationwide via short code 14416 and 1800-891-4416.",
                        "Multilingual counseling available in English, Hindi, and over 18 regional Indian languages.",
                        "Two-tier structure: trained counselors handle initial triage and can escalate to clinical psychologists or psychiatrists for audio/video consultation and e-prescriptions if necessary.",
                        "Coordinated by NIMHANS as the apex national nodal center."
                ),
                "Service is free and active 24/7. Regional language availability may vary based on local center shifts."
        ));

        directoryResources.add(new DirectoryResource(
                "7-cups",
                "7 Cups of Tea — Free Emotional Listening",
                "7 Cups Inc.",
                "Peer-Support Communities",
                "Peer Support",
                "Free / Optional Paid",
                "Online Web Chat & Mobile App",
                "Global",
                "Anyone seeking compassionate active listening or peer community",
                null,
                "https://www.7cups.com/",
                "A global online platform offering 1-on-1 confidential chats with trained volunteer active listeners, group support rooms, and guided wellness paths.",
                List.of(
                        "Free 24/7 text-based active listening provided by volunteers who have completed listening training.",
                        "Strictly non-clinical peer support: listeners provide empathy, not therapy, diagnosis, or crisis intervention.",
                        "Anonymous participation without disclosing personal identity.",
                        "Optional, fee-based licensed therapy is also offered separately for adults wanting professional counseling."
                ),
                "Volunteer listeners are available globally 24/7, though wait times can vary during peak hours. Not suitable for emergency crisis."
        ));

        directoryResources.add(new DirectoryResource(
                "nami-connection",
                "NAMI Connection Recovery Support Group",
                "National Alliance on Mental Illness (NAMI)",
                "Peer-Support Communities",
                "Peer Support",
                "Free",
                "Online Video & Local In-Person Chapters",
                "United States & Online",
                "Adults (18+) living with any mental health condition",
                "1-800-950-6264 (HelpLine)",
                "https://www.nami.org/support-education/support-groups/nami-connection/",
                "A free, peer-led support group for adults with mental health conditions. Facilitated by trained peers with lived experience who offer mutual understanding and hope.",
                List.of(
                        "Free 90-minute weekly or bi-weekly peer support sessions.",
                        "Follows a structured, non-judgmental model where participants share experiences without unsolicited advice.",
                        "Facilitators are trained peers who also live in mental health recovery.",
                        "Strictly respects confidentiality and voluntary participation."
                ),
                "Meeting schedules, registration links, and virtual formats depend on individual local NAMI affiliates. Please verify your local chapter's timetable."
        ));

        directoryResources.add(new DirectoryResource(
                "nami-family-support",
                "NAMI Family Support Group",
                "National Alliance on Mental Illness (NAMI)",
                "Family & Caregiver Support",
                "Peer Support",
                "Free",
                "Online Video & Local In-Person Chapters",
                "United States & Online",
                "Adult family members, partners, and caregivers of individuals with mental health conditions",
                "1-800-950-6264 (HelpLine)",
                "https://www.nami.org/support-education/support-groups/nami-family-support-group/",
                "A peer-led support group designed specifically for family members, caregivers, and loved ones of individuals living with mental health challenges.",
                List.of(
                        "Led by trained family members who have direct personal experience supporting someone with a mental health condition.",
                        "Provides emotional validation, practical coping strategies, and reduced feelings of isolation for caregivers.",
                        "Completely free of charge and open to any adult loved one."
                ),
                "Groups meet once or twice per month. Please check with your regional affiliate for exact dates and virtual access links."
        ));

        directoryResources.add(new DirectoryResource(
                "nhs-talking-therapies",
                "NHS Talking Therapies for Anxiety and Depression",
                "National Health Service (NHS England)",
                "Professional Care",
                "Clinical / Professional Care",
                "Free (NHS Covered)",
                "In-Person, Phone & Video (Self-Referral)",
                "United Kingdom (England)",
                "Adults (18+) registered with a GP in England experiencing anxiety or depression",
                null,
                "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/",
                "Official NHS psychological services offering evidence-based cognitive behavioral therapy (CBT), guided self-help, and counseling with no GP referral required.",
                List.of(
                        "Allows direct online self-referral without needing to visit a doctor first.",
                        "Offers evidence-based psychological therapies including CBT, guided digital programs, and interpersonal counseling.",
                        "Staffed by accredited clinical practitioners and psychological wellbeing practitioners."
                ),
                "Waiting times vary significantly by local NHS integrated care board. Emergency support is not handled through talking therapies; use NHS 111 or 999 instead."
        ));

        directoryResources.add(new DirectoryResource(
                "nimh-resource-center",
                "NIMH Health Information & Treatment Navigation",
                "National Institute of Mental Health (NIMH / NIH)",
                "Educational & Self-Help",
                "Informational / Self-Help",
                "Free",
                "Website, Email & Phone Information Line",
                "Global / United States",
                "General public, patients, researchers, and students seeking vetted scientific information",
                "1-866-615-6464",
                "https://www.nimh.nih.gov/health",
                "The lead federal agency for research on mental disorders, offering authoritative, science-based health topic guides, clinical trial databases, and treatment locating resources.",
                List.of(
                        "Publishes comprehensive clinical booklets, infographics, and research updates.",
                        "Connects users to the official SAMHSA treatment facility locator.",
                        "Information staff available Monday through Friday, 8:30 a.m. to 5 p.m. ET (English and Spanish).",
                        "Does not offer personal medical advice, diagnoses, or direct medical treatment."
                ),
                "Web resources accessible globally 24/7. Information phone line operates on US Eastern Time."
        ));

        directoryResources.add(new DirectoryResource(
                "youngminds-uk",
                "YoungMinds — Youth Mental Health & Parents' Guidance",
                "YoungMinds UK",
                "Student & Young-Adult",
                "Informational / Self-Help",
                "Free",
                "Website, Crisis Text Messenger & Parents' Helpline",
                "United Kingdom & Global web readers",
                "Children, adolescents, young adults (under 25), and their parents/carers",
                null,
                "https://www.youngminds.org.uk/",
                "A leading UK charity dedicated to young people's mental health, providing age-appropriate coping guides, a dedicated Parents' Helpline, and youth advocacy.",
                List.of(
                        "Provides practical advice on exam stress, body image, grief, friendships, and identity.",
                        "Free Parents' Helpline offering phone and webchat advice for adults worried about a child's mental health.",
                        "Offers the YoungMinds Crisis Messenger (free 24/7 text support via text YM to 85258 in the UK)."
                ),
                "Web resources accessible worldwide. Helpline and text messenger services are geographically restricted to UK residents."
        ));

        directoryResources.add(new DirectoryResource(
                "active-minds",
                "Active Minds — Student Mental Health on Campus",
                "Active Minds Non-Profit",
                "Student & Young-Adult",
                "Peer Support",
                "Free",
                "Student Chapters & Digital Community",
                "United States & College Campuses",
                "High school, college, and university students (ages 14-25)",
                null,
                "https://www.activeminds.org/",
                "A premier non-profit supporting mental health awareness and peer-to-peer education for young adults with over 600 student-led campus chapters.",
                List.of(
                        "Pioneered the 'V-A-R' (Validate, Appreciate, Refer) everyday active-listening framework for peers.",
                        "Empowers students to reduce stigma, advocate for campus policy improvements, and support friends.",
                        "Provides free digital workshops and leadership toolkits for students."
                ),
                "Campus chapters follow academic calendars. Digital tools and guides are accessible anytime online."
        ));

        directoryResources.add(new DirectoryResource(
                "nhs-every-mind-matters",
                "NHS Every Mind Matters",
                "National Health Service (NHS England / UK Gov)",
                "Educational & Self-Help",
                "Informational / Self-Help",
                "Free",
                "Web Portal & Interactive Mind Plan",
                "Global (English)",
                "Individuals looking for practical everyday self-help and actionable lifestyle steps",
                null,
                "https://www.nhs.uk/every-mind-matters/",
                "NHS-developed interactive platform providing personalized 5-question 'Mind Plans', audio relaxation guides, and expert advice for managing anxiety, low mood, and sleep.",
                List.of(
                        "Includes evidence-backed audio guides for deep breathing, progressive muscle relaxation, and unhelpful thinking habits.",
                        "Features specific resources for children, teens, and working professionals.",
                        "Completely free with no advertising or commercial sponsorships."
                ),
                "Freely accessible online at all times."
        ));

        directoryResources.add(new DirectoryResource(
                "find-a-helpline",
                "Find A Helpline — Global Crisis Service Directory",
                "ThroughLine / International Support Network",
                "Educational & Self-Help",
                "Helpline & Triage",
                "Free",
                "Web Directory",
                "Global (Over 130 Countries)",
                "Anyone anywhere seeking verified local crisis support, suicide prevention lines, or domestic safety helplines",
                null,
                "https://findahelpline.com/",
                "A vetted, independent international directory connecting people to free, confidential crisis lines and text services in over 130 countries worldwide.",
                List.of(
                        "Filters resources by country, issue (crisis, anxiety, depression, LGBTQ+, youth), and contact mode (phone, SMS, webchat).",
                        "Regularly audits and verifies contact numbers to prevent outdated helpline listings.",
                        "Strictly free to use with zero data tracking of user queries."
                ),
                "Online directory accessible 24/7. Operating hours of individual helplines are listed directly on their specific profile cards."
        ));

        directoryResources.add(new DirectoryResource(
                "befrienders-worldwide",
                "Befrienders Worldwide",
                "Befrienders Worldwide Charity",
                "Peer-Support Communities",
                "Peer Support",
                "Free",
                "Volunteer Hotlines & Email Support",
                "Global (32 Countries)",
                "Individuals in emotional distress or despair, and those concerned about suicide",
                null,
                "https://www.befrienders.org/",
                "A global volunteer network of 349 emotional support centers across 32 countries providing compassionate, non-judgmental active listening to people in distress.",
                List.of(
                        "Member helplines operate with trained volunteers who respect total confidentiality.",
                        "Offers open-ended listening without attempting to tell callers what they should do.",
                        "Includes an interactive search tool to locate local suicide prevention centers across five continents."
                ),
                "Individual center hours depend on local volunteer availability. Please check the specific center listing on the website."
        ));

        directoryResources.add(new DirectoryResource(
                "who-mental-health-portal",
                "WHO Global Mental Health Program & Fact Sheets",
                "World Health Organization (United Nations)",
                "Educational & Self-Help",
                "Informational / Self-Help",
                "Free",
                "Public Research & Guideline Repository",
                "Global (6 UN Languages)",
                "Students, educators, public health practitioners, and citizens worldwide",
                null,
                "https://www.who.int/health-topics/mental-health",
                "The definitive public health portal from the World Health Organization, offering global mental health reports, psychological first-aid manuals, and human-rights-based mental health initiatives.",
                List.of(
                        "Author of the WHO Mental Health Gap Action Programme (mhGAP) and Comprehensive Mental Health Action Plan.",
                        "Offers freely downloadable guides like 'Doing What Matters in Times of Stress' (an illustrated stress-management guide).",
                        "Publishes evidence-based standards on rights and quality in mental health care."
                ),
                "Public documentation and global guidance freely accessible online 24/7."
        ));
    }

    private void initHelplines() {
        helplines.add(new HelplineItem(
                "india",
                "India",
                "Tele-MANAS (Tele Mental Health Assistance and Networking Across States)",
                "Ministry of Health and Family Welfare (MoHFW), Govt. of India",
                List.of(
                        new HelplineNumber("14416", "tel:14416", "Toll-Free Shortcode"),
                        new HelplineNumber("1800-891-4416", "tel:18008914416", "Toll-Free Phone"),
                        new HelplineNumber("112 (National Emergency)", "tel:112", "Emergency Services")
                ),
                "24 hours a day, 7 days a week, 365 days a year",
                "Available in English, Hindi, and 20+ regional Indian languages",
                "Completely Free & Confidential",
                "https://telemanas.mohfw.gov.in/",
                "India's dedicated national tele-mental health programme launched to provide accessible, dignified, and quality mental health counselling to every citizen. Operates with a two-tier system connecting callers to trained mental health counsellors, clinical psychologists, and psychiatrists.",
                List.of(
                        "If you or someone around you is in immediate danger of self-harm or medical emergency, call 112 immediately or reach the casualty/emergency ward of the nearest government or private hospital.",
                        "For round-the-clock free mental health counselling and psychological first-aid, dial 14416 from any mobile phone or landline in India."
                )
        ));

        helplines.add(new HelplineItem(
                "usa-canada",
                "United States & Canada",
                "988 Suicide & Crisis Lifeline",
                "Substance Abuse and Mental Health Services Administration (SAMHSA) & Public Health Agency of Canada",
                List.of(
                        new HelplineNumber("988 (Call or Text)", "tel:988", "Toll-Free Shortcode"),
                        new HelplineNumber("911 (Emergency Services)", "tel:911", "Emergency Services")
                ),
                "24/7, year-round",
                "English and Spanish, with interpretation services for 240+ additional languages",
                "Free and confidential",
                "https://988lifeline.org/",
                "The 988 Suicide & Crisis Lifeline provides 24/7, free, and confidential support for people in suicidal crisis or emotional distress across the US and Canada. You can call or text 988 to connect directly with trained crisis counselors.",
                List.of(
                        "If you are experiencing life-threatening danger, call 911 or visit the nearest emergency room.",
                        "Dial or text 988 to talk with a trained counselor right now."
                )
        ));

        helplines.add(new HelplineItem(
                "uk",
                "United Kingdom",
                "NHS 111 Mental Health Services & Samaritans",
                "National Health Service (NHS England, Scotland, Wales)",
                List.of(
                        new HelplineNumber("111 (Select Mental Health)", "tel:111", "Toll-Free Shortcode"),
                        new HelplineNumber("116 123 (Samaritans)", "tel:116123", "Toll-Free Phone"),
                        new HelplineNumber("999 (Emergency Services)", "tel:999", "Emergency Services")
                ),
                "24 hours a day, 7 days a week",
                "English and Welsh, with interpreter services available",
                "Free on all UK networks",
                "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/",
                "In England, you can call NHS 111 and select option 2 for 24/7 urgent mental health support from clinical teams. Samaritans provides a free, round-the-clock listening line on 116 123.",
                List.of(
                        "For a medical or life-threatening emergency, dial 999 or attend the nearest Accident & Emergency (A&E) department.",
                        "Call 111 to reach your local NHS urgent mental health crisis line."
                )
        ));

        helplines.add(new HelplineItem(
                "international",
                "International (All Other Countries)",
                "Global Verified Helplines Directory",
                "Find A Helpline (ThroughLine) & Befrienders Worldwide",
                Collections.emptyList(),
                "Varies by country and regional service",
                "Multilingual across 130+ nations",
                "Free & confidential local resources",
                "https://findahelpline.com/",
                "If you are located outside India, the UK, or North America, Find A Helpline provides a vetted, free, and confidential lookup of crisis support, suicide prevention, and emotional support hotlines in over 130 countries.",
                List.of(
                        "Find your country's national emergency services number (e.g. 112 in the EU, 000 in Australia, 111 in New Zealand).",
                        "Visit https://findahelpline.com/ to discover vetted free helplines operating in your specific area."
                )
        ));
    }

    private void initMoodOptions() {
        moodOptions.put("rough", new MoodOption(
                "rough",
                "Rough",
                "Heavy, exhausted, or struggling through the day",
                "Struggling or heavy",
                "Having a rough day is a completely valid human experience. You don't have to put on a brave face or fix everything right now.",
                "When things feel hard, what is the single most comforting thing your body or mind needs right now? Even if it's simply lying down in a quiet room.",
                List.of(
                        new MoodSuggestion("Lower the Bar for Today", "Give yourself permission to do the bare minimum today. Non-urgent tasks, emails, and chores can wait."),
                        new MoodSuggestion("Sip Warm Water or Tea", "Take a slow drink of warm water, broth, or herbal tea. Pay attention to the temperature in your hands."),
                        new MoodSuggestion("Try 2 Minutes of Gentle Breathing", "Our guided breathing tool can help ease muscular tightness with zero expectations.", "Open Breathing Space", "#breathing-space"),
                        new MoodSuggestion("Consider Reaching Out to Someone Trusted", "If you feel ready, send a short message: 'Having a bit of a rough day, just wanted to say hi.' You don't have to explain everything.")
                ),
                "Notice that this heavy moment is part of your present, not your whole life. One breath at a time is enough."
        ));

        moodOptions.put("anxious", new MoodOption(
                "anxious",
                "Anxious",
                "Restless, overwhelmed, tense, or 'racing'",
                "Tense or racing",
                "Anxiety is your nervous system's alarm bell ringing too loudly. Your feelings are real, but they are not facts about what will happen.",
                "Notice your physical body right now: are your shoulders pulled up toward your ears? Is your jaw clenched? Let's soften them by 10%.",
                List.of(
                        new MoodSuggestion("The 5-4-3-2-1 Sensory Reset", "Look around your room. Name 5 objects you can see, 4 textures you can feel, 3 distinct sounds, 2 pleasant scents, and 1 taste."),
                        new MoodSuggestion("Box Breathing with Paced Exhale", "Slowing down the exhalation activates your parasympathetic nervous system, gently telling your body it is safe right now.", "Try Box Breathing", "#breathing-space"),
                        new MoodSuggestion("Unload Your Brain onto Paper", "Write down every worried thought without filtering. Once it is written, you don't have to keep repeating it in your head."),
                        new MoodSuggestion("Step Away from Screens for 10 Minutes", "Continuous notifications keep your nervous system on high alert. Put your phone face-down and look out a window.")
                ),
                "You are safe in this physical moment. Thoughts are just mental weather passing across the sky of your awareness."
        ));

        moodOptions.put("okay", new MoodOption(
                "okay",
                "Okay",
                "Steady, navigating, or just taking things as they come",
                "Steady or navigating",
                "Being 'okay' is a quiet, grounded place to be. You don't need to be bursting with joy to have a meaningful day.",
                "What is one small, everyday moment that provided a bit of ease today? A warm shower, a quiet walk, or a friendly nod?",
                List.of(
                        new MoodSuggestion("Protect Your Energy Baseline", "Notice what kept you feeling steady today and see if you can protect that space tomorrow."),
                        new MoodSuggestion("A 10-Minute Walk Outside", "Gentle movement in natural light refreshes your focus and supports circadian balance."),
                        new MoodSuggestion("Explore an Educational Topic", "Browse our Learning Library to understand the science of emotional resilience and boundaries.", "Browse Library", "#learning-library")
                ),
                "Everyday steadiness is a quiet strength. Appreciate the calm moments when they arrive."
        ));

        moodOptions.put("good", new MoodOption(
                "good",
                "Good",
                "Balanced, content, energized, or peaceful",
                "Balanced or content",
                "It is wonderful that you are experiencing ease and balance today. Recognizing positive states helps build psychological resilience.",
                "What contributed to feeling good today? A good night's rest, a conversation, a completed project, or feeling healthy?",
                List.of(
                        new MoodSuggestion("Savor the Sensation", "Psychologist Rick Hanson calls this 'taking in the good': pause for 20 seconds to consciously absorb the feeling of contentment."),
                        new MoodSuggestion("Share a Word of Kindness", "Send a quick note of appreciation to a friend, classmate, or family member who has supported you recently."),
                        new MoodSuggestion("Engage in a Nourishing Creative Task", "Channel your good energy into learning a new skill, reading, or moving your body.")
                ),
                "Store this feeling like a warm memory in your mind, something you can look back on whenever times get colder."
        ));

        moodOptions.put("hopeful", new MoodOption(
                "hopeful",
                "Hopeful",
                "Looking forward with curiosity, optimism, or renewal",
                "Looking forward",
                "Hope is an active posture—it is believing that what we do today matters for tomorrow, even in uncertain circumstances.",
                "What is something in the near future that you feel curious about or quietly looking forward to?",
                List.of(
                        new MoodSuggestion("Write Down One Meaningful Next Step", "Turn that hopeful feeling into an actionable, bite-sized goal that aligns with what matters to you."),
                        new MoodSuggestion("Be an Encourager to Others", "Your positive outlook can be a gentle anchor for someone around you who might be having a difficult week."),
                        new MoodSuggestion("Build Your Long-Term Self-Care Toolkit", "Read about the NHS 5 steps to wellbeing to help make this hopeful state a repeatable habit.", "Read 5 Steps to Wellbeing", "#learning-library")
                ),
                "Hope does not ignore reality; it chooses to seek light and possibilities within it."
        ));
    }

    private void initBreathingTechniques() {
        breathingTechniques.add(new BreathingTechnique(
                "box",
                "Box Breathing (4-4-4-4)",
                "Equal intervals for inhale, hold, exhale, and rest. Used widely for grounding racing thoughts and autonomic nervous system regulation.",
                16,
                List.of("Inhale for 4 seconds", "Hold for 4 seconds", "Exhale for 4 seconds", "Rest for 4 seconds")
        ));

        breathingTechniques.add(new BreathingTechnique(
                "478",
                "Calming Breath (4-7-8)",
                "Extended holding and prolonged exhale designed to stimulate the vagus nerve and encourage relaxation before sleep or after stress.",
                19,
                List.of("Inhale for 4 seconds", "Hold for 7 seconds", "Exhale for 8 seconds")
        ));

        breathingTechniques.add(new BreathingTechnique(
                "equal",
                "Equal Breathing (4-4)",
                "A simple, natural rhythm matching gentle inhale and exhale durations to settle nervous energy.",
                8,
                List.of("Inhale for 4 seconds", "Exhale for 4 seconds")
        ));
    }

    // Public Query Methods
    public List<Article> getAllArticles() {
        return articles;
    }

    public Optional<Article> getArticleBySlug(String slug) {
        return articles.stream().filter(a -> a.getSlug().equalsIgnoreCase(slug)).findFirst();
    }

    public List<Article> filterArticles(String category, String query) {
        return articles.stream().filter(article -> {
            boolean matchesCat = category == null || category.equalsIgnoreCase("All") || category.isBlank()
                    || article.getCategory().equalsIgnoreCase(category);

            if (!matchesCat) return false;

            if (query == null || query.isBlank()) return true;

            String q = query.toLowerCase().trim();
            return article.getTitle().toLowerCase().contains(q)
                    || article.getSummary().toLowerCase().contains(q)
                    || article.getKeyTakeaways().stream().anyMatch(t -> t.toLowerCase().contains(q))
                    || article.getVerifiedSource().getPublisher().toLowerCase().contains(q);
        }).collect(Collectors.toList());
    }

    public List<String> getAllCategories() {
        List<String> list = new ArrayList<>();
        list.add("All");
        articles.stream().map(Article::getCategory).distinct().forEach(list::add);
        return list;
    }

    public List<DirectoryResource> getAllDirectoryResources() {
        return directoryResources;
    }

    public List<DirectoryResource> filterDirectory(String category, String supportType, String query) {
        return directoryResources.stream().filter(r -> {
            boolean matchesCat = category == null || category.equalsIgnoreCase("All") || category.isBlank()
                    || r.getCategory().equalsIgnoreCase(category);
            boolean matchesType = supportType == null || supportType.equalsIgnoreCase("All") || supportType.isBlank()
                    || r.getSupportType().equalsIgnoreCase(supportType);

            if (!matchesCat || !matchesType) return false;

            if (query == null || query.isBlank()) return true;

            String q = query.toLowerCase().trim();
            return r.getName().toLowerCase().contains(q)
                    || r.getOrganization().toLowerCase().contains(q)
                    || r.getShortDescription().toLowerCase().contains(q)
                    || r.getRegion().toLowerCase().contains(q)
                    || r.getAudience().toLowerCase().contains(q);
        }).collect(Collectors.toList());
    }

    public List<String> getAllDirectoryCategories() {
        return List.of(
                "All",
                "Peer-Support Communities",
                "Professional Care",
                "Family & Caregiver Support",
                "Student & Young-Adult",
                "Educational & Self-Help"
        );
    }

    public List<String> getAllDirectorySupportTypes() {
        return List.of(
                "All",
                "Peer Support",
                "Clinical / Professional Care",
                "Helpline & Triage",
                "Informational / Self-Help"
        );
    }

    public List<HelplineItem> getAllHelplines() {
        return helplines;
    }

    public Optional<HelplineItem> getHelplineById(String id) {
        return helplines.stream().filter(h -> h.getId().equalsIgnoreCase(id)).findFirst();
    }

    public Map<String, MoodOption> getAllMoods() {
        return moodOptions;
    }

    public Optional<MoodOption> getMoodById(String id) {
        if (id == null) return Optional.empty();
        return Optional.ofNullable(moodOptions.get(id.toLowerCase().trim()));
    }

    public List<BreathingTechnique> getAllBreathingTechniques() {
        return breathingTechniques;
    }

    public Optional<BreathingTechnique> getBreathingTechniqueById(String id) {
        return breathingTechniques.stream().filter(b -> b.getId().equalsIgnoreCase(id)).findFirst();
    }
}
