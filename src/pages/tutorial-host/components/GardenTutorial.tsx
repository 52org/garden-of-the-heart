import * as NavImage from 'assets/image/gnb';
import type { Tutorial } from 'entities/tutorial';
import Background from 'pages/garden/components/Background';
import Ground from 'pages/garden/components/Ground';
import Title from 'pages/garden/components/Title';
import UrlShareButton from 'pages/garden/components/UrlShareButton';
import React, { useEffect, useState } from 'react';
import { plantList } from 'services/api/mock/plant';

import BackgroundHider from './BackgroundHider';

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
    <div className='relative flex flex-col items-center justify-center w-full h-full'>
      <div className='relative py-[20px] z-50 w-80'>
        <Title />
      </div>
      <div
        className={
          count === 0
            ? 'relative py-[60px] z-[100] pointer-events-none rounded-xl'
            : 'relative py-[60px] z-50 pointer-events-none'
        }
      >
        <Ground plantList={plantList} isHost />
      </div>
      <div
        className={
          count === 1
            ? 'absolute bottom-28 right-6 py-[20px] z-[100] pointer-events-none rounded-xl'
            : 'absolute bottom-28 right-6 py-[20px] z-50 pointer-events-none'
        }
      >
        <UrlShareButton />
      </div>
      <Background tutorial={true} />
      <div
        className={
          count === 2
            ? 'absolute left-0 w-full h-auto bottom-4 z-[100] pointer-events-none rounded-xl'
            : 'absolute left-0 z-50 w-full h-auto bottom-4 pointer-events-none'
        }
      >
        <nav className='z-50 flex items-center justify-around w-full'>
          <div className='container z-50 flex flex-wrap items-center justify-between h-20 mx-auto'>
            <div className='flex items-center justify-center w-20 h-20 ml-6 overflow-hidden bg-gray-200 rounded-full shadow-lg'>
              <img className='h-20' src={NavImage.letter_gnb} alt='편지함' />
            </div>
          </div>
        </nav>
      </div>
      <div
        className={
          count === 3
            ? 'absolute right-0 h-auto bottom-4 z-[100] pointer-events-none rounded-xl'
            : 'absolute right-0 z-50 h-auto bottom-4 pointer-events-none'
        }
      >
        <div className='flex items-center justify-center w-20 h-20 p-3 mr-6 overflow-hidden bg-gray-200 rounded-full shadow-lg'>
          <img className='h-20' src={NavImage.location_gnb} alt='텃밭' />
        </div>
      </div>

      <BackgroundHider tutorialCounter={setCount} />
      {/* {count === 0 && <Highlighter left={14} top={80} />}
        {count === 1 && <Highlighter right={8} bottom={48} />}
        {count === 2 && <Highlighter right={6} bottom={6} />}
        {count === 3 && <Highlighter right={80} bottom={6} />} */}
    </div>
  );
};

export default GardenTutorial;
