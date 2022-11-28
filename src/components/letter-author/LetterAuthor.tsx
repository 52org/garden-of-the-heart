import React from 'react';

interface LetterAuthorProps {
  isWritable: boolean;
  author?: string;
}

const LetterAuthor: React.FC<LetterAuthorProps> = ({ isWritable, author }) => {
  return (
    <div>
      {isWritable ? (
        <input
          className='border-zinc-300 rounded border-solid border-2 py-2 pl-1 pr-5 text-left'
          type='text'
          placeholder='씨앗의 이름을 정해주세요!'
        />
      ) : (
        <p className='font-bold text-lg'>from. {author}</p>
      )}
    </div>
  );
};

export default LetterAuthor;
