import { useQuery } from "@tanstack/react-query";
import apiService from "services/api";

function getLetterDetail(letterId: string) {
  return async () => {
    if (!letterId) {
      return null;
    }

    return await apiService.getLetterDetail(letterId);
  }
}

export default function useGetLetterDetail(letterId: string) {
  return useQuery({ queryKey: ["letterDetail"], queryFn: getLetterDetail(letterId) });
}