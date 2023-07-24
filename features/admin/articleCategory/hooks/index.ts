import { PageSize, QueryKey } from "@/utils/constants";
import useSWR, { SWRConfiguration } from "swr";
import { articleCategoryApi } from "../api";
import { GetListArticleCategoryParams } from "../types";

export interface UseArticleCategoryListProps {
  params: Partial<GetListArticleCategoryParams>;
  options?: SWRConfiguration;
}

export function useArticleCategoryList({ params, options }: UseArticleCategoryListProps) {
  const swrResponse = useSWR(
    [QueryKey.GET_USER_LIST, params],
    () => articleCategoryApi.getListArticleCategory(params),
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
