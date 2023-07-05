import { PageSize, QueryKey } from "@/utils/constants";
import useSWR, { SWRConfiguration } from "swr";
import { userApi } from "../api";
import { GetListUserParams } from "../types";

export interface UseUserListProps {
  params: Partial<GetListUserParams>;
  options?: SWRConfiguration;
}

export function useUserList({ params, options }: UseUserListProps) {
  const swrResponse = useSWR(
    [QueryKey.GET_USER_LIST, params],
    () => userApi.getListUser(params),
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
