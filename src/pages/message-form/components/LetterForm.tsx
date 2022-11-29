import type { FormEventHandler } from 'react';
import { useRef } from 'react';
import React from 'react';

interface LetterFormProps {
  createMessage: (author: string, message: string) => void;
}

const LetterForm: React.FC<LetterFormProps> = ({ createMessage }) => {
  const authorInput = useRef<HTMLInputElement>(null);
  const letterTextArea = useRef<HTMLTextAreaElement>(null);

  const onLetterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const author = authorInput.current?.value;
    const message = letterTextArea.current?.value;

    if (!author || !message) return;

    createMessage(author, message);
  };

  return (
    <div className=''>
      <form onSubmit={onLetterSubmit} id='letter-form' className='h-8/12  flex-col'>
        <div className='mt-5 mb-7 flex-auto'>
          <span className=''>
            from.{' '}
            <input
              className='border-zinc-300 rounded border-solid border-2 py-2 pl-1 pr-5 text-left bg-bgColor-100 outline-none'
              type='text'
              placeholder='보내는 분의 이름을 남겨주세요'
              ref={authorInput}
            />
          </span>
        </div>
        <textarea
          className='leading-loose w-full h-full p-4 border-zinc-300 rounded border-solid border-2 focus:outline-zinc-500 resize-none  bg-bgColor-100 outline-none flex-auto underline decoration-2 underline-offset-4 decoration-btnColor-200'
          placeholder='편지 내용을 입력해주세요'
          ref={letterTextArea}
        ></textarea>
      </form>
    </div>
  );
};

export default LetterForm;
