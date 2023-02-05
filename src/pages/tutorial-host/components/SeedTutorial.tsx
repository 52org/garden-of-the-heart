import { SeedTable } from 'data/seedTable';
import type { Tutorial } from 'entities/tutorial';
import React, { useEffect, useState } from 'react';

import BackgroundHider from './BackgroundHider';
import HighlightDescription from './HighlightDescription';

const TUTORIAL_DONE = 1;

const SeedTutorial: React.FC<Tutorial> = ({ tutorialCounter }) => {
  const [count, setCount] = useState(0);
  const { imgUrl, plantName, growingPeriod, description } = SeedTable['해바라기'];

  useEffect(() => {
    if (count === TUTORIAL_DONE) {
      tutorialCounter((prev) => ++prev);
      return;
    }
  }, [count, tutorialCounter]);

  return (
    <div className='relative flex flex-col items-center justify-center h-full space-y-7 bg-color'>
      <img src={imgUrl} alt='' className='w-64' />
      {count === 0 && (
        <HighlightDescription
          direction='bottom'
          content='씨앗에 대한 설명이에요. 편지와 맞는 씨앗인지 확인하고 심으러 가요!'
        />
      )}
      <div
        className={
          count === 0
            ? 'w-40 relative bg-white z-[100] rounded-xl p-2 pointer-events-none'
            : 'w-40 mt-7'
        }
      >
        <h2 className='text-3xl font-extrabold'>{plantName}</h2>
        <span>물주기 횟수 : {growingPeriod}</span>
        <div className='pt-5 pb-5 text-gray-400'>
          <p className='break-all'>{description.skill}</p>
          <p className='break-all'>{description.description}</p>
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <button type='button' className='p-3 text-white bg-sky-500/100 rounded-xl'>
          {plantName} 심으러가기
        </button>
      </div>

      <BackgroundHider tutorialCounter={setCount} />
    </div>
  );
};

export default SeedTutorial;
