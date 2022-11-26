import React from 'react';
import { useLocation } from 'react-router-dom';
import { SeedTable } from 'seed';

const Seed: React.FC = () => {
  const location = useLocation();
  const { seedName } = location.state;
  const seed = SeedTable[seedName];
  const { imgUrl, plantName, growingPeriod, description } = seed;
  return (
    <div>
      <img src={imgUrl} alt='' />
      <p>{plantName}</p>
      <span>물주기 횟수 : {growingPeriod}</span>
      <p>{description.skill}</p>
      <p>{description.description}</p>
      <button>{plantName} 심으러가기</button>
    </div>
  );
};

export default Seed;
