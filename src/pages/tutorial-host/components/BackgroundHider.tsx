import React from 'react';

interface BackgroundHiderProps {
  tutorialCounter: React.Dispatch<React.SetStateAction<number>>;
}

const BackgroundHider: React.FC<BackgroundHiderProps> = ({ tutorialCounter }) => {
  const clickBackground = () => {
    tutorialCounter((prev) => ++prev);
  };

  return (
    <div
      className='absolute top-0 bottom-0 left-0 right-0 z-50 h-screen bg-black/80'
      onClick={clickBackground}
    />
  );
};

export default BackgroundHider;
