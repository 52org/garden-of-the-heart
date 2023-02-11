import type { Plant } from 'entities/plant';
import React from 'react';

import Background from './components/Background';
import Ground from './components/Ground';
import Title from './components/Title';
import UrlShareButton from './components/UrlShareButton';

interface GardenProps {
  isHost: boolean;
  plantList: Plant[];
}

const Garden: React.FC<GardenProps> = (props) => {
  return (
    <div className='relative flex items-center justify-center w-full h-full'>
      <div className='relative py-[100px] z-20'>
        <Title isHost={props.isHost} />
        <Ground {...props} />
        <div className='absolute bottom-0 right-0'>
          <UrlShareButton />
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Garden;
