import { useAppSelector } from 'hooks';
import React from 'react';

const Title: React.FC = () => {
  const { name } = useAppSelector((state) => state.base);

  return (
    <h1 className='absolute top-0 left-0 z-10 w-full h-8 px-8 overflow-hidden rounded'>
      <div className='absolute top-0 left-0 z-10 w-full h-8 px-4 bg-white opacity-60 blur-md'>
        <div className='w-full'></div>
      </div>
      <span className='relative z-30 block text-3xl leading-8 text-center'>
        {name ?? ''}의 텃밭
      </span>
    </h1>
  );
};

export default Title;
