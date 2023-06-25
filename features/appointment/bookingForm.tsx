"use client";

import { DatePickerField, InputField, TextAreaField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {};

type BookingProps = {
  fullName: string;
  phoneNumber?: string;
  dateBooking: Date;
  email?: string;
  reasons?: string;
  patientAddress: string;
};

export default function BookingForm({}: Props) {
  const { messages } = useTranslate();

  const validationSchema = yup.object({
    fullName: yup.string().required(messages("validation.inputRequired")),
    reasons: yup.string().required(messages("validation.inputRequired")),
    patientAddress: yup.string().required(messages("validation.inputRequired")),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm<BookingProps>({ resolver });

  function handleBookingSubmit(values: BookingProps) {
    console.log("values:", values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleBookingSubmit)}>
        <InputField
          name="fullName"
          control={control}
          label="Họ và tên"
          required
        />
        <InputField
          name="phoneNumber"
          control={control}
          label="Số điện thoại"
        />
        <InputField name="email" control={control} label="Email" />
        <TextAreaField
          name="reasons"
          control={control}
          label="Triệu chứng"
          required
        />
        <TextAreaField
          name="patientAddress"
          control={control}
          label="Địa chỉ liên lạc"
          required
        />
        <DatePickerField
          name="date"
          control={control}
          label="Ngày khám"
          required
        />
        <Button type="submit" className="mt-4">
          Đặt lịch khám
        </Button>
      </form>
    </div>
  );
}
