import { useMutation } from "@tanstack/react-query";
import type { LetterData } from "entities/request";
import apiService from "services/api";
import { changeIsLoading, clearCreateLetterData, setErrorMessage } from "store/modules/base";

import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

function postLetter(letterData: LetterData | null) {
  return async () => {
    if (!letterData) {
      return null;
    }

    return await apiService.postLetter(letterData);
  };
}

export default function useSendLetter() {
  const { createLetterData } = useAppSelector((state) => state.base);

  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: postLetter(createLetterData),
    onMutate: () => {
      dispatch(changeIsLoading(true));
    },
    onSuccess: () => {
      dispatch(clearCreateLetterData());
    },
    onError: () => {
      dispatch(setErrorMessage('편지가 제대로 전달되지 않았습니다.'));
    },
  });

  return mutation;
}