import { InputField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { TypeFunction } from "@/utils/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateUserPayload, User } from "../../../types";

type Props = {
  onSubmit: TypeFunction;
  dataEdit?: User;
};

export default function UserForm({ onSubmit, dataEdit }: Props) {
  const { messages } = useTranslate();
  const defaultValues = {
    full_name: dataEdit?.full_name,
    status: dataEdit?.status,
    email: dataEdit?.email,
    phone_number: dataEdit?.phone_number,
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(messages("validation.emailFormat"))
      .required(messages("validation.emailRequired")),
    full_name: yup.string().optional(),
    phone_number: yup.string().optional(),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm<CreateUserPayload>({
    resolver,
    defaultValues,
  });

  async function handleLoginSubmit(values: CreateUserPayload) {
    const dataSubmit = {
      ...values,
      status: dataEdit?.status,
    };
    await onSubmit(dataSubmit);
  }

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} className="text-left">
      <InputField
        name="email"
        control={control}
        label={messages("common.email")}
        required
      />
      <InputField
        name="full_name"
        control={control}
        label={messages("common.name")}
      />
      <InputField
        name="phone_number"
        control={control}
        label={messages("common.phone")}
      />
      <Button primary className="mt-4 max-w-full" type="submit">
        {messages("common.submit")}
      </Button>
    </form>
  );
}
