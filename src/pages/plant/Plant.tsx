import Waiting from 'components/waiting';
import useGetPlantDetail from 'hooks/useGetPlantDetail';
import type { MouseEventHandler } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getGrowingPeriod, getPlantDetailImage } from 'utils';

const Plant: React.FC = () => {
  // const { letterId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useGetPlantDetail(String(22));

  if (!data || !Array.isArray(data.keywords)) {
    return null;
  }

  const plantImage = getPlantDetailImage(data?.wateringCount, data?.plantName);
  const growingPeriod = getGrowingPeriod(data?.plantName);

  const onWateringClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(data);
  };

  const onViewLetterClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`message/2`);
  };

  const isGrowing = data?.wateringCount < growingPeriod;

  const buttonText = isGrowing ? '물 주기' : '내용 보기';
  const onButtonClick = isGrowing ? onWateringClick : onViewLetterClick;

  const keywordItem = (word: string, idx: number) => {
    if (idx >= data?.wateringCount) {
      return (
        <li className='blur-sm w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20'>
          <p>물을 주면 잎새를 확인할 수 있습니다!</p>
        </li>
      );
    }

    return (
      <li>
        <p>{word}</p>
      </li>
    );
  };

  return (
    <Waiting loading={isLoading}>
      <div className='p-5'>
        <div className='border-trueGray-200 border-solid border-2'>
          <img src={plantImage} alt='plant-detail' className='w-4/6 object-cover flex mx-auto' />
        </div>
        <button
          type='button'
          className='border-trueGray-200 border-solid border-2'
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
        <div className='flex p-5'>
          <p className='mr-3'>{data?.plantName}</p>
          <p>{data?.wateringCount}번 물을 줬어요</p>
        </div>
        <ul className='p-5 list-decimal'>
          {data?.keywords.map((word, idx) => (
            <React.Fragment key={`${word}-${idx}`}>{keywordItem(word, idx)}</React.Fragment>
          ))}
        </ul>
      </div>
    </Waiting>
  );
};

export default Plant;
