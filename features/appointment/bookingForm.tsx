"use client";

import { DatePickerField, InputField, TextAreaField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { appointmentApi } from "../admin/appointment/api";

type Props = {};

type BookingProps = {
  patient_name: string;
  patient_phone_number: string;
  appointment_time: dayjs.ConfigType;
  email?: string;
  reason: string;
  patient_address: string;
};

export default function BookingForm({}: Props) {
  const { messages } = useTranslate();

  const validationSchema = yup.object({
    patient_name: yup.string().required(messages("validation.inputRequired")),
    reason: yup.string().required(messages("validation.inputRequired")),
    patient_phone_number: yup
      .string()
      .required(messages("validation.inputRequired")),
    appointment_time: yup
      .string()
      .required(messages("validation.inputRequired")),
    email: yup.string().email(messages("validation.emailFormat")).optional(),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control, reset } = useForm<BookingProps>({
    resolver,
    defaultValues: {
      appointment_time: dayjs(),
    },
  });

  async function handleBookingSubmit(values: BookingProps) {
    const dataSubmit = {
      ...values,
      appointment_time: dayjs(values.appointment_time).format(),
    };
    for (const key in dataSubmit) {
      if (!dataSubmit[key]) {
        delete dataSubmit[key];
      }
    }
    const isSuccess = await appointmentApi.createAppointment(dataSubmit);
    if (isSuccess) {
      reset();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleBookingSubmit)}>
        <InputField
          name="patient_name"
          control={control}
          label="Họ và tên"
          required
        />
        <InputField
          name="patient_phone_number"
          control={control}
          label="Số điện thoại"
          required
        />
        <InputField name="email" control={control} label="Email" />
        <TextAreaField
          name="reason"
          control={control}
          label="Triệu chứng"
          required
        />
        <TextAreaField
          name="patient_address"
          control={control}
          label="Địa chỉ liên lạc"
        />
        <DatePickerField
          name="appointment_time"
          control={control}
          label="Ngày khám"
          required
        />
        <Button primary type="submit" className="mt-4 w-full max-w-none">
          Đặt lịch khám
        </Button>
      </form>
    </div>
  );
}
