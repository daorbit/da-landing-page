import React from "react";
import { useCountUp } from "../../hooks/useCountUp";

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<{ stat: Stat; active: boolean }> = ({ stat, active }) => {
  const value = useCountUp(stat.value, active);

  return (
    <li>
      <p className="text-[2.25rem] font-semibold leading-none tracking-[-0.04em] tabular-nums text-fg sm:text-[2.75rem]">
        {value}
        {stat.suffix && <span className="text-fg-faint">{stat.suffix}</span>}
      </p>
      <p className="mt-2 text-[14px] text-fg-muted">{stat.label}</p>
    </li>
  );
};

export default StatCounter;
