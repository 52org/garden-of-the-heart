import Letter from 'components/letter';
import type { Tutorial } from 'entities/tutorial';
import KeywordForm from 'pages/message-form/components/KeywordForm';
import KeywordList from 'pages/message-form/components/KeywordList';
import LetterForm from 'pages/message-form/components/LetterForm';
import React, { useEffect, useState } from 'react';

import { plantDetail } from '../../../services/api/mock/plant';
import BackgroundHider from './BackgroundHider';

const TUTORIAL_DONE = 2;

const MessageFormTutorial: React.FC<Tutorial> = ({ tutorialCounter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === TUTORIAL_DONE) {
      tutorialCounter((prev) => ++prev);
      return;
    }
  }, [count, tutorialCounter]);

  const keyWords = plantDetail.keywords;
  const setKeyword = (enteredKeyword: string) => {
    return;
  };

  const deleteKeyword = (targetIndex: number) => {
    return;
  };

  const createMessage = (author: string, message: string) => {
    return;
  };

  return (
    <div className='relative h-full'>
      <Letter receiver='텃밭' plantName='해바라기'>
        <LetterForm createMessage={createMessage} />
        <KeywordForm growingPeriod={4} isMaxKeywords={false} setKeyword={setKeyword} />
        <KeywordList keyWords={keyWords} deleteKeyword={deleteKeyword} />
        <p className='mr-2 text-right'>23.02.05</p>

        <div className='flex justify-center w-full'>
          <button
            type='submit'
            form='letter-form'
            className='pt-3 pb-3 pl-5 pr-5 border-dotted rounded-lg align-center bg-btnColor-100 border-borderColor-200 text-textColor-200'
          >
            보내기
          </button>
        </div>
      </Letter>

      <BackgroundHider tutorialCounter={setCount} />
    </div>
  );
};

export default MessageFormTutorial;
