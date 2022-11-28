import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SeedTable } from 'seed';

const Seed: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { seedName } = location.state;
  const seed = SeedTable[seedName];
  const { imgUrl, plantName, growingPeriod, description } = seed;

  const routeToMessageForm = () => {
    navigate('/messageform', { state: { seedName } });
  };
  return (
    <div className='flex justify-center flex-col items-center space-y-7 bg-color h-full'>
      <img src={imgUrl} alt='' className='w-64' />
      <div className='w-40 mt-7'>
        <h2 className='font-extrabold text-3xl'>{plantName}</h2>
        <span>물주기 횟수 : {growingPeriod}</span>
        <div className='text-gray-400 pt-5 pb-5'>
          <p className='break-all'>{description.skill}</p>
          <p className='break-all'>{description.description}</p>
        </div>
      </div>
      <div className='mb-3 mt-10'>
        <button
          type='button'
          className='bg-sky-500/100 text-white p-3 rounded-xl'
          onClick={routeToMessageForm}
        >
          {plantName} 심으러가기
        </button>
      </div>
    </div>
  );
};

export default Seed;
