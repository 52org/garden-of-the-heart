import './LoadingSpinner.scss';

import React from 'react';
import type { Size } from 'types';

interface LoadingSpinnerProps {
  size?: 'xl' | Size;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md' }) => {
  return (
    <div>
      <svg
        className={`loading-spinner ${size}`}
        viewBox='0 0 66 66'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='path'
          fill='none'
          strokeWidth='6'
          strokeLinecap='round'
          cx='33'
          cy='33'
          r='30'
        ></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
