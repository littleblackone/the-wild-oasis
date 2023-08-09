import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryFn: getCabins,
    queryKey: ["cabins"],
  });
  return { isLoading, error, cabins };
}
