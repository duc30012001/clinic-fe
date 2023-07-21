import axiosClient from "@/apiClient";
import { showNotification } from "@/helpers";
import { ErrorResponse, ListResponse, SuccessResponse } from "@/utils/types";
import { AxiosError } from "axios";
import {
  Article,
  CreateArticlePayload,
  GetListArticleParams,
  UpdateArticlePayload,
  UpdateStatusArticlePayload,
} from "../types";

export const articleApi = {
  getListArticle(
    params: Partial<GetListArticleParams>
  ): Promise<ListResponse<Article>> {
    return axiosClient.get("/article/list", { params });
  },

  async updateStatusArticle({ articleId, status }: UpdateStatusArticlePayload) {
    try {
      const response: SuccessResponse = await axiosClient.patch(
        `/article/update-status/${articleId}`,
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

  async createArticle(payload: CreateArticlePayload) {
    try {
      const response: SuccessResponse = await axiosClient.post(
        `/article/create`,
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

  async updateArticle(articleId: string, payload: UpdateArticlePayload) {
    try {
      const response: SuccessResponse = await axiosClient.put(
        `/article/update/${articleId}`,
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

  async getArticleById(articleId: string) {
    try {
      const response: Article = await axiosClient.get(
        `/article/list/${articleId}`
      );
      return response;
    } catch (error) {
      console.log("error:", error);
      const err = error as AxiosError<ErrorResponse>;
      const message = err.response?.data.message || ""; //|| messages("message.somethingWentWrong");
      showNotification("error", message);
      return null;
    }
  },
};
