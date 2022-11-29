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
  const [keywords, setKeyWords] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useAppSelector((state) => state.base);
  const { plantName } = useParams();

  if (!plantName) {
    return null;
  }

  const currentDate = dayjs().format('YY.MM.DD');
  const growingPeriod = getGrowingPeriod(plantName as string);
  const isMaxKeywords = keywords.length === growingPeriod - 1;

  if (!growingPeriod) {
    return null;
  }

  const setKeyword = (enteredKeyword: string) => {
    setKeyWords((prev) => [...prev, enteredKeyword]);
  };

  const deleteKeyword = (targetIndex: number) => {
    const filteredKeywords = keywords.filter((_, index) => index !== targetIndex);
    setKeyWords(filteredKeywords);
  };

  const createMessage = (author: string, message: string) => {
    const uuid = Token.getUUID();

    dispatch(setCreateLetterData({ uuid, author, message, keywords, plantName }));
    navigate('/create-letter');
  };

  return (
    <div className='h-full'>
      <Letter receiver={name as string} plantName={plantName}>
        <LetterForm createMessage={createMessage} />
        <KeywordForm
          growingPeriod={growingPeriod}
          isMaxKeywords={isMaxKeywords}
          setKeyword={setKeyword}
        />
        <KeywordList keyWords={keywords} deleteKeyword={deleteKeyword} />
        <p className='mr-2 text-right'>{currentDate}</p>

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
    </div>
  );
};

export default MessageForm;
