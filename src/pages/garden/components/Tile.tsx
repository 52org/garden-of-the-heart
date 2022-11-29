import type { Plant } from 'entities/plant';
import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getPlantImage } from '../utils/getPlantImage';

interface TileProps {
  isHost: boolean;
  plant: Plant;
}

const Tile: React.FC<TileProps> = ({ plant, isHost }) => {
  const imgUrl = useMemo(() => getPlantImage(plant), [plant]);

  const navigate = useNavigate();

  const moveToPlantDetail = useCallback(() => {
    if (isHost) {
      navigate(`/plant/${plant.letterId}`);
    } else {
      toast.info('텃밭의 주인이 물을 주면서 당신의 편지를 기다릴거에요. 😊');
    }
  }, [plant, isHost, navigate]);

  return (
    <button
      onClick={moveToPlantDetail}
      className='m-0 p-0 block w-[120px] h-[120px] bg-black bg-opacity-20'
    >
      <div className='relative overflow-hidden'>
        <img src={imgUrl} alt='직물' />
      </div>
    </button>
  );
};

export default Tile;
