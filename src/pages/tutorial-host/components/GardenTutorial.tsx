import HostNav from 'components/host-nav';
import Background from 'pages/garden/components/Background';
import Ground from 'pages/garden/components/Ground';
import Title from 'pages/garden/components/Title';
import UrlShareButton from 'pages/garden/components/UrlShareButton';
import React from 'react';
import { plantList } from 'services/api/mock/plant';

const GardenTutorial: React.FC = () => {
  return (
    <div className='relative flex items-center justify-center w-full h-full'>
      <div className='relative py-[100px] z-20'>
        <Title />
        <Ground plantList={plantList} isHost />
        <div className='absolute bottom-0 right-0'>
          <UrlShareButton />
        </div>
      </div>
      <Background tutorial={true} />
      <div className='absolute left-0 z-50 w-full h-auto bottom-4'>
        <HostNav />
      </div>
    </div>
  );
};

export default GardenTutorial;
