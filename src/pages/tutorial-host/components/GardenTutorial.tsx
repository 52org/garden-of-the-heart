import HostNav from 'components/host-nav';
import type { Tutorial } from 'entities/tutorial';
import Background from 'pages/garden/components/Background';
import Ground from 'pages/garden/components/Ground';
import Title from 'pages/garden/components/Title';
import UrlShareButton from 'pages/garden/components/UrlShareButton';
import React, { useEffect, useState } from 'react';
import { plantList } from 'services/api/mock/plant';

import BackgroundHider from './BackgroundHider';
import Highlighter from './Highlighter';

const TUTORIAL_DONE = 4;

const GardenTutorial: React.FC<Tutorial> = ({ tutorialCounter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === TUTORIAL_DONE) {
      tutorialCounter((prev) => ++prev);
      return;
    }
  }, [count, tutorialCounter]);

  return (
    <>
      <div className='relative flex items-center justify-center w-full h-full'>
        <div className='relative py-[100px] z-20'>
          <Title />
          <Ground plantList={plantList} isHost />
          <div className='absolute bottom-0 right-0'>
            <UrlShareButton />
          </div>
        </div>
        <Background tutorial={true} />
        <div className='absolute left-0 z-40 w-full h-auto bottom-4'>
          <HostNav />
        </div>

        <BackgroundHider tutorialCounter={setCount} />
        {count === 0 && <Highlighter left={14} top={80} width={24} height={24} />}
        {count === 1 && <Highlighter right={8} bottom={48} width={24} height={24} />}
        {count === 2 && <Highlighter right={6} bottom={6} width={24} height={24} />}
        {count === 3 && <Highlighter right={80} bottom={6} width={24} height={24} />}
      </div>
    </>
  );
};

export default GardenTutorial;
