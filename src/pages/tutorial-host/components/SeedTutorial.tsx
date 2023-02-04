import { SeedTable } from 'data/seedTable';
import type { Tutorial } from 'entities/tutorial';
import React, { useEffect, useState } from 'react';

import BackgroundHider from './BackgroundHider';

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
      <div className='w-40 mt-7'>
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
