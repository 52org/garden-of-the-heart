import React from 'react';
import { Outlet } from 'react-router-dom';

import GuestWrapper from './GuestWrapper';

const GuestDefaultTemplate: React.FC = () => {
  return (
    <GuestWrapper>
      <Outlet />
    </GuestWrapper>
  );
};

export default GuestDefaultTemplate;
