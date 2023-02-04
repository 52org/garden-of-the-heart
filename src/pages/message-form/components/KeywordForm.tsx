import type { FormEventHandler } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import React from 'react';

interface KeywordFormProps {
  growingPeriod: number;
  isMaxKeywords: boolean;
  setKeyword: (enteredKeyword: string) => void;
}

const KeywordForm: React.FC<KeywordFormProps> = ({ growingPeriod, isMaxKeywords, setKeyword }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const keywordInput = useRef<HTMLInputElement>(null);

  const handleError = (message: string) => {
    if (!keywordInput.current) return;

    setErrorMessage(message);
    keywordInput.current.value = '';
  };

  const onSubmitKeyword: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (isMaxKeywords) {
      handleError('* 잎새를 모두 작성하셨습니다');
      return;
    }

    const enteredKeyword = keywordInput.current?.value;

    if (!enteredKeyword) {
      handleError('* 잎새를 입력해주세요');
      return;
    }
    if (enteredKeyword.length > 10) {
      handleError('* 10자 이내로 입력해주세요');
      return;
    }

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
        className='mb-1 border-b-2 w-12/12 border-b-groundColor-200'
        style={{
          outline: 'none',
          backgroundColor: 'transparent',
          padding: '8px 0',
        }}
        ref={keywordInput}
        form='keyword-form'
        maxLength={10}
      />
      {errorMessage && <p className='text-red-400'>{errorMessage}</p>}
    </form>
  );
};

export default KeywordForm;
