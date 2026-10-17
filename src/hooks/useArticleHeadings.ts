import { useEffect, useState, type RefObject } from "react";

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);

export function useArticleHeadings(ref: RefObject<HTMLElement>) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const used = new Set<string>();
    const nodes = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2, h3")).filter((el) =>
      el.textContent?.trim()
    );

    const found = nodes.map((el) => {
      let id = el.id || slugify(el.textContent ?? "") || "section";
      while (used.has(id)) id = `${id}-${used.size}`;
      used.add(id);
      el.id = id;
      return { id, text: el.textContent!.trim(), level: el.tagName === "H2" ? 2 : 3 } as Heading;
    });
    setHeadings(found);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);

  return { headings, activeId };
}
