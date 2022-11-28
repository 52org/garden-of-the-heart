import GardenHost from 'pages/garden-host';
import React from 'react';

import UuidInitWrappper from './UuidInitWrapper';

const GardenHostPage: React.FC = () => (
  <UuidInitWrappper>
    <GardenHost />
  </UuidInitWrappper>
);

export default GardenHostPage;
