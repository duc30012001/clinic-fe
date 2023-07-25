import axiosClient from "@/apiClient";
import { showNotification } from "@/helpers";
import { ErrorResponse, ListResponse, SuccessResponse } from "@/utils/types";
import { AxiosError } from "axios";
import {
  Appointment,
  CreateAppointmentPayload,
  GetListAppointmentParams,
  UpdateAppointmentPayload,
  UpdateStatusAppointmentPayload,
} from "../types";

export const appointmentApi = {
  getListAppointment(
    params: Partial<GetListAppointmentParams>
  ): Promise<ListResponse<Appointment>> {
    return axiosClient.get("/appointment/list", { params });
  },

  async updateStatusAppointment({
    appointmentId,
    status,
  }: UpdateStatusAppointmentPayload) {
    try {
      const response: SuccessResponse = await axiosClient.patch(
        `/appointment/update-status/${appointmentId}`,
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

  async createAppointment(payload: CreateAppointmentPayload) {
    try {
      const response: SuccessResponse = await axiosClient.post(
        `/dat-lich-kham`,
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

  async updateAppointment(
    appointmentId: string,
    payload: UpdateAppointmentPayload
  ) {
    try {
      const response: SuccessResponse = await axiosClient.put(
        `/appointment/update/${appointmentId}`,
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
