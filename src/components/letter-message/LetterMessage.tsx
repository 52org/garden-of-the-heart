import React from 'react';

interface LetterMessageProps {
  isWritable?: true;
  content?: string;
}

const LetterMessage: React.FC<LetterMessageProps> = ({ isWritable, content }) => {
  return (
    <div className='border-2 rounded w-full h-full relative p-8'>
      {isWritable ? (
        <textarea
          className='w-full h-full p-4 border-zinc-300 rounded border-solid border-2 focus:outline-zinc-500 resize-none'
          placeholder='편지 내용을 입력해주세요!'
        ></textarea>
      ) : (
        <p className='whitespace-pre-line'>{content}</p>
      )}
    </div>
  );
};

export default LetterMessage;
