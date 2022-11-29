import type { Plant } from 'entities/plant';
import Garden from 'pages/garden';
import React from 'react';

import UuidInitWrappper from './GardenWrapper';
import GuestWrapper from './GuestWrapper';

const GardenGuestPage: React.FC = () => (
  <UuidInitWrappper>
    {(plantList: Plant[]) => (
      <GuestWrapper>
        <Garden isHost={false} plantList={plantList} />
      </GuestWrapper>
    )}
  </UuidInitWrappper>
);

export default GardenGuestPage;
