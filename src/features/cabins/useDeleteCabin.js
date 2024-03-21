import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

//////////////////////////
export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // delete / create / update = useMutation
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      toast.success("Cabin successfully deleted 🎉");

      queryClient.invalidateQueries({ queryKey: ["Cabins"] });
    },

    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteCabin };
}
