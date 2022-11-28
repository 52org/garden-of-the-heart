import type { Plant } from 'entities/plant';
import React from 'react';
import { Link } from 'react-router-dom';

interface GardenHostProps {
  plantList: Plant[];
}

const GardenHost: React.FC<GardenHostProps> = ({ plantList }) => {
  return (
    <div>
      <Link to='/messagebox'>편지함으로</Link>
    </div>
  );
};

export default GardenHost;
