import React from "react";
import OrbitMark from "./OrbitMark";

const suggestions = ["Summarise this page", "Draft a reply to this email"];

const OrbitChatPreview: React.FC = () => (
  <div className="orbit-chat" aria-hidden="true">
    <div className="flex items-center gap-2.5 border-b border-border bg-surface-subtle px-4 py-3">
      <OrbitMark size={28} />
      <p className="text-[13px] font-semibold tracking-tight text-fg">Orbit AI</p>
      <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-fg-faint">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Online
      </span>
    </div>

    <div className="space-y-4 p-4">
      <div className="flex justify-end">
        <p className="orbit-chat__bubble">What does this pricing page do better than ours?</p>
      </div>

      <p className="text-[13px] leading-relaxed text-fg-muted">
        Three things stand out: plans are compared side by side, the annual saving is shown as a number rather
        than a percentage, and every tier ends in the same call to action. Want me to draft a version for your
        page?
      </p>

      <div className="space-y-1.5 pt-1">
        {suggestions.map((q) => (
          <p key={q} className="rounded-lg border border-border px-3 py-2 text-[12px] text-fg-muted">
            {q}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default OrbitChatPreview;
