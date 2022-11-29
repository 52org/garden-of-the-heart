import Waiting from 'components/waiting';
import useGetPlantDetail from 'hooks/useGetPlantDetail';
import useWaterThePlant from 'hooks/useWaterThePlant';
import type { MouseEventHandler } from 'react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGrowingPeriod } from 'utils';
import { getPlantDetailImage } from 'utils/getPlatnDetailImage';

const Plant: React.FC = () => {
  const { letterId } = useParams();
  const navigate = useNavigate();

  // letterId로 바꾸면 됩니다
  const { isLoading, data } = useGetPlantDetail(letterId ?? '');

  const waterThePlant = useWaterThePlant();

  if (!letterId || !data || !Array.isArray(data.keywords)) {
    return null;
  }

  const plantImage = getPlantDetailImage(data);

  const growingPeriod = getGrowingPeriod(data?.plantName);

  // 물주기 로직 작성하면 됩니다
  const onWateringClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (data.wateringCount < growingPeriod) {
      waterThePlant(letterId);
    }
  };

  // letterId로 바꾸면 됩니다
  const onViewLetterClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`/message/${letterId}`);
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
        <div className='border-2 border-solid border-trueGray-200'>
          <img src={plantImage} alt='plant-detail' className='flex object-cover w-4/6 mx-auto' />
        </div>
        <button
          type='button'
          className='border-2 border-solid border-trueGray-200'
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
