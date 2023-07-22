import axiosClient from "@/apiClient";
import { Article, GetListArticleParams } from "@/features/admin/article/types";
import {
  ArticleCategory,
  GetListArticleCategoryParams,
} from "@/features/admin/articleCategory/types";
import { ListResponse } from "@/utils/types";

export const articleApi = {
  getListArticle(
    params: Partial<GetListArticleParams>
  ): Promise<ListResponse<Article>> {
    return axiosClient.get("/tin-tuc", { params });
  },
};

export const articleCategoryApi = {
  getListArticleCategory(
    params: Partial<GetListArticleCategoryParams>
  ): Promise<ListResponse<ArticleCategory>> {
    return axiosClient.get("/article-category/list", { params });
  },
};
