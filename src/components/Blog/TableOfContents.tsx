import React from "react";
import type { Heading } from "../../hooks/useArticleHeadings";

const TableOfContents: React.FC<{ headings: Heading[]; activeId: string | null }> = ({ headings, activeId }) => {
  if (headings.length < 2) return null;

  return (
    <nav aria-label="On this page" className="toc">
      <p className="text-[12px] font-semibold text-fg">On this page</p>
      <ul className="mt-3 space-y-0.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              data-active={activeId === h.id || undefined}
              className={`toc__link ${h.level === 3 ? "toc__link--sub" : ""}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
