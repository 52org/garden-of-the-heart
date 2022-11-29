import type { Plant } from 'entities/plant';
import GardenGuest from 'pages/garden-guest';
import React from 'react';

import UuidInitWrappper from './GardenWrapper';
import GuestWrapper from './GuestWrapper';

const GardenGuestPage: React.FC = () => (
  <UuidInitWrappper>
    {(plantList: Plant[]) => (
      <GuestWrapper>
        <GardenGuest plantList={plantList} />
      </GuestWrapper>
    )}
  </UuidInitWrappper>
);

export default GardenGuestPage;
