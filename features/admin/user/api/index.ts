import axiosClient from "@/apiClient";
import { showNotification } from "@/helpers";
import { ErrorResponse, ListResponse } from "@/utils/types";
import { AxiosError } from "axios";
import { GetListUserParams, UpdateUserPayload, User } from "../types";

export const userApi = {
  getListUser(params: Partial<GetListUserParams>): Promise<ListResponse<User>> {
    return axiosClient.get("/user/list", { params });
  },

  async updateStatusUser({ userId, status }: UpdateUserPayload) {
    try {
      await axiosClient.patch(`/user/update-status/${userId}`, {
        status: Number(status),
      });
    } catch (error) {
      console.log("error:", error);
      const err = error as AxiosError<ErrorResponse>;
      const message = err.response?.data.message || ""; //|| messages("message.somethingWentWrong");
      showNotification("error", message);
    }
  },
};
