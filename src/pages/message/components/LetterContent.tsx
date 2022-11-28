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
      <LetterMessage content={message} />
      <div className='absolute right-5 bottom-5 text-right'>
        <p>{date}</p>
        <LetterAuthor author={author} />
      </div>
    </>
  );
};

export default LetterContent;
