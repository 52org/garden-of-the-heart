import React from 'react';

type RefProps = React.Ref<HTMLInputElement>;
interface BigInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name?: string;
}

const BigInput: React.FC<BigInputProps> = ({ handleChange, placeholder, name}) => {
  return (
    <input
      className='w-8/12 border-b-2 border-b-groundColor-200 mb-7 text-lg outline-none bg-transparent text-center'
      type='text'
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      // ref={ref}
    />
  );
};

export default BigInput;