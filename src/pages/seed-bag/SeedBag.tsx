import React from 'react';
import type { Seed } from 'seed';
import { seedList } from 'seed';

const SeedBag: React.FC = () => {
  const onSeedboxClick = (e: React.MouseEvent<HTMLDivElement>, seed: Seed) => {
    console.log(seed);
    // useNavigate('이동 경로', {state:seed})
  };
  return (
    <div>
      {seedList.map((seed, index) => (
        <div key={seed.plantName} onClick={(e) => onSeedboxClick(e, seed)}>
          <img src={seed.imgUrl} alt={seed.plantName} />
          <div>
            <span>{seed.plantName}</span>
            <span>{seed.growingPeriod}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeedBag;
