import type { FormEventHandler } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import React from 'react';

interface LetterFormProps {
  createMessage: (author: string, message: string) => void;
}

const LetterForm: React.FC<LetterFormProps> = ({ createMessage }) => {
  const [isAuthorEmpty, setIsAuthorEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);

  const authorInput = useRef<HTMLInputElement>(null);
  const letterTextArea = useRef<HTMLTextAreaElement>(null);

  const resetIsEmpty = () => {
    setIsAuthorEmpty(false);
    setIsMessageEmpty(false);
  };

  const onLetterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    resetIsEmpty();

    const author = authorInput.current?.value;
    const message = letterTextArea.current?.value;

    if (!author) {
      setIsAuthorEmpty(true);
      return;
    }
    if (!message) {
      setIsMessageEmpty(true);
      return;
    }

    createMessage(author, message);
  };

  return (
    <div className=''>
      <form onSubmit={onLetterSubmit} id='letter-form' className='h-8/12  flex-col'>
        <div className='mt-5 mb-5 flex-auto'>
          <label htmlFor='author'>From.</label>
          <input
            className='w-8/12 border-b-2 border-b-groundColor-200 mb-2 ml-3'
            style={{
              outline: 'none',
              backgroundColor: 'transparent',
              padding: '8px 0',
            }}
            type='text'
            placeholder='보내는 분의 이름을 남겨주세요'
            id='author'
            ref={authorInput}
          />
          {isAuthorEmpty && <p className='text-red-400'>* 이름을 입력해주세요</p>}
        </div>
        <textarea
          className='leading-loose w-full p-4 border-borderColor-100 rounded border-solid border-2 focus:outline-borderColor-200 resize-none  bg-bgColor-100 outline-none flex-auto'
          style={{
            height: '30vh',
          }}
          placeholder='편지 내용을 입력해주세요'
          ref={letterTextArea}
        ></textarea>
        {isMessageEmpty && <p className='text-red-400'>* 편지 내용을 입력해주세요</p>}
      </form>
    </div>
  );
};

export default LetterForm;
