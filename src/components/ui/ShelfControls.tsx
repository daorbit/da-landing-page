import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ShelfControlsProps {
  progress: number;
  ratio: number;
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  label: string;
}

const ShelfControls: React.FC<ShelfControlsProps> = ({ progress, ratio, atStart, atEnd, onPrev, onNext, label }) => {
  if (atStart && atEnd) return null;

  const width = Math.max(ratio * 100, 12);
  const thumb = {
    "--thumb-width": `${width}%`,
    "--thumb-left": `${progress * (100 - width)}%`,
  } as React.CSSProperties;

  return (
    <div className="mx-auto mt-8 flex max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-10">
      <div className="shelf-progress" style={thumb} aria-hidden="true">
        <span className="shelf-progress__thumb" />
      </div>
      <div className="flex shrink-0 items-center gap-2.5">
        <button type="button" onClick={onPrev} disabled={atStart} aria-label={`Previous ${label}`} className="shelf-arrow">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button type="button" onClick={onNext} disabled={atEnd} aria-label={`More ${label}`} className="shelf-arrow">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ShelfControls;
