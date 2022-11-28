import useGetLetterList from 'hooks/useGetLetterList';
import React from 'react';
import { Link } from 'react-router-dom';

import MessageBoxItem from './components/MessageBoxItem';

const MessageBox: React.FC = () => {
  const { isLoading, data } = useGetLetterList();

  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center text-xl'>로딩중...</div>
      ) : (
        <div className='mx-auto px-8 rounded h-screen'>
          <h1 className='text-center text-2xl py-5'>{data[0].author} 님의 편지 리스트</h1>
          <ul className='[&>li]:mb-7 rounded overflow-scroll h-screen scroll'>
            {data?.map((item) => (
              <Link to={`/message/${item.letterId}`} key={item.letterId}>
                <MessageBoxItem
                  plantName={item.plantName}
                  author={item.author}
                  createDate={String(item.createDate)}
                />
              </Link>
            ))}
          </ul>
          <div className='h-50'></div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
