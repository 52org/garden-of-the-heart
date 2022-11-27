import seedbagImage from 'assets/image/seedbag.png';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';

interface Props {
  plantName: string;
  author: string;
  createDate: string;
}

const getImageUrl = (plantName: string) => {
  const targetImage =
    {
      토마토: seedbagImage,
    }[plantName] ?? 'default';

  return targetImage;
};

const MessageBoxItem = ({ plantName, author, createDate }: Props) => {
  const imageUrl = useMemo(() => getImageUrl(plantName), [plantName]);
  const date = useMemo(() => dayjs(createDate, 'YYYY-MM-DD').format('YY.MM.DD'), [createDate]);

  return (
    <li className='w-10/12 flex items-center rounded-lg bg-[#DBF2A9] px-7 py-5 mx-auto'>
      <div className='w-12 h-12 object-cover'>
        <img src={imageUrl} alt={plantName} />
      </div>
      <div className='text-left ml-12'>
        <p className='text-lg font-bold mb-1'>{author}</p>
        <p className='text-sm'>{date}</p>
      </div>
    </li>
  );
};

export default MessageBoxItem;
