import axiosClient from "@/apiClient";
import { showNotification } from "@/helpers";
import { ErrorResponse, ListResponse, SuccessResponse } from "@/utils/types";
import { AxiosError } from "axios";
import {
  CreateUserPayload,
  GetListUserParams,
  UpdateStatusUserPayload,
  UpdateUserPayload,
  User,
} from "../types";

export const userApi = {
  getListUser(params: Partial<GetListUserParams>): Promise<ListResponse<User>> {
    return axiosClient.get("/user/list", { params });
  },

  async updateStatusUser({ userId, status }: UpdateStatusUserPayload) {
    try {
      const response: SuccessResponse = await axiosClient.patch(
        `/user/update-status/${userId}`,
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

  async createUser(payload: CreateUserPayload) {
    try {
      const response: SuccessResponse = await axiosClient.post(
        `/user/create`,
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

  async updateUser(userId: string, payload: UpdateUserPayload) {
    try {
      const response: SuccessResponse = await axiosClient.put(
        `/user/update/${userId}`,
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
