import React from 'react';

const Seed: React.FC = () => {
  // const location = useLocation()
  // const {plantName, imgURL} = location.state.seed
  return (
    <div>
      <img src='imgURL' alt='' />
      <title>plantName</title>
      <span>물주기 횟수 : growingPeriod</span>
      <p>description</p>

      <button>plantName심으러가기</button>
    </div>
  );
};

export default Seed;
