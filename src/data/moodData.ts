export type MoodType = "rough" | "anxious" | "okay" | "good" | "hopeful";

export interface MoodOption {
  id: MoodType;
  label: string;
  subtitle: string;
  toneDescription: string;
  reflectionPrompt: string;
  gentleSuggestions: {
    title: string;
    description: string;
    actionLabel?: string;
    actionTarget?: string;
  }[];
  groundingReminder: string;
}

export const MOOD_OPTIONS: Record<MoodType, MoodOption> = {
  rough: {
    id: "rough",
    label: "Rough",
    subtitle: "Heavy, exhausted, or struggling through the day",
    toneDescription:
      "Having a rough day is a completely valid human experience. You don't have to put on a brave face or fix everything right now.",
    reflectionPrompt:
      "When things feel hard, what is the single most comforting thing your body or mind needs right now? Even if it's simply lying down in a quiet room.",
    gentleSuggestions: [
      {
        title: "Lower the Bar for Today",
        description:
          "Give yourself permission to do the bare minimum today. Non-urgent tasks, emails, and chores can wait.",
      },
      {
        title: "Sip Warm Water or Tea",
        description:
          "Take a slow drink of warm water, broth, or herbal tea. Pay attention to the temperature in your hands.",
      },
      {
        title: "Try 2 Minutes of Gentle Breathing",
        description:
          "Our guided breathing tool can help ease muscular tightness with zero expectations.",
        actionLabel: "Open Breathing Space",
        actionTarget: "#breathing-space",
      },
      {
        title: "Consider Reaching Out to Someone Trusted",
        description:
          "If you feel ready, send a short message: 'Having a bit of a rough day, just wanted to say hi.' You don't have to explain everything.",
      },
    ],
    groundingReminder:
      "Notice that this heavy moment is part of your present, not your whole life. One breath at a time is enough.",
  },
  anxious: {
    id: "anxious",
    label: "Anxious",
    subtitle: "Restless, overwhelmed, tense, or 'racing'",
    toneDescription:
      "Anxiety is your nervous system's alarm bell ringing too loudly. Your feelings are real, but they are not facts about what will happen.",
    reflectionPrompt:
      "Notice your physical body right now: are your shoulders pulled up toward your ears? Is your jaw clenched? Let's soften them by 10%.",
    gentleSuggestions: [
      {
        title: "The 5-4-3-2-1 Sensory Reset",
        description:
          "Look around your room. Name 5 objects you can see, 4 textures you can feel, 3 distinct sounds, 2 pleasant scents, and 1 taste.",
      },
      {
        title: "Box Breathing with Paced Exhale",
        description:
          "Slowing down the exhalation activates your parasympathetic nervous system, gently telling your body it is safe right now.",
        actionLabel: "Try Box Breathing",
        actionTarget: "#breathing-space",
      },
      {
        title: "Unload Your Brain onto Paper",
        description:
          "Write down every worried thought without filtering. Once it is written, you don't have to keep repeating it in your head.",
      },
      {
        title: "Step Away from Screens for 10 Minutes",
        description:
          "Continuous notifications keep your nervous system on high alert. Put your phone face-down and look out a window.",
      },
    ],
    groundingReminder:
      "You are safe in this physical moment. Thoughts are just mental weather passing across the sky of your awareness.",
  },
  'okay': {
    id: "okay",
    label: "Okay",
    subtitle: "Steady, navigating, or just taking things as they come",
    toneDescription:
      "Being 'okay' is a quiet, grounded place to be. You don't need to be bursting with joy to have a meaningful day.",
    reflectionPrompt:
      "What is one small, everyday moment that provided a bit of ease today? A warm shower, a quiet walk, or a friendly nod?",
    gentleSuggestions: [
      {
        title: "Protect Your Energy Baseline",
        description:
          "Notice what kept you feeling steady today and see if you can protect that space tomorrow.",
      },
      {
        title: "A 10-Minute Walk Outside",
        description:
          "Gentle movement in natural light refreshes your focus and supports circadian balance.",
      },
      {
        title: "Explore an Educational Topic",
        description:
          "Browse our Learning Library to understand the science of emotional resilience and boundaries.",
        actionLabel: "Browse Library",
        actionTarget: "#learning-library",
      },
    ],
    groundingReminder:
      "Everyday steadiness is a quiet strength. Appreciate the calm moments when they arrive.",
  },
  good: {
    id: "good",
    label: "Good",
    subtitle: "Balanced, content, energized, or peaceful",
    toneDescription:
      "It is wonderful that you are experiencing ease and balance today. Recognizing positive states helps build psychological resilience.",
    reflectionPrompt:
      "What contributed to feeling good today? A good night's rest, a conversation, a completed project, or feeling healthy?",
    gentleSuggestions: [
      {
        title: "Savor the Sensation",
        description:
          "Psychologist Rick Hanson calls this 'taking in the good': pause for 20 seconds to consciously absorb the feeling of contentment.",
      },
      {
        title: "Share a Word of Kindness",
        description:
          "Send a quick note of appreciation to a friend, classmate, or family member who has supported you recently.",
      },
      {
        title: "Engage in a Nourishing Creative Task",
        description:
          "Channel your good energy into learning a new skill, reading, or moving your body.",
      },
    ],
    groundingReminder:
      "Store this feeling like a warm memory in your mind, something you can look back on whenever times get colder.",
  },
  hopeful: {
    id: "hopeful",
    label: "Hopeful",
    subtitle: "Looking forward with curiosity, optimism, or renewal",
    toneDescription:
      "Hope is an active posture—it is believing that what we do today matters for tomorrow, even in uncertain circumstances.",
    reflectionPrompt:
      "What is something in the near future that you feel curious about or quietly looking forward to?",
    gentleSuggestions: [
      {
        title: "Write Down One Meaningful Next Step",
        description:
          "Turn that hopeful feeling into an actionable, bite-sized goal that aligns with what matters to you.",
      },
      {
        title: "Be an Encourager to Others",
        description:
          "Your positive outlook can be a gentle anchor for someone around you who might be having a difficult week.",
      },
      {
        title: "Build Your Long-Term Self-Care Toolkit",
        description:
          "Read about the NHS 5 steps to wellbeing to help make this hopeful state a repeatable habit.",
        actionLabel: "Read 5 Steps to Wellbeing",
        actionTarget: "#learning-library",
      },
    ],
    groundingReminder:
      "Hope does not ignore reality; it chooses to seek light and possibilities within it.",
  },
};
