import { GetListArticleParams } from "@/features/admin/article/types";
import { GetListArticleCategoryParams } from "@/features/admin/articleCategory/types";
import { PageSize, QueryKey } from "@/utils/constants";
import useSWR, { SWRConfiguration } from "swr";
import { articleApi, articleCategoryApi } from "../api";

export interface UseArticleListProps {
  params: Partial<GetListArticleParams>;
  options?: SWRConfiguration;
}

export function useArticleList({ params, options }: UseArticleListProps) {
  const swrResponse = useSWR(
    [QueryKey.GET_USER_LIST, params],
    () => articleApi.getListArticle(params),
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

export interface UseArticleCategoryListProps {
  params: Partial<GetListArticleCategoryParams>;
  options?: SWRConfiguration;
}

export function useArticleCategoryList({
  params,
  options,
}: UseArticleCategoryListProps) {
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
