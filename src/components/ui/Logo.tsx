import React from "react";
import Link from "next/link";
import { site } from "../../data/site";

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Link
    href="/"
    onClick={onClick}
    aria-label={`${site.name} home`}
    className="inline-flex items-center gap-2 text-[17px] font-semibold tracking-[-0.02em] text-fg"
  >
    <img src="/favicon.png" alt="" className="h-6 w-6 rounded-md" />
    <span>{site.name}</span>
  </Link>
);

export default Logo;
