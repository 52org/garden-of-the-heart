import React from 'react';
import { Outlet } from 'react-router-dom';

import HostWrapper from './HostWrapper';

const HostDefaultTemplate: React.FC = () => {
  return (
    <HostWrapper>
      <Outlet />
    </HostWrapper>
  );
};

export default HostDefaultTemplate;
