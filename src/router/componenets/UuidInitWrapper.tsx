import { useAppDispatch } from 'hooks';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initUuId } from 'store/modules/base';

interface UuidInitWrappperProps {
  children: React.ReactElement;
}

const UuidInitWrappper: React.FC<UuidInitWrappperProps> = ({ children }) => {
  const { uuid } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uuid) {
      dispatch(initUuId(uuid));
    }

    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};

export default UuidInitWrappper;
