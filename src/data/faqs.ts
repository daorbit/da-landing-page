export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most builds run six to twelve weeks from kickoff to launch, depending on scope. We give you a milestone timeline in writing after discovery, before any code is written.",
  },
  {
    question: "How do you price work?",
    answer:
      "Project work is quoted as a fixed scope with a written estimate. Retainers are billed monthly for reserved capacity. Either way you know the number before we start — we don't bill open-ended hours.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Primarily the MERN stack — MongoDB, Express, React and Node — plus Next.js, React Native for mobile, and AWS, Azure or Google Cloud for infrastructure. We pick per project rather than forcing one stack onto every problem.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. A large share of our work is taking over, auditing or extending software someone else built. We start with a codebase review so you get an honest read on what's worth keeping.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes 30 days of post-launch support. Beyond that, most clients move to a retainer for monitoring, maintenance and ongoing feature work.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Full ownership of the source, the repositories and the infrastructure accounts transfers to you at handover.",
  },
];
