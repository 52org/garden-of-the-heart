import type { Plant } from 'entities/plant';
import GardenHost from 'pages/garden-host';
import React from 'react';

import GardenWrapper from './GardenWrapper';

const GardenHostPage: React.FC = () => (
  <GardenWrapper>{(plantList: Plant[]) => <GardenHost plantList={plantList} />}</GardenWrapper>
);

export default GardenHostPage;
