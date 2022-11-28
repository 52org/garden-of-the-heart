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
      <div>
        <Link to='/seedbag'>씨드백</Link>
      </div>
    </div>
  );
};

export default GardenHost;
