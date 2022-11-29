import type { Plant } from 'entities/plant';
import Garden from 'pages/garden';
import React from 'react';

import GardenWrapper from './GardenWrapper';
import HostWrapper from './HostWrapper';

const GardenHostPage: React.FC = () => (
  <GardenWrapper>
    {(plantList: Plant[]) => (
      <HostWrapper>
        <Garden isHost plantList={plantList} />
      </HostWrapper>
    )}
  </GardenWrapper>
);

export default GardenHostPage;
