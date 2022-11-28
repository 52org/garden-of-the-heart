import LetterAuthor from 'components/letter-author';
import LetterMessage from 'components/letter-message';
import React from 'react';

interface LetterProps {
  date: string;
  message: string;
  author: string;
}

const LetterContent: React.FC<LetterProps> = ({ date, message, author }) => {
  return (
    <>
      <LetterMessage />
      <div>
        <p>{date}</p>
        <LetterAuthor />
      </div>
    </>
  );
};

export default LetterContent;
