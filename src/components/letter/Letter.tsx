import type { ReactNode } from 'react';
import React from 'react';
import { getLetterBackground } from 'utils';

interface LetterProps {
  receiver: string;
  plantName: string;
  children: ReactNode;
}

const Letter: React.FC<LetterProps> = ({ receiver, plantName, children }) => {
  const backgroundImage = getLetterBackground(plantName);

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contains',
        backgroundPosition: 'center',
      }}
    >
      <div className='pt-10 mx-5'>
        <p className='text-lg'>To. {receiver}</p>
        {children}
      </div>
    </div>
  );
};

export default Letter;
