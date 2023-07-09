import { Status } from "@/utils/enum";
import { CommonParams } from "@/utils/types";

export interface GetListArticleParams extends CommonParams {
  status: Status;
}

export interface UpdateStatusArticlePayload {
  articleId: string;
  status: Status;
}
