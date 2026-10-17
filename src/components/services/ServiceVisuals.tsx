import React from "react";

const codeLines = [
  { tokens: [["kw", "export default async function"], ["fn", " Dashboard"], ["", "() {"]] },
  { tokens: [["kw", "  const"], ["", " stats = "], ["kw", "await"], ["fn", " getStats"], ["", "();"]] },
  { tokens: [["kw", "  return"], ["", " <"], ["fn", "Chart"], ["at", " data"], ["", "={stats} />;"]] },
  { tokens: [["", "}"]] },
];

export const CodeVisual: React.FC = () => (
  <div className="code-card" aria-hidden="true">
    <div className="code-card__bar">
      <span />
      <span />
      <span />
      <em>app/dashboard/page.tsx</em>
    </div>
    <pre>
      {codeLines.map((line, i) => (
        <code key={i} className="code-card__line">
          <i>{i + 1}</i>
          {line.tokens.map(([kind, text], j) => (
            <span key={j} className={kind ? `tok-${kind}` : undefined}>
              {text}
            </span>
          ))}
        </code>
      ))}
    </pre>
  </div>
);

const bars = [
  "h-[38%]", "h-[52%]", "h-[44%]", "h-[67%]", "h-[58%]", "h-[74%]",
  "h-[63%]", "h-[82%]", "h-[76%]", "h-[91%]", "h-[85%]", "h-[96%]",
];

export const UptimeVisual: React.FC = () => (
  <div className="uptime" aria-hidden="true">
    <div className="flex items-baseline justify-between">
      <p className="text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-fg tabular-nums">99.9%</p>
      <p className="inline-flex items-center gap-1.5 text-[12px] font-medium text-emerald-500">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
        All systems normal
      </p>
    </div>
    <div className="uptime__bars">
      {bars.map((height, i) => (
        <span key={i} className={`uptime__bar ${height}`} />
      ))}
    </div>
  </div>
);
