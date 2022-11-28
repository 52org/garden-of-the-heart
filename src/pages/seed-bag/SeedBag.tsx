import React from 'react';
import { useNavigate } from 'react-router-dom';
// import type { Seed } from 'seed';
import { seedList } from 'seed';

const SeedBag: React.FC = () => {
  const navigate = useNavigate();
  const onSeedboxClick = (e: React.MouseEvent<HTMLDivElement>, seedName: string) => {
    navigate(`/seed/${seedName}`, { state: { seedName } });
  };
  return (
    <div className='bg-bgColor text-center mt-5 mb-3'>
      <span className='font-extrabold font-xxl'>씨앗 주머니</span>
      <div className='flex flex-wrap justify-center'>
        {seedList.map((seed, index) => (
          <div
            className=' inline-block w-4/12 m-5 border'
            key={seed.plantName}
            onClick={(e) => onSeedboxClick(e, seed.plantName)}
          >
            <img className='border m-auto' src={seed.imgUrl} alt={seed.plantName} />
            <div className=' flex justify-between m-auto'>
              <span className='ml-2'>{seed.plantName}</span>
              <span className='mr-2'>{seed.growingPeriod}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedBag;
