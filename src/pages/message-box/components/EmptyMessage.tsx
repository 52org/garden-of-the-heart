import React from 'react';

const EmptyMessage: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <span className='block'>열린 편지가 없습니다.</span>
    </div>
  );
};

export default EmptyMessage;
