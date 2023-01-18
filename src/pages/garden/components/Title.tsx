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
      <div
        style={{
          marginTop: '1.25rem',
          fontSize: '1.6rem',
          textAlign: 'left',
        }}
      >
        <p>
          <span className='text-btnColor-200'>{name ?? '마음이의주말농장'}</span>&nbsp;텃밭에
          <br />
          <span className='inline-block w-16 text-right text-btnColor-200'>{8}&nbsp;</span>
          개의 씨앗이 심어졌어요!
        </p>
      </div>
    </h1>
  );
};

export default Title;
