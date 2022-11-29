import GuestNav from 'components/guest-nav';
import React from 'react';

interface GuestWrapperProps {
  children: React.ReactElement;
}

const GuestWrapper: React.FC<GuestWrapperProps> = ({ children }) => {
  return (
    <div className='relative w-full h-full'>
      {children}
      <div className='absolute left-0 z-50 w-full h-auto bottom-3'>
        <GuestNav />
      </div>
    </div>
  );
};

export default GuestWrapper;
