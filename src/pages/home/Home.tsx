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
  }, []);

  return (
    <div className='w-full h-full text-center '>
      <div className='w-fit h-fit m-auto'>
        <h1 className='pt-7 text-3xl font-extrabold mb-7'>π± λ§μμ μ νλ νλ°­ π±</h1>
        <p className='w-11/12 m-auto text-lg'>
          μ νκ³  μΆμλ λ§μ <br /> μκ°μ΄ μ§λλ©΄ μμ λκ° μμ§ μλμ? <br /> <br />
          μ¨μμ κΈμ λ΄μ νλ°­μ μ¬μ΄μ£ΌμΈμ. <br /> λ°μ μ¬λμ΄ κ°κΎΈκ³  νμΈν΄λ³Ό κ±°μμ.
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
