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
        <div className='w-2/5 object-cover'>
          <img src={imageUrl} alt={plantName} />
        </div>
        <div className='text-left ml-10'>
          <p className='text-lg font-bold mb-3'>
            {author}의 {plantName}
          </p>
          <p className='text-sm'>{date}</p>
        </div>
      </Link>
    </li>
  );
};

export default MessageBoxItem;
