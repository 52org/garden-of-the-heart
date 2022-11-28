import { main_image } from 'assets/image';
import React from 'react';

import CreateOwnerBox from './components/CreateOwnerBox';

const Home: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-full text-center'>
      <div className='w-fit h-fit'>
        <h1 className='font-extrabold text-3xl mt-5 mb-7'>마음의 정원</h1>
        <p>소개</p>
        <div className='w-full h-[300px] bg-transparent relative'>
          <div
            className='w-3/12 h-3/12 bg-sky-100'
            style={{
              boxShadow: '0px 0px 50px 50px rgba(176,255,237,0.5)',
              position: 'absolute',
              transform: 'translate(-50%,-50%)',
              top: '50%',
              left: '50%',
              borderRadius: '50%',
            }}
          ></div>
          <img className='h-full w-auto' src={main_image} alt='' />
        </div>
        <CreateOwnerBox />
      </div>
    </div>
  );
};

export default Home;
