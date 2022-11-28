import SeedBag from 'pages/seed-bag';
import React from 'react';

import UuidInitWrappper from './UuidInitWrapper';

const SeedBagPage: React.FC = () => (
  <UuidInitWrappper>
    <SeedBag />
  </UuidInitWrappper>
);

export default SeedBagPage;
