import seedbagImage from 'assets/image/seedbag.png';
import React from 'react';

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
  const imageUrl = getImageUrl(plantName);

  return (
    <li className='w-full flex justify-around items-center rounded-lg bg-[#DBF2A9] py-5'>
      <div className='w-12 h-12 object-cover'>
        <img src={imageUrl} alt={plantName} />
      </div>
      <div className='text-left'>
        <p className='text-lg font-bold'>{author}</p>
        <p className='text-sm'>{createDate}</p>
      </div>
    </li>
  );
};

export default MessageBoxItem;
