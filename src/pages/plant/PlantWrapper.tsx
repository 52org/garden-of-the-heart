import Waiting from 'components/waiting';
import type { PlantDetail } from 'entities/plant';
import useGetPlantDetail from 'hooks/useGetPlantDetail';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Plant from './Plant';

const PlantWrapper: React.FC = () => {
  const { letterId } = useParams();

  const { isLoading, data } = useGetPlantDetail(letterId ?? '');

  const loading = useMemo(() => {
    if (isLoading || !data) {
      return true;
    }

    return false;
  }, [isLoading, data]);

  return (
    <Waiting loading={loading}>
      <Plant letterId={letterId as string} data={data as PlantDetail} />
    </Waiting>
  );
};

export default PlantWrapper;
