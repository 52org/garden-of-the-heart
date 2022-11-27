import React from 'react';
import { seedList } from 'seed';

const SeedBag: React.FC = () => {
  return (
    <div>
      {seedList.map((seed, index) => (
        <div key={seed.plantName}>
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
