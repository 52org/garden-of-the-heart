import type { Plant } from 'entities/plant';
import React from 'react';

interface GardenGuestProps {
  plantList: Plant[];
}

const GardenGuest: React.FC<GardenGuestProps> = ({ plantList }) => {
  return <div></div>;
};

export default GardenGuest;
