import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { getPlantImage } from 'utils';

interface Props {
  plantName: string;
  author: string;
  createDate: string;
}

const MessageBoxItem = ({ plantName, author, createDate }: Props) => {
  const imageUrl = useMemo(() => getPlantImage(plantName), [plantName]);
  const date = useMemo(() => dayjs(createDate, 'YYYY-MM-DD').format('YY.MM.DD'), [createDate]);

  return (
    <li className='flex items-center rounded-lg bg-[#DBF2A9] px-5 mx-auto mb-5'>
      <div className='w-2/5 object-cover'>
        <img src={imageUrl} alt={plantName} />
      </div>
      <div className='text-left ml-10'>
        <p className='text-lg font-bold mb-3'>
          {author}의 {plantName}
        </p>
        <p className='text-sm'>{date}</p>
      </div>
    </li>
  );
};

export default MessageBoxItem;
