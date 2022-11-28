import LetterAuthor from 'components/letter-author';
import LetterMessage from 'components/letter-message';
import dayjs from 'dayjs';
import React from 'react';

interface FormProps {
  onSubmit: () => void;
}

const LetterForm: React.FC<FormProps> = ({ onSubmit }) => {
  const currentDate = dayjs().format('YY.MM.DD');

  return (
    <form onSubmit={onSubmit}>
      <LetterMessage isWritable />
      <div>
        <label htmlFor='keyword'>잎새 * 자라는 동안 보여질 키워드입니다 (최대 10자)</label>
        <input
          type='text'
          placeholder='입새를 작성해보세요!'
          id='keyword'
          className='border-zinc-300 rounded border-solid border-2 py-2 pl-1 pr-5 text-left'
        />
      </div>
      <div>
        <p>{currentDate}</p>
        <LetterAuthor isWritable />
      </div>
      <button type='submit'>제출</button>
    </form>
  );
};

export default LetterForm;
