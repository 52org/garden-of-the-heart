import React from 'react';

interface HighlightDescriptionProps {
  direction: 'top' | 'right' | 'bottom' | 'left';
  content: string;
}

const HighlightDescription: React.FC<HighlightDescriptionProps> = ({ direction, content }) => {
  return (
    <div
      className={
        direction === 'left' || direction === 'right'
          ? direction === 'left'
            ? 'flex justify-center items-center z-[200] max-w-[250px] popover-left'
            : 'flex justify-center items-center z-[200] max-w-[250px] popover-right'
          : direction === 'bottom'
          ? 'flex flex-col justify-center items-center z-[200] max-w-[300px] popover-bottom'
          : 'flex flex-col justify-center items-center z-[200] max-w-[300px] popover-top'
      }
    >
      <div className='flex items-center px-3 py-2 text-xl rounded-xl bg-bgColor-100'>{content}</div>
    </div>
  );
};

export default HighlightDescription;
