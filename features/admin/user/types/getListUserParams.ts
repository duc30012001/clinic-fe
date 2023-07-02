import { Status } from "@/utils/enum";
import { CommonParams } from "@/utils/types";

export interface GetListUserParams extends CommonParams {
  status: Status;
}

export interface UpdateUserPayload {
  userId: string;
  status: Status;
}
