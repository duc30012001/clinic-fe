import axiosClient from "@/apiClient";
import { Article, GetListArticleParams } from "@/features/admin/article/types";
import { ListResponse } from "@/utils/types";

export const articleApi = {
  getListArticle(
    params: Partial<GetListArticleParams>
  ): Promise<ListResponse<Article>> {
    return axiosClient.get("/tin-tuc", { params });
  },
};
