import GardenGuest from 'pages/garden-guest';
import React from 'react';

import UuidInitWrappper from './UuidInitWrapper';

const GardenGuestPage: React.FC = () => (
  <UuidInitWrappper>
    <GardenGuest />
  </UuidInitWrappper>
);

export default GardenGuestPage;
