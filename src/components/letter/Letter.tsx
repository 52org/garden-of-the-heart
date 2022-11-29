import type { ReactNode } from 'react';
import React from 'react';

interface LetterProps {
  receiver: string;
  children: ReactNode;
}

const Letter: React.FC<LetterProps> = ({ receiver, children }) => {
  // 편지지 배경 가져오기
  // const backgroundImage = getLetterBackgroundImage(plantName);

  return (
    <div className='mt-16'>
      <div className=''>
        <p className='text-lg'>to. {receiver}</p>
        {children}
      </div>
    </div>
  );
};

export default Letter;
