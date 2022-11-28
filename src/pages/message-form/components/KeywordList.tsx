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
    <ul>
      {keyWords?.map((keyword, index) => (
        <li key={`${keyword}-${index}`}>
          <button type='button' onClick={onKeywordClick} data-keyword={keyword}>
            {keyword}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default KeywordList;
