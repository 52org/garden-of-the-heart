import type { MouseEventHandler } from 'react';
import React from 'react';
interface KeywordListProps {
  keyWords: string[];
  deleteKeyword: (targetIndex: number) => void;
}

const KeywordList: React.FC<KeywordListProps> = ({ keyWords, deleteKeyword }) => {
  const onKeywordClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { index } = e.currentTarget.dataset;

    if (!index) return;

    deleteKeyword(Number(index));
  };

  return (
    <ul id='keyword-list' className='flex flex-wrap'>
      {keyWords?.map((keyword, index) => (
        <li
          key={`${keyword}-${index}`}
          className='flex flex-wrap border-2 rounded-lg bg-btnColor-200 text-textColor-200 '
        >
          <button
            type='button'
            onClick={onKeywordClick}
            data-index={index}
            data-keyword={keyword}
            className='px-3 py-1 pr-1.5'
          >
            {keyword}
            <em className='text-yellow-200 px-[4px] not-italic text-base -translate-y-10 ml-1.5'>
              X
            </em>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default KeywordList;
