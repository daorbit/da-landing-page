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
      <p className="text-[3rem] font-semibold leading-none tracking-[-0.05em] tabular-nums text-fg sm:text-[4.5rem]">
        {value}
        {stat.suffix && <span className="text-brand-gradient">{stat.suffix}</span>}
      </p>
      <p className="mt-3 text-[14px] text-fg-muted sm:text-[15px]">{stat.label}</p>
    </li>
  );
};

export default StatCounter;
