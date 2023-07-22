import axiosClient from "@/apiClient";
import { Article } from "@/features/admin/article/types";

export const articleApi = {
  async getArticleBySlug(slug: string) {
    try {
      const response: Article = await axiosClient.get(`/tin-tuc/${slug}`);
      return response;
    } catch {
      return null;
    }
  },
};
