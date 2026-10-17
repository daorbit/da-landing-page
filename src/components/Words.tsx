import React, { Fragment } from "react";

const Words: React.FC<{ text: string; offset?: number; className?: string }> = ({
  text,
  offset = 0,
  className = "",
}) => {
  const words = text.split(" ").filter(Boolean);

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={className} style={{ ["--i" as string]: offset + i }}>
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
};

export default Words;
