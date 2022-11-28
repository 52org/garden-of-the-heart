import React from 'react';

import CreateOwnerBox from './components/CreateOwnerBox';

const Home: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-fit h-fit'>
        <h1>마음의 정원</h1>
        <p>소개</p>
        <div className='w-full h-[300px] bg-sky-200'>이미지(작물 이미지 / 텃밭 이미지)</div>
        <CreateOwnerBox />
      </div>
    </div>
  );
};

export default Home;
