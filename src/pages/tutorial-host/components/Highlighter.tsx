import type { HighlighterProps } from 'entities/highlight';
import React from 'react';

const Highlighter: React.FC<HighlighterProps> = ({ left = 0, right = 0, top = 0, bottom = 0 }) => {
  console.log(left, right, top, bottom);
  return (
    <div
      className={
        left > 0
          ? `absolute left-${left} top-${top} w-28 h-28 bg-white/50 z-[100] rounded-full`
          : `absolute right-${right} bottom-${bottom} w-28 h-28 bg-white/50 z-[100] rounded-full`
      }
    />
  );
};

export default Highlighter;
