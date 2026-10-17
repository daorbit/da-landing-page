import React, { useEffect, useState } from "react";
import { Check, Link2, Linkedin, Twitter } from "lucide-react";

const ShareButtons: React.FC<{ title: string; path: string }> = ({ title, path }) => {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(`${window.location.origin}${path}`);
  }, [path]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={copy} aria-label="Copy link" className="share-btn">
        {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Link2 className="h-4 w-4" />}
      </button>
      <a
        href={`https://x.com/intent/tweet?url=${encoded}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="share-btn"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="share-btn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
    </div>
  );
};

export default ShareButtons;
