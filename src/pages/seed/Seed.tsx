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
    <div>
      <img src={imgUrl} alt='' />
      <p>{plantName}</p>
      <span>물주기 횟수 : {growingPeriod}</span>
      <p>{description.skill}</p>
      <p>{description.description}</p>
      <p>
        {plantName} <button onClick={routeToMessageForm}>심으러가기</button>
      </p>
    </div>
  );
};

export default Seed;
