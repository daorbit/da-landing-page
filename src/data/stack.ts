import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Cloud, CloudCog } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siClaude,
  siDocker,
  siExpress,
  siFirebase,
  siGooglecloud,
  siGraphql,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siRazorpay,
  siReact,
  siRedis,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

export interface Tech {
  name: string;
  brand?: SimpleIcon;
  icon?: LucideIcon;
}

export const webStack: Tech[] = [
  { name: "React", brand: siReact },
  { name: "Next.js", brand: siNextdotjs },
  { name: "Node.js", brand: siNodedotjs },
  { name: "TypeScript", brand: siTypescript },
  { name: "MongoDB", brand: siMongodb },
  { name: "Express", brand: siExpress },
  { name: "PostgreSQL", brand: siPostgresql },
  { name: "Redis", brand: siRedis },
  { name: "GraphQL", brand: siGraphql },
  { name: "Tailwind CSS", brand: siTailwindcss },
];

export const platformStack: Tech[] = [
  { name: "React Native", brand: siReact },
  { name: "AWS", icon: Cloud },
  { name: "Google Cloud", brand: siGooglecloud },
  { name: "Azure", icon: CloudCog },
  { name: "Docker", brand: siDocker },
  { name: "Vercel", brand: siVercel },
  { name: "Firebase", brand: siFirebase },
  { name: "Stripe", brand: siStripe },
  { name: "Razorpay", brand: siRazorpay },
  { name: "OpenAI", icon: BrainCircuit },
  { name: "Claude", brand: siClaude },
];
