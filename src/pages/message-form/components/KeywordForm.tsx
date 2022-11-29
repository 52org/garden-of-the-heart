import type { FormEventHandler } from 'react';
import { useRef } from 'react';
import React from 'react';

interface KeywordFormProps {
  growingPeriod: number;
  isMaxKeywords: boolean;
  setKeyword: (enteredKeyword: string) => void;
}

const KeywordForm: React.FC<KeywordFormProps> = ({ growingPeriod, isMaxKeywords, setKeyword }) => {
  const keywordInput = useRef<HTMLInputElement>(null);

  const onSubmitKeyword: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isMaxKeywords) return;

    const enteredKeyword = keywordInput.current?.value;

    if (!enteredKeyword) return;
    if (enteredKeyword.length > 10) return;

    setKeyword(enteredKeyword);
  };

  return (
    <form onSubmit={onSubmitKeyword} id='keyword-form' className='relative flex flex-col mt-10'>
      <label htmlFor='keyword' className='text-xs mb-3'>
        <span className='text-base'>잎새 🌿</span> * 자라는 동안 보여질 키워드입니다. (최대 10자)
      </label>
      <input
        type='text'
        placeholder={`${growingPeriod - 1}개의 잎새를 만들 수 있어요`}
        id='keyword'
        className=' mb-3 bg-bgColor-100 outline-none border-borderColor-100 rounded border-solid border-2 py-2 pl-1 pr-5 text-left'
        ref={keywordInput}
        form='keyword-form'
      />
    </form>
  );
};

export default KeywordForm;
