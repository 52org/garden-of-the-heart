import Waiting from 'components/waiting';
import useGetLetterList from 'hooks/useGetLetterList';
import React from 'react';

import MessageBoxItem from './components/MessageBoxItem';

const MessageBox: React.FC = () => {
  const { isLoading, data } = useGetLetterList();

  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <Waiting loading={isLoading}>
      <div className='h-screen px-8 mx-auto rounded'>
        <h1 className='py-5 text-2xl text-center'>{data[0].author} 님의 편지 리스트</h1>
        <ul className='[&>li]:mb-7 rounded overflow-scroll h-screen scroll'>
          {data.map((item) => (
            <MessageBoxItem key={item.letterId} letter={item} />
          ))}
        </ul>
      </div>
    </Waiting>
  );
};

export default MessageBox;
