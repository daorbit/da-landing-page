import React from "react";

const rows = [
  { title: "Kedarnath Trek", meta: "6 days · 4 travellers", tone: "bg-amber-500" },
  { title: "Spiti Valley Loop", meta: "8 days · 2 travellers", tone: "bg-sky-500" },
  { title: "Rishikesh Retreat", meta: "3 days · 5 travellers", tone: "bg-emerald-500" },
];

const PhoneMock: React.FC = () => (
  <div className="phone" aria-hidden="true">
    <div className="phone__notch" />
    <div className="px-4 pb-4 pt-8">
      <p className="text-[10px] font-medium text-fg-faint">Good morning</p>
      <p className="text-[15px] font-semibold tracking-tight text-fg">Your bookings</p>
      <ul className="mt-3 space-y-2">
        {rows.map((row) => (
          <li key={row.title} className="phone__row">
            <span className={`h-8 w-8 shrink-0 rounded-lg ${row.tone} opacity-90`} />
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-semibold text-fg">{row.title}</span>
              <span className="block truncate text-[10px] text-fg-faint">{row.meta}</span>
            </span>
          </li>
        ))}
      </ul>
      <span className="mt-3 flex h-8 items-center justify-center rounded-full bg-cta text-[11px] font-semibold text-cta-fg">
        New booking
      </span>
    </div>
  </div>
);

export default PhoneMock;
