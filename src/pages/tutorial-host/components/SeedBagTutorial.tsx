import { seedList } from 'data/seedList';
import type { Tutorial } from 'entities/tutorial';
import React, { useEffect, useState } from 'react';

import BackgroundHider from './BackgroundHider';
import HighlightDescription from './HighlightDescription';

const TUTORIAL_DONE = 1;

const SeedBagTutorial: React.FC<Tutorial> = ({ tutorialCounter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === TUTORIAL_DONE) {
      tutorialCounter((prev) => ++prev);
      return;
    }
  }, [count, tutorialCounter]);

  return (
    <div className='relative h-full pt-5 text-center bg-bgColor-100'>
      <span className='font-extrabold font-xxl'>씨앗 주머니</span>
      <div className='flex flex-wrap justify-center mt-2 overflow-y-scroll h-4/5'>
        {seedList.map((seed) => (
          <div
            className={
              count === 0
                ? 'inline-block w-4/12 m-4 border first:relative first:bg-white first:z-[100] first:rounded-xl pointer-events-none'
                : 'inline-block w-4/12 m-4 border'
            }
            key={seed.plantName}
          >
            <img className='m-auto border' src={seed.imgUrl} alt={seed.plantName} />
            <div className='flex justify-between m-auto'>
              <span className='ml-2'>{seed.plantName}</span>
              <span className='mr-2'>{seed.growingPeriod}</span>
            </div>
          </div>
        ))}
      </div>

      {count === 0 && (
        <div className='absolute ml-2 top-1/4'>
          <HighlightDescription
            direction='top'
            content='원하는 씨앗을 골라서 친구의 텃밭에 심어줄 수 있어요'
          />
        </div>
      )}

      <BackgroundHider tutorialCounter={setCount} />
    </div>
  );
};

export default SeedBagTutorial;