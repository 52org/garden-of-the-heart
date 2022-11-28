import type { MouseEventHandler } from 'react';
import React from 'react';

interface KeywordListProps {
  keyWords: string[];
  deleteKeyword: (targetKeyword: string) => void;
}

const KeywordList: React.FC<KeywordListProps> = ({ keyWords, deleteKeyword }) => {
  const onKeywordClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { keyword } = e.currentTarget.dataset;

    if (!keyword) return;

    deleteKeyword(keyword);
  };

  return (
    <ul className='flex flex-row [&>li+li]:ml-3'>
      {keyWords?.map((keyword, index) => (
        <li key={`${keyword}-${index}`} className='rounded-lg border-2 bg-btnColor-100'>
          <button
            type='button'
            onClick={onKeywordClick}
            data-keyword={keyword}
            className='px-3 py-1'
          >
            {keyword}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default KeywordList;