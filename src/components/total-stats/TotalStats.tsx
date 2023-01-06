import useCountUp from 'hooks/useCountUp';
import React from 'react';

interface TotalStatsProp {
  gardenCount: number;
  plantCount: number;
}

const TotalStats: React.FC<TotalStatsProp> = ({ gardenCount, plantCount }) => {
  const gardenCounting = useCountUp(gardenCount);
  const plantCounting = useCountUp(plantCount);

  return (
    <div>
      <p>
        현재 <span className='text-btnColor-200'>{gardenCounting}</span>개의 텃밭에
      </p>
      <p>
        <span className='text-btnColor-200'>&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{plantCounting}</span>
        개의 씨앗이 심어졌어요!
      </p>
    </div>
  );
};

export default TotalStats;
