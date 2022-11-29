import { main_image } from 'assets/image';
import { useAppDispatch } from 'hooks';
import React, { useEffect } from 'react';
import { clearBase } from 'store/modules/base';

import CreateOwnerBox from './components/CreateOwnerBox';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearBase());
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-full text-center'>
      <div className='w-fit h-fit '>
<<<<<<< HEAD
        <h1 className='mt-5 text-3xl font-extrabold mb-7'>마음의 정원</h1>
        <p className='w-11/12 m-auto'>
          당장 말을 전하지 못하고 시간이 지나면 까먹을 때가 있지 않나요? <br /> 전하고 싶지만 나중에
          확인해줬으면 하는 말들이 있어요..
          <br /> 글을 담아 전하고 싶은 사람의 텃밭에 심어주세요. <br />
          받은 사람이 가꾸고 확인해볼거에요.
=======
        <h1 className='font-extrabold text-3xl mt-5 mb-7'>🌱 마음을 전하는 텃밭 🌱</h1>
        <p className='w-11/12 m-auto text-lg'>
          전하고 싶었던 말을 <br /> 시간이 지나면 잊을 때가 있지 않나요? <br /> <br />
          전하고 싶지만 <br /> 나중에 확인해줬으면 하는 말들이 있어요.. <br /> <br />
          씨앗에 글을 담아 텃밭에 심어주세요. <br /> 받은 사람이 가꾸고 확인해볼거에요.
>>>>>>> ccf8590df8b007816b892603439b81ef4136daef
        </p>

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
          <img className='w-auto h-full m-auto' src={main_image} alt='' />
        </div>
        <CreateOwnerBox />
      </div>
    </div>
  );
};

export default Home;
