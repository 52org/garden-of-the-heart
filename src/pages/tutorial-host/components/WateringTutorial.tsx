import type { Tutorial } from 'entities/tutorial';
import React, { useEffect, useState } from 'react';
import { getPlantDetailImage } from 'utils';

import { plantDetail } from '../../../services/api/mock/plant';
import BackgroundHider from './BackgroundHider';

const TUTORIAL_DONE = 3;

const WateringTutorial: React.FC<Tutorial> = ({ tutorialCounter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === TUTORIAL_DONE) {
      tutorialCounter((prev) => ++prev);
      return;
    }
  }, [count, tutorialCounter]);

  const plantImage = getPlantDetailImage(plantDetail.wateringCount, plantDetail.plantName);
  const buttonText = '물 주기';

  const keywordItem = (word: string, idx: number) => {
    if (idx >= plantDetail.wateringCount) {
      return (
        <li className='blur-sm w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20'>
          <p>물을 주면 잎새를 확인할 수 있습니다!</p>
        </li>
      );
    }

    return (
      <li>
        <p>{word}</p>
      </li>
    );
  };

  return (
    <div className='relative p-5'>
      <div className='border-2 border-solid border-trueGray-200'>
        <img src={plantImage} alt='plant-detail' className='flex object-cover w-4/6 mx-auto' />
      </div>
      <button type='button' className='border-2 border-solid border-trueGray-200'>
        {buttonText}
      </button>
      <div className='flex p-5'>
        <p className='mr-3'>{plantDetail.plantName}</p>
        <p>{plantDetail.wateringCount}번 물을 줬어요</p>
      </div>
      <ul className='p-5 list-decimal'>
        {plantDetail.keywords.map((word, idx) => (
          <React.Fragment key={`${word}-${idx}`}>{keywordItem(word, idx)}</React.Fragment>
        ))}
      </ul>

      <BackgroundHider tutorialCounter={setCount} />
      {/* {count === 0 && <Highlighter left={64} top={64} />} */}
    </div>
  );
};

export default WateringTutorial;