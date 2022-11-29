import { ground_base } from 'assets/image/garden';
import type { Plant } from 'entities/plant';
import React from 'react';

import Tile from './Tile';

interface GroundProps {
  plantList: Plant[];
  isHost: boolean;
}

const Ground: React.FC<GroundProps> = ({ plantList, isHost }) => {
  if (!plantList || !Array.isArray(plantList)) {
    return null;
  }

  return (
    <div className='relative w-[360px] h-[360px] bg-groundColor-100 overflow-hidden rounded-md opacity-90'>
      <img className='w-full' src={ground_base} alt='땅'></img>
      <div className='absolute left-0 top-0 z-10 w-[360px] h-[360px] grid-cols-3 grid grid-rows-3'>
        {!plantList || !Array.isArray(plantList) || !plantList[0]
          ? null
          : plantList.map((plant) => <Tile key={plant.letterId} plant={plant} isHost={isHost} />)}
      </div>
    </div>
  );
};

export default Ground;
