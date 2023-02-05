import HostNav from 'components/host-nav';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface HostWrapperProps {
  children: React.ReactElement;
}

const HostWrapper: React.FC<HostWrapperProps> = ({ children }) => {
  const navigate = useNavigate();

  if (window.localStorage.getItem('tutorial') !== 'DONE') {
    toast.error('튜토리얼을 진행합니다!');
    navigate('/tutorial-host');
  }

  return (
    <div className='relative w-full h-full'>
      {children}
      <div className='absolute left-0 z-50 w-full h-auto bottom-4'>
        <HostNav />
      </div>
    </div>
  );
};

export default HostWrapper;
