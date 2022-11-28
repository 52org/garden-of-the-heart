import dayjs from 'dayjs';
import type { Letter } from 'entities/letter';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getPlantImage } from 'utils';

interface Props {
  letter: Letter;
}

const MessageBoxItem = ({ letter }: Props) => {
  const { plantName, letterId, author, createDate } = letter;

  const imageUrl = useMemo(() => getPlantImage(plantName), [plantName]);
  const date = useMemo(() => dayjs(createDate, 'YYYY-MM-DD').format('YY.MM.DD'), [createDate]);

  return (
    <li className='rounded-lg bg-[#DBF2A9] px-5 mx-auto'>
      <Link to={`/message/${letterId}`} className='flex items-center'>
        <div className='object-cover w-2/5'>
          <img src={imageUrl} alt={plantName} />
        </div>
        <div className='ml-10 text-left'>
          <p className='mb-3 text-lg font-bold'>
            {author}의 {plantName}
          </p>
          <p className='text-sm'>{date}</p>
        </div>
      </Link>
    </li>
  );
};

export default MessageBoxItem;
