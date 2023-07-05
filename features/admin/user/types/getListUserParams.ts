import { Status } from "@/utils/enum";
import { CommonParams } from "@/utils/types";

export interface GetListUserParams extends CommonParams {
  status: Status;
}

export interface UpdateStatusUserPayload {
  userId: string;
  status: Status;
}
