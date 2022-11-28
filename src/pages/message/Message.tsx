import Letter from 'components/letter';
import dayjs from 'dayjs';
import useGetLetterDetail from 'hooks/useGetLetterDetail';
import React from 'react';
import { useParams } from 'react-router-dom';

import LetterContent from './components/LetterContent';

const Message: React.FC = () => {
  const { letterId } = useParams();
  const { isLoading, data } = useGetLetterDetail(letterId as string);

  if (!data) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center text-xl'>로딩중...</div>
      ) : (
        <div className='border-2 rounded w-full h-full relative p-8'>
          <Letter receiver=''>
            <LetterContent
              date={formatDate(data?.createDate)}
              author={data?.author}
              message={data?.message}
            />
          </Letter>
        </div>
      )}
    </>
  );
};

const formatDate = (createDate: Date) => {
  return dayjs(createDate, 'YYYY-MM-DD').format('YY.MM.DD');
};

export default Message;
