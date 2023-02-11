import React from 'react';

interface BigButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonName: string;
  disabled?: boolean;
}

const BigButton: React.FC<BigButtonProps> = ({ handleClick, buttonName, disabled = false }) => {
  return (
    <button
      className='bg-groundColor-100 text-textColor-200 outline-none py-3 px-9 border-2 border-btnColor-100 border-dotted rounded-2xl'
      onClick={handleClick}
      disabled={disabled}
    >
      <p className='text-xl font-bold'>{buttonName}</p>
    </button>
  );
};

export default BigButton;
