import React from "react";

interface TagFilterProps {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, active, onChange }) => (
  <div className="tag-filter" role="tablist" aria-label="Filter articles by topic">
    {[null, ...tags].map((tag) => (
      <button
        key={tag ?? "all"}
        type="button"
        role="tab"
        aria-selected={active === tag}
        onClick={() => onChange(tag)}
        className="tag-filter__chip"
      >
        {tag ?? "All"}
      </button>
    ))}
  </div>
);

export default TagFilter;
