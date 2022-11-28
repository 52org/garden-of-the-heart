import { useQuery } from "@tanstack/react-query";
import apiService from "services/api";

function getPlantDetail(letterId: string) {
  return async () => {
    if (!letterId) {
      return null;
    }

    return await apiService.getGardenPlantDetail(letterId);
  }
}

export default function useGetPlantDetail(letterId: string) {
  return useQuery({ queryKey: ["plantDetail"], queryFn: getPlantDetail(letterId) });
}
