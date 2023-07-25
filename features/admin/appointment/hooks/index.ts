import { PageSize, QueryKey } from "@/utils/constants";
import useSWR, { SWRConfiguration } from "swr";
import { appointmentApi } from "../api";
import { GetListAppointmentParams } from "../types";

export interface UseAppointmentListProps {
  params: Partial<GetListAppointmentParams>;
  options?: SWRConfiguration;
}

export function useAppointmentList({
  params,
  options,
}: UseAppointmentListProps) {
  const swrResponse = useSWR(
    [QueryKey.GET_USER_LIST, params],
    () => appointmentApi.getListAppointment(params),
    {
      keepPreviousData: true,
      fallbackData: {
        data: [],
        pagination: {
          page: 1,
          take: PageSize,
          itemCount: 0,
          pageCount: 1,
          hasPreviousPage: false,
          hasNextPage: false,
        },
      },
      ...options,
    }
  );

  return swrResponse;
}
