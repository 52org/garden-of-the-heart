import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from 'services/api';
import { changeIsLoading, setErrorMessage } from 'store/modules/base';

import { useAppDispatch } from './useAppDispatch';

async function putGardenWater(letterId: string) {
  return apiService.putGardenWater(letterId);
}

export default function useWaterThePlant() {

  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: putGardenWater,
    onMutate: () => {
      dispatch(changeIsLoading(true));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plantDetail"] });
      dispatch(changeIsLoading(false));
    },
    onError: () => {
      dispatch(setErrorMessage('물을 줄 수 없습니다.'));
    },
  }).mutate;
}
