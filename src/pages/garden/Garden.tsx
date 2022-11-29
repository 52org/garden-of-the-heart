import type { Plant } from 'entities/plant';
import React from 'react';

import Ground from './components/Ground';
import UrlShareButton from './components/UrlShareButton';

interface GardenProps {
  isHost: boolean;
  plantList: Plant[];
}

const Garden: React.FC<GardenProps> = (props) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='relative py-[70px]'>
        <Ground {...props} />
        <div className='absolute bottom-0 right-0'>
          <UrlShareButton />
        </div>
      </div>
    </div>
  );
};

export default Garden;
