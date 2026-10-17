import React from "react";
import { Cloud, Code, Database, Gauge, Lock, Smartphone, Sparkles, Workflow, type LucideIcon } from "lucide-react";

interface Node {
  icon: LucideIcon;
  tone: string;
}

const rings: Node[][] = [
  [
    { icon: Code, tone: "tone-indigo" },
    { icon: Smartphone, tone: "tone-pink" },
    { icon: Cloud, tone: "tone-sky" },
  ],
  [
    { icon: Sparkles, tone: "tone-amber" },
    { icon: Database, tone: "tone-emerald" },
    { icon: Lock, tone: "tone-violet" },
    { icon: Gauge, tone: "tone-pink" },
  ],
  [
    { icon: Workflow, tone: "tone-sky" },
    { icon: Code, tone: "tone-violet" },
    { icon: Cloud, tone: "tone-indigo" },
  ],
];

const HeroOrbit: React.FC = () => (
  <div className="orbit" aria-hidden="true">
    {rings.map((nodes, r) => (
      <div key={r} className={`orbit__ring orbit__ring--${r + 1}`}>
        {nodes.map(({ icon: Icon, tone }, i) => (
          <span key={i} className="orbit__node">
            <span className={`orbit__icon ${tone}`}>
              <Icon className="h-5 w-5" />
            </span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default HeroOrbit;
