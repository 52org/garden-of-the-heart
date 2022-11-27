import React from 'react';

import MessageBoxItem from './components/MessageBoxItem';

interface Letter {
  id: string;
  plantName: string;
  author: string;
  createDate: string;
}

const mock: Letter[] = [
  {
    id: '0',
    plantName: '해바라기',
    author: '진',
    createDate: '2022-11-27',
  },
  {
    id: '1',
    plantName: '고구마',
    author: '하루',
    createDate: '2022-11-20',
  },
  {
    id: '2',
    plantName: '감자',
    author: '준',
    createDate: '2022-11-16',
  },
  {
    id: '3',
    plantName: '토마토',
    author: '재이',
    createDate: '2022-11-12',
  },
  {
    id: '4',
    plantName: '산삼',
    author: '캐슈',
    createDate: '2022-11-10',
  },
];

const MessageBox: React.FC = () => {
  return (
    <div className='mx-auto px-8 bg-slate-700'>
      <ul className='[&>li]:mb-8 bg-slate-300'>
        {mock?.map((letter) => (
          <MessageBoxItem
            key={letter.id}
            plantName={letter.plantName}
            author={letter.author}
            createDate={letter.createDate}
          />
        ))}
      </ul>
      <div className='h-10'></div>
    </div>
  );
};

export default MessageBox;
