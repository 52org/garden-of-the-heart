import React from 'react';
import { useNavigate } from 'react-router-dom';
// import type { Seed } from 'seed';
import { seedList } from 'seed';

const SeedBag: React.FC = () => {
  const navigate = useNavigate();
  const onSeedboxClick = (e: React.MouseEvent<HTMLDivElement>, seedName: string) => {
    navigate(`/guest/seed/${seedName}`, { state: { seedName } });
  };
  return (
    <div>
      {seedList.map((seed, index) => (
        <div key={seed.plantName} onClick={(e) => onSeedboxClick(e, seed.plantName)}>
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
