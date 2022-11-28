import LetterAuthor from 'components/letter-author';
import LetterMessage from 'components/letter-message';
import dayjs from 'dayjs';
import React from 'react';

import styles from './letter.module.css';

interface LetterProps {
  isWritable: boolean;
  plantName: string;
  receiver: string;
  date?: string;
}

const Letter: React.FC<LetterProps> = ({ receiver, plantName, date, isWritable }) => {
  const currentDate = dayjs().format('YY.MM.DD');

  // 편지지 배경 가져오기
  //const backgroundImage =

  return (
    <div>
      <div className=''>
        <p>{receiver}</p>
        <LetterMessage isWritable={isWritable} />
        {isWritable && (
          <div className={styles.keywordsContainer}>
            <label htmlFor='keyword'>잎새 * 자라는 동안 보여질 키워드입니다 (최대 10자)</label>
            <input
              type='text'
              placeholder='입새를 작성해보세요!'
              id='keyword'
              className='border-zinc-300 rounded border-solid border-2 py-2 pl-1 pr-5 text-left'
            />
          </div>
        )}
        <div className={styles.authorContainer}>
          <p>{date || currentDate}</p>
          <LetterAuthor isWritable={isWritable} />
        </div>
        {isWritable && <button type='submit'>제출</button>}
      </div>
    </div>
  );
};

export default Letter;
