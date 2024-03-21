import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";

//////////////////////////
export function useCabin() {
  // read = useQuery
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Cabins"],
    queryFn: getCabins,
  });

  return {
    cabins,
    isLoading,
    error,
  };
}
