import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

//////////////////////////
export function useDeleteBooking() {
  const queryClient = useQueryClient();

  // delete / create / update = useMutation
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success("Booking successfully deleted 🎉");

      queryClient.invalidateQueries({ queryKey: ["Bookings"] });
    },

    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteBooking };
}
