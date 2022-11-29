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
      <div className='flex flex-end mt-5'>
        <p>{date}</p>
        <LetterAuthor author={author} />
      </div>
    </>
  );
};

export default LetterContent;
