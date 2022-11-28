import LetterAuthor from 'components/letter-author';
import dayjs from 'dayjs';
import type { FormEventHandler } from 'react';
import { useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getGrowingPeriod } from 'utils';

import KeywordForm from './KeywordForm';

const LetterForm: React.FC = () => {
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const { plantName } = useParams();

  const currentDate = dayjs().format('YY.MM.DD');
  const growingPeriod = getGrowingPeriod(plantName as string);

  const setKeyword = (enteredKeyword: string) => {
    setKeywordList((prev) => [...prev, enteredKeyword]);
  };

  const onLetterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onLetterSubmit} id='letter-form'>
        <div>
          <p>{currentDate}</p>
          <LetterAuthor isWritable />
        </div>
        <textarea
          className='w-full h-full p-4 border-zinc-300 rounded border-solid border-2 focus:outline-zinc-500 resize-none'
          placeholder='편지 내용을 입력해주세요!'
        ></textarea>
      </form>
      <KeywordForm growingPeriod={growingPeriod} setKeyword={setKeyword} />
      <ul>
        {keywordList.map((keyword, index) => (
          <li key={`${keyword}-${index}`}>{keyword}</li>
        ))}
      </ul>
      <button type='submit' form='letter-form'>
        제출
      </button>
    </>
  );
};

export default LetterForm;
