import type { Plant } from 'entities/plant';
import GardenGuest from 'pages/garden-guest';
import React from 'react';

import UuidInitWrappper from './GardenWrapper';

const GardenGuestPage: React.FC = () => (
  <UuidInitWrappper>
    {(plantList: Plant[]) => <GardenGuest plantList={plantList} />}
  </UuidInitWrappper>
);

export default GardenGuestPage;
