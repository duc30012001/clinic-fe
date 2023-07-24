import axiosClient from "@/apiClient";
import { showNotification } from "@/helpers";
import { ErrorResponse, ListResponse, SuccessResponse } from "@/utils/types";
import { AxiosError } from "axios";
import {
  CreateArticleCategoryPayload,
  GetListArticleCategoryParams,
  UpdateStatusArticleCategoryPayload,
  UpdateArticleCategoryPayload,
  ArticleCategory,
} from "../types";

export const articleCategoryApi = {
  getListArticleCategory(params: Partial<GetListArticleCategoryParams>): Promise<ListResponse<ArticleCategory>> {
    return axiosClient.get("/article-category/list", { params });
  },

  async updateStatusArticleCategory({ articleCategoryId, status }: UpdateStatusArticleCategoryPayload) {
    try {
      const response: SuccessResponse = await axiosClient.patch(
        `/article-category/update-status/${articleCategoryId}`,
        {
          status,
        }
      );
      showNotification("success", response.message);
    } catch (error) {
      console.log("error:", error);
      const err = error as AxiosError<ErrorResponse>;
      const message = err.response?.data.message || ""; //|| messages("message.somethingWentWrong");
      showNotification("error", message);
    }
  },

  async createArticleCategory(payload: CreateArticleCategoryPayload) {
    try {
      const response: SuccessResponse = await axiosClient.post(
        `/article-category/create`,
        payload
      );

      showNotification("success", response.message);
      return true;
    } catch (error) {
      console.log("error:", error);
      const err = error as AxiosError<ErrorResponse>;
      const message = err.response?.data.message || ""; //|| messages("message.somethingWentWrong");
      showNotification("error", message);
      return false;
    }
  },

  async updateArticleCategory(articleCategoryId: string, payload: UpdateArticleCategoryPayload) {
    try {
      const response: SuccessResponse = await axiosClient.put(
        `/article-category/update/${articleCategoryId}`,
        payload
      );

      showNotification("success", response.message);
      return true;
    } catch (error) {
      console.log("error:", error);
      const err = error as AxiosError<ErrorResponse>;
      const message = err.response?.data.message || ""; //|| messages("message.somethingWentWrong");
      showNotification("error", message);
      return false;
    }
  },
};
