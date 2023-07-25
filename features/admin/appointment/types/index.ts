import { CommonAttribute } from "@/utils/types";

export * from "./createAppointmentPayload";
export * from "./getListAppointmentParams";
export * from "./updateAppointmentPayload";

export interface Appointment extends CommonAttribute {
  patient_name: string;
  appointment_time: string;
  reason: string;
  status?: number;
  patient_phone_number: string;
  patient_address?: string;
  email?: string;
}

export interface AppointmentList {
  dataSource: Appointment[];
}
