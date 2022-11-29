import type { Plant } from 'entities/plant';
import React from 'react';

import Tile from './Tile';

interface GroundProps {
  plantList: Plant[];
  isHost: boolean;
}

const Ground: React.FC<GroundProps> = ({ plantList, isHost }) => {
  return (
    <div className='w-[360px] h-[360px] grid grid-cols-3 grid-rows-3 gap-0 bg-groundColor-100 overflow-hidden opacity-90 rounded-md'>
      {plantList.map((plant) => (
        <Tile key={plant.letterId} plant={plant} isHost={isHost} />
      ))}
    </div>
  );
};

export default Ground;
