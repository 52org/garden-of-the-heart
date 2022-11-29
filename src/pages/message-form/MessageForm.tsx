import Letter from 'components/letter';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setCreateLetterData } from 'store/modules/base';
import { getGrowingPeriod } from 'utils';
import { Token } from 'utils/token';

import KeywordForm from './components/KeywordForm';
import KeywordList from './components/KeywordList';
import LetterForm from './components/LetterForm';

const MessageForm: React.FC = () => {
  const [keyWords, setKeyWords] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useAppSelector((state) => state.base);
  const { plantName } = useParams();

  if (!plantName) {
    return null;
  }

  const currentDate = dayjs().format('YY.MM.DD');
  const growingPeriod = getGrowingPeriod(plantName as string);
  const isMaxKeywords = keyWords.length === growingPeriod - 1;

  if (!growingPeriod) {
    return null;
  }

  const setKeyword = (enteredKeyword: string) => {
    setKeyWords((prev) => [...prev, enteredKeyword]);
  };

  const deleteKeyword = (targetKeyword: string) => {
    const filteredKeywords = keyWords.filter((keyword) => keyword !== targetKeyword);
    setKeyWords(filteredKeywords);
  };

  const createMessage = (author: string, message: string) => {
    const uuid = Token.getUUID();

    dispatch(setCreateLetterData({ uuid, author, message, keyWords, plantName }));
    navigate('/createletter');
  };

  return (
    <div className='h-full'>
      <Letter receiver={name as string}>
        <LetterForm createMessage={createMessage} />
        <KeywordForm
          growingPeriod={growingPeriod}
          isMaxKeywords={isMaxKeywords}
          setKeyword={setKeyword}
        />
        <KeywordList keyWords={keyWords} deleteKeyword={deleteKeyword} />
        <p className='text-right mr-2 mt-5 mb-3'>{currentDate}</p>
        <div className='w-full flex justify-end'>
          <button
            type='submit'
            form='letter-form'
            className='align-center bg-btnColor-200 rounded-lg border-borderColor-200 border-dotted pb-3 pt-3 pl-5 pr-5 text-textColor-200'
          >
            보내기
          </button>
        </div>
      </Letter>
    </div>
  );
};

export default MessageForm;
