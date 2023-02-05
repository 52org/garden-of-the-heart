import type { Tutorial } from 'entities/tutorial';
import React from 'react';

const BackgroundHider: React.FC<Tutorial> = ({ tutorialCounter }) => {
  const clickBackground = () => {
    tutorialCounter((prev) => ++prev);
  };

  return (
    <div
      className='absolute top-0 bottom-0 left-0 right-0 z-50 h-screen bg-black/70'
      onClick={clickBackground}
    />
  );
};

export default BackgroundHider;
