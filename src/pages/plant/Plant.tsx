import Waiting from 'components/waiting';
import useGetPlantDetail from 'hooks/useGetPlantDetail';
import React from 'react';
import { getPlantImage } from 'utils';

const Plant: React.FC = () => {
  // const { letterId } = useParams();
  const { isLoading, data } = useGetPlantDetail(String(2));

  if (!data) {
    return null;
  }
  const plantImage = getPlantImage(data?.plantName);

  return (
    <Waiting loading={isLoading}>
      <div className='p-5'>
        <div className='border-trueGray-200 border-solid border-2'>
          <img src={plantImage} alt='plant-detail' className='w-4/6 object-cover flex mx-auto' />
        </div>
        <button className='w-6 h-6 border-trueGray-200 border-solid border-2'>+</button>
        <div className='flex p-5'>
          <p className='mr-3'>{data?.plantName}</p>
          <p>{data?.wateringCount}번 물을 줬어요</p>
        </div>
        <ul className='p-5 list-decimal'>
          {Array.isArray(data.keywords) &&
            data?.keywords.map((word, idx) => (
              <li key={`${word}-${idx}`}>
                <p>{word}</p>
              </li>
            ))}
        </ul>
      </div>
    </Waiting>
  );
};

export default Plant;
