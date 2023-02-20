import type { Tutorial } from 'entities/tutorial';
import useTutorialDetailCounter from 'hooks/useTutorialDetailCounter';
import React from 'react';
import { getPlantDetailImage } from 'utils';

import { plantDetail } from '../../../services/api/mock/plant';
import BackgroundHider from './BackgroundHider';
import HighlightDescription from './HighlightDescription';

const WateringTutorial: React.FC<Tutorial> = ({ tutorialHandler }) => {
  const TUTORIAL_DONE = 3;
  const [count, setCount] = useTutorialDetailCounter(TUTORIAL_DONE, tutorialHandler);

  const plantImage = getPlantDetailImage(plantDetail.wateringCount, plantDetail.plantName);
  const buttonText = count === TUTORIAL_DONE - 1 ? '내용 보기' : '물 주기';

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
      <button
        type='button'
        className={
          count === 0 || count === 2
            ? 'relative border-2 border-solid border-trueGray-200 bg-white z-[100] rounded-xl pointer-events-none '
            : 'border-2 border-solid border-trueGray-200 z-50'
        }
      >
        {buttonText}
      </button>
      {count === 0 && (
        <HighlightDescription
          direction='top'
          content='씨앗에 물을 줘서 키울 수 있어요. 물 주기는 씨앗 별로 하루에 한 번만 가능해요'
        />
      )}
      {count === 2 && (
        <HighlightDescription
          direction='top'
          content='물을 줘서 씨앗이 다 자라면, 여기를 클릭해 편지를 볼 수 있어요'
        />
      )}
      <div className='flex p-5'>
        <p className='mr-3'>{plantDetail.plantName}</p>
        <p>{plantDetail.wateringCount}번 물을 줬어요</p>
      </div>
      <ul
        className={
          count === 1
            ? 'relative p-5 list-decimal bg-white z-[100] rounded-xl pointer-events-none '
            : 'p-5 list-decimal z-50'
        }
      >
        {plantDetail.keywords.map((word, idx) => (
          <React.Fragment key={`${word}-${idx}`}>{keywordItem(word, idx)}</React.Fragment>
        ))}
      </ul>
      {count === 1 && (
        <HighlightDescription
          direction='top'
          content='물을 준 횟수에 따라 편지에 대한 힌트를 얻을 수 있어요'
        />
      )}

      <BackgroundHider tutorialCounter={setCount} />
    </div>
  );
};

export default WateringTutorial;
