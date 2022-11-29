import HostNav from 'components/host-nav';
import React from 'react';

interface HostWrapperProps {
  children: React.ReactElement;
}

const HostWrapper: React.FC<HostWrapperProps> = ({ children }) => {
  return (
    <div className='relative w-full h-full'>
      {children}
      <div className='absolute left-0 z-50 w-full h-auto bottom-3'>
        <HostNav />
      </div>
    </div>
  );
};

export default HostWrapper;
