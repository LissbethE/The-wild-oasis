import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getBooking } from "../../services/apiBookings";

//////////////////////////

export function useBooking() {
  const { bookingId } = useParams();

  // read = useQuery
  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return {
    booking,
    isLoading,
    error,
  };
}
