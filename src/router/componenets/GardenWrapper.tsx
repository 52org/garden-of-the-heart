import Waiting from 'components/waiting';
import type { Plant } from 'entities/plant';
import { useAppDispatch } from 'hooks';
import useGetGarden from 'hooks/useGetGarden';
import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setUuId } from 'store/modules/base';

interface GardenWrappperProps {
  children: (plantList: Plant[]) => React.ReactElement;
}

const GardenWrappper: React.FC<GardenWrappperProps> = ({ children }) => {
  const { uuid } = useParams();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading, isError, data } = useGetGarden();

  const loading = useMemo(() => {
    if (!isLoading && data) {
      return false;
    }

    return true;
  }, [isLoading, data]);

  useEffect(() => {
    if (uuid) {
      dispatch(setUuId(uuid));
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isError) {
      navigate('/home');
    }
  }, [isError, navigate]);

  return <Waiting loading={loading}>{data ? children(data.plantList) : null}</Waiting>;
};

export default GardenWrappper;
