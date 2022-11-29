import type { Plant } from 'entities/plant';
import GardenHost from 'pages/garden-host';
import React from 'react';

import GardenWrapper from './GardenWrapper';
import HostWrapper from './HostWrapper';

const GardenHostPage: React.FC = () => (
  <GardenWrapper>
    {(plantList: Plant[]) => (
      <HostWrapper>
        <GardenHost plantList={plantList} />
      </HostWrapper>
    )}
  </GardenWrapper>
);

export default GardenHostPage;
