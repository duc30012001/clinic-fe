import { Status } from "@/utils/enum";
import { CommonParams } from "@/utils/types";

export interface GetListArticleCategoryParams extends CommonParams {
  status: Status;
}

export interface UpdateStatusArticleCategoryPayload {
  articleCategoryId: string;
  status: Status;
}
