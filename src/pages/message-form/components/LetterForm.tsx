import dayjs from 'dayjs';
import type { FormEventHandler } from 'react';
import { useRef } from 'react';
import React from 'react';

interface LetterFormProps {
  createMessage: (author: string, message: string) => void;
}

const LetterForm: React.FC<LetterFormProps> = ({ createMessage }) => {
  const authorInput = useRef<HTMLInputElement>(null);
  const letterTextArea = useRef<HTMLTextAreaElement>(null);

  const currentDate = dayjs().format('YY.MM.DD');

  const onLetterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const author = authorInput.current?.value;
    const message = letterTextArea.current?.value;

    if (!author || !message) return;

    createMessage(author, message);
  };

  return (
    <>
      <form onSubmit={onLetterSubmit} id='letter-form'>
        <div>
          <p>{currentDate}</p>
          <input
            className='border-zinc-300 rounded border-solid border-2 py-2 pl-1 pr-5 text-left'
            type='text'
            placeholder='보내는 분의 이름을 남겨주세요!'
            ref={authorInput}
          />
        </div>
        <textarea
          className='w-full h-full p-4 border-zinc-300 rounded border-solid border-2 focus:outline-zinc-500 resize-none'
          placeholder='편지 내용을 입력해주세요!'
          ref={letterTextArea}
        ></textarea>
      </form>
    </>
  );
};

export default LetterForm;
