import { Status } from "@/utils/enum";
import { CommonParams } from "@/utils/types";

export interface GetListArticleParams extends CommonParams {
  status: Status;
  article_category_id: string;
}

export interface UpdateStatusArticlePayload {
  articleId: string;
  status: Status;
}
