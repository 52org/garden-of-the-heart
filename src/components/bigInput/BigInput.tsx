import React from 'react';

interface BigInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const BigInput: React.FC<BigInputProps> = ({ handleChange, placeholder }) => {
  return (
    <input
      className='w-8/12 border-b-2 border-b-groundColor-200 mb-7 text-lg outline-none bg-transparent text-center'
      type='text'
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default BigInput;
