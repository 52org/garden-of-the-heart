import type { Plant } from 'entities/plant';
import React from 'react';

import Tile from './Tile';

interface GroundProps {
  plantList: Plant[];
  isHost: boolean;
}

const Ground: React.FC<GroundProps> = ({ plantList, isHost }) => {
  return (
    <div className='w-[360px] h-[360px] flex-wrap bg-groundColor-100 flex justify-start overflow-hidden'>
      {plantList.map((plant) => (
        <Tile key={plant.letterId} plant={plant} isHost={isHost} />
      ))}
    </div>
  );
};

export default Ground;
