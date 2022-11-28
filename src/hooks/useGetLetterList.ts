import { useQuery } from "@tanstack/react-query";
import apiService from "services/api";

import { useAppSelector } from "./useAppSelector";

function getLetterList(uuid: string | null) {
  return async () => {
    if (!uuid) {
      return null;
    }

    return await apiService.getLetterList(uuid);
  }
}


export default function useGetLetterList() {

  const { uuid } = useAppSelector(state => state.base);

  const query = useQuery({ queryKey: [uuid], queryFn: getLetterList(uuid) });

  return query;
}