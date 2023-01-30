import { main_image } from 'assets/image';
import TotalStats from 'components/total-stats';
import { useAppDispatch } from 'hooks';
import React, { useEffect } from 'react';
import { clearBase } from 'store/modules/base';

import CreateOwnerBox from './components/CreateOwnerBox';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearBase());
    fetch('/api2/todos', {
      headers: {
        Accept: 'application / json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('something wrong = ', error));
  }, [dispatch]);

  return (
    <div className='w-full h-full text-center '>
      <div className='w-fit h-fit m-auto'>
        <h1 className='pt-7 text-3xl font-extrabold mb-7'>🌱 마음을 전하는 텃밭 🌱</h1>
        <p className='w-11/12 m-auto text-lg'>
          전하고 싶었던 말을 <br /> 시간이 지나면 잊을 때가 있지 않나요? <br /> <br />
          씨앗에 글을 담아 텃밭에 심어주세요. <br /> 받은 사람이 가꾸고 확인해볼 거예요.
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
        <div
          style={{
            marginTop: '1.25rem',
            fontSize: '1.6rem',
            textAlign: 'left',
          }}
        >
          <TotalStats gardenCount={128} plantCount={512} />
        </div>
      </div>
    </div>
  );
};

export default Home;
