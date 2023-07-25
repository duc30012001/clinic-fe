export interface UpdateAppointmentPayload {
  patient_name: string;
  appointment_time: string;
  patient_phone_number: string;
  patient_address?: string;
  email?: string;
}
