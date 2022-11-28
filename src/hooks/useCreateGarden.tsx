import { useMutation } from '@tanstack/react-query';
import type { Owner } from 'entities/owner';
import apiService from 'services/api';
import { changeIsLoading, clearCreateOwnerData, setErrorMessage } from 'store/modules/base';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

function postGarden(owner: Owner | null) {
  return async () => {
    if (!owner) {
      return null;
    }

    return await apiService.postGarden(owner);
  };
}

export default function useCreateGarden() {
  const { createOwnerData } = useAppSelector((state) => state.base);

  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: postGarden(createOwnerData),
    onMutate: () => {
      dispatch(changeIsLoading(true));
    },
    onSuccess: () => {
      dispatch(clearCreateOwnerData());
    },
    onError: () => {
      dispatch(setErrorMessage('텃밭이 생성되지 않았습니다.'));
    },
  });

  return mutation.mutate;
}
