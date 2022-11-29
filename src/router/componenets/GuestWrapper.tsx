import GuestNav from 'components/guest-nav';
import { useAppDispatch } from 'hooks';
import React, { useEffect } from 'react';
import { clearCreateLetterData } from 'store/modules/base';

interface GuestWrapperProps {
  children: React.ReactElement;
}

const GuestWrapper: React.FC<GuestWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCreateLetterData());
  }, []);

  return (
    <div className='relative w-full h-full'>
      {children}
      <div className='absolute left-0 z-50 w-full h-auto bottom-4'>
        <GuestNav />
      </div>
    </div>
  );
};

export default GuestWrapper;
