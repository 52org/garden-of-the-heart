import dayjs from 'dayjs';
import useGetLetterDetail from 'hooks/useGetLetterDetail';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Message: React.FC = () => {
  const { pathname } = useLocation();
  const letterId = pathname.split('/')[2];

  const { isLoading, data } = useGetLetterDetail(letterId);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center text-xl'>로딩중...</div>
      ) : (
        <div className='border-2 rounded w-full h-full relative p-8'>
          <p className='whitespace-pre-line'>{data?.message}</p>
          <div className='absolute right-5 bottom-5 text-right'>
            <p className='mb-2'>{formatDate(String(data?.createDate))}</p>
            <p>{data?.author}</p>
          </div>
        </div>
      )}
    </>
  );
};

const formatDate = (createDate: string) => {
  return dayjs(createDate, 'YYYY-MM-DD').format('YY.MM.DD');
};

export default Message;
