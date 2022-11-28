import React from 'react';
import type { Size } from 'types';

import LoadingSpinner from '../loading-spinner/LoadingSpinner';

interface LoadingSpinnerCoverProps {
  className?: string;
  size?: 'xl' | Size;
  show?: boolean;
}

const LoadingSpinnerCover: React.FC<LoadingSpinnerCoverProps> = ({
  className,
  size,
  show = true,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <LoadingSpinner size={size} />
    </div>
  );
};

export default LoadingSpinnerCover;
