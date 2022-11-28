import React from 'react';

interface KeywordListProps {
  keyWords: string[];
}

const KeywordList: React.FC<KeywordListProps> = ({ keyWords }) => {
  return (
    <ul>
      {keyWords?.map((keyword, index) => (
        <li key={`${keyword}-${index}`}>{keyword}</li>
      ))}
    </ul>
  );
};

export default KeywordList;
