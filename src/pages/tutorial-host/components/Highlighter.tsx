import type { HighlighterProps } from 'entities/highlight';
import React from 'react';

const Highlighter: React.FC<HighlighterProps> = ({ left, right, top, bottom, width, height }) => {
  return (
    <div
      className={
        left
          ? `absolute left-${left} top-${top} w-${width} h-${height} bg-white/20 z-[100] rounded-full`
          : `absolute right-${right} bottom-${bottom} w-${width} h-${height} bg-white/20 z-[100] rounded-full`
      }
    />
  );
};

export default Highlighter;
