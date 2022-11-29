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
      <div className='mt-10'>
        <LetterMessage content={message} />
      </div>
      <div className='flex items-end flex-col mt-7'>
        <p className='mb-5'>{date}</p>
        <LetterAuthor author={author} />
      </div>
    </>
  );
};

export default LetterContent;
