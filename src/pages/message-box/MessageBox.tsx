import Waiting from 'components/waiting';
import { useAppSelector } from 'hooks';
import useGetLetterList from 'hooks/useGetLetterList';
import React from 'react';

import EmptyMessage from './components/EmptyMessage';
import MessageBoxItem from './components/MessageBoxItem';

const MessageBox: React.FC = () => {
  const { isLoading, data } = useGetLetterList();
  const { name } = useAppSelector((state) => state.base);

  return (
    <Waiting loading={isLoading}>
      <div className='box-border h-screen px-8 mx-auto overflow-auto rounded'>
        <h1 className='py-5 text-2xl text-center'>{name} 님의 편지 리스트</h1>
        {data && Array.isArray(data) && data[0] ? (
          <ul className='[&>li]:mb-7 rounded h-auto'>
            {data.map((item) => (
              <MessageBoxItem key={item.letterId} letter={item} />
            ))}
          </ul>
        ) : (
          <EmptyMessage />
        )}
      </div>
    </Waiting>
  );
};

export default MessageBox;
