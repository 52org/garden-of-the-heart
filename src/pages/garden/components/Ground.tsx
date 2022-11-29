import { ground_base } from 'assets/image/garden';
import type { Plant } from 'entities/plant';
import React from 'react';

import Tile from './Tile';

interface GroundProps {
  plantList: Plant[];
  isHost: boolean;
}

const Ground: React.FC<GroundProps> = ({ plantList, isHost }) => {
  return (
    <div className='w-[360px] h-[360px] flex-wrap bg-groundColor-100 flex justify-start overflow-hidden rounded-md'>
      <img className='w-full h-full' src={ground_base} alt='땅'></img>
      {plantList.map((plant) => (
        <Tile key={plant.letterId} plant={plant} isHost={isHost} />
      ))}
    </div>
  );
};

export default Ground;
