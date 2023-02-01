import Title from 'pages/garden/components/Title';
import React from 'react';
import { Outlet } from 'react-router-dom';

import GuestWrapper from './GuestWrapper';

const GuestDefaultTemplate: React.FC = () => {
  return (
    <GuestWrapper>
      <>
        <Title isHost={false} />
        <div className='pt-8'>
          <Outlet />
        </div>
      </>
    </GuestWrapper>
  );
};

export default GuestDefaultTemplate;
