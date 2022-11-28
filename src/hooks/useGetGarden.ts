import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import apiService from "services/api";
import { setName } from "store/modules/base";

import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";


function getGarden(uuid: string | null) {
  return async () => {
    if (!uuid) {
      return null;
    }

    return await apiService.getGarden(uuid);
  }
}

export default function useGetGarden() {

  const { uuid } = useAppSelector(state => state.base);
  const dispatch = useAppDispatch();

  const query = useQuery({ queryKey: [uuid], queryFn: getGarden(uuid) });

  useEffect(() => {

    if (query.data) {
      dispatch(setName(query.data.name));
    }

  }, [query, dispatch]);

  return query;
}