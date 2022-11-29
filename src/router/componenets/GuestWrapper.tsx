import GuestNav from 'components/guest-nav';
import React from 'react';

interface GuestWrapperProps {
  children: React.ReactElement;
}

const GuestWrapper: React.FC<GuestWrapperProps> = ({ children }) => {
  return (
    <div className='relative w-full h-full'>
      {children}
      <div className='absolute bottom-0 left-0 z-50 w-full h-auto'>
        <GuestNav />
      </div>
    </div>
  );
};

export default GuestWrapper;
