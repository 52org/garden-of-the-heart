import { SeedTable } from 'data/seedTable';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Seed: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { seedName } = location.state;
  const seed = SeedTable[seedName];
  const { imgUrl, plantName, growingPeriod, description } = seed;

  const routeToMessageForm = () => {
    navigate(`/messageform/${seedName}`, { state: { seedName } });
  };
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-7 bg-color'>
      <img src={imgUrl} alt='' className='w-64' />
      <div className='w-40 mt-7'>
        <h2 className='text-3xl font-extrabold'>{plantName}</h2>
        <span>물주기 횟수 : {growingPeriod}</span>
        <div className='pt-5 pb-5 text-gray-400'>
          <p className='break-all'>{description.skill}</p>
          <p className='break-all'>{description.description}</p>
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <button
          type='button'
          className='p-3 text-white bg-sky-500/100 rounded-xl'
          onClick={routeToMessageForm}
        >
          {plantName} 심으러가기
        </button>
      </div>
    </div>
  );
};

export default Seed;
