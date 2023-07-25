import { Status } from "@/utils/enum";
import { CommonParams } from "@/utils/types";

export interface GetListAppointmentParams extends CommonParams {
  status: Status;
}

export interface UpdateStatusAppointmentPayload {
  appointmentId: string;
  status: Status;
}
