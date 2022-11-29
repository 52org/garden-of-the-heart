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
    keywordInput.current.value = '';
  };

  return (
    <form onSubmit={onSubmitKeyword} id='keyword-form' className='relative flex flex-col mt-5 mb-5'>
      <label htmlFor='keyword' className='mb-2 text-xs'>
        <span className='mr-2 text-lg'>잎새 🌿</span> * 자라는 동안 보여질 키워드입니다. (최대 10자)
      </label>
      <input
        type='text'
        placeholder={`총 ${growingPeriod - 1}개의 잎새를 만들 수 있어요`}
        id='keyword'
        className='border-b-2 w-12/12 border-b-groundColor-200'
        style={{
          outline: 'none',
          backgroundColor: 'transparent',
          padding: '8px 0',
        }}
        ref={keywordInput}
        form='keyword-form'
        maxLength={10}
      />
    </form>
  );
};

export default KeywordForm;
