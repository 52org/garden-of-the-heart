import Title from 'pages/garden/components/Title';
import React from 'react';
import { Outlet } from 'react-router-dom';

import HostWrapper from './HostWrapper';

const HostDefaultTemplate: React.FC = () => {
  return (
    <HostWrapper>
      <>
        <Title isHost />
        <div className='pt-8'>
          <Outlet />
        </div>
      </>
    </HostWrapper>
  );
};

export default HostDefaultTemplate;
