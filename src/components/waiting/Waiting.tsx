import classNames from 'classnames';
import React from 'react';
import type { Size } from 'types';

import LoadingSpinnerCover from './components/loading-spinner-cover';

const ANIMATE = 'animate-on';

interface WaitingProps {
  loading?: boolean;
  size?: 'xl' | Size;
  isAnimate?: boolean;
  children: React.ReactElement | null;
}

const Waiting: React.FC<WaitingProps> = ({
  loading = false,
  size = 'xl',
  isAnimate = false,
  children,
}) => {
  if (loading) {
    return <LoadingSpinnerCover size={size} />;
  }

  return (
    <div
      className={classNames('w-full h-full', {
        [ANIMATE]: isAnimate,
      })}
    >
      {children}
    </div>
  );
};

export default Waiting;
