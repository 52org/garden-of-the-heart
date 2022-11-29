import React from 'react';

import UrlShareButton from './components/UrlShareButton';

interface GardenProps {
  host: boolean;
}

const Garden: React.FC<GardenProps> = ({ host }) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='relative py-7'>
        <div className='absolute left-0 right-0'>
          <UrlShareButton />
        </div>
      </div>
    </div>
  );
};

export default Garden;
