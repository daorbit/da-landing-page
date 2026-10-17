import React from "react";
import { Check, Rocket } from "lucide-react";

const steps = [
  { label: "Build", detail: "42s" },
  { label: "Tests", detail: "128 passed" },
  { label: "Deploy", detail: "Live" },
];

const DeployCard: React.FC = () => (
  <div className="deploy-card" aria-hidden="true">
    <div className="flex items-center justify-between">
      <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-fg">
        <Rocket className="h-4 w-4 text-accent" />
        Production deploy
      </p>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2 py-0.5 text-[11px] font-semibold text-emerald-500">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Live
      </span>
    </div>

    <ul className="mt-4 space-y-2.5">
      {steps.map((step, i) => (
        <li key={step.label} className={`deploy-card__step deploy-card__step--${i + 1}`}>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="flex-1 text-[12px] text-fg">{step.label}</span>
          <span className="text-[11px] tabular-nums text-fg-faint">{step.detail}</span>
        </li>
      ))}
    </ul>

    <svg viewBox="0 0 200 40" className="deploy-card__spark" preserveAspectRatio="none">
      <path d="M0 32 L20 28 L40 30 L60 22 L80 24 L100 16 L120 18 L140 10 L160 13 L180 6 L200 8" />
    </svg>
    <p className="mt-1 text-[11px] text-fg-faint">Response time · last 24h</p>
  </div>
);

export default DeployCard;
