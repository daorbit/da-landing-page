import React from "react";

const Words: React.FC<{ text: string; offset?: number }> = ({ text, offset = 0 }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-rise"
          style={{ ["--i" as string]: offset + i }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
};

export default Words;
