import { QueryKey } from "@/utils/constants";
import useSWR, { SWRConfiguration } from "swr";
import { articleApi } from "../api";

export interface UseArticleDetailProps {
  slug: string;
  options?: SWRConfiguration;
}

export function useArticleDetail({ slug, options }: UseArticleDetailProps) {
  const swrResponse = useSWR(
    [QueryKey.GET_USER_LIST, slug],
    () => articleApi.getArticleBySlug(slug),
    {
      keepPreviousData: true,
      fallbackData: {},
      ...options,
    }
  );

  return swrResponse;
}
