import { InputField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateUserPayload } from "../../../types";

type Props = {
  onSubmit: TypeFunction;
};

export default function UserForm({ onSubmit }: Props) {
  const { messages } = useTranslate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(messages("validation.emailFormat"))
      .required(messages("validation.emailRequired")),
    password: yup.string().required(messages("validation.passwordRequired")),
    full_name: yup.string().optional(),
    phone_number: yup.string().optional(),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CreateUserPayload>({ resolver });

  async function handleLoginSubmit(values: CreateUserPayload) {
    const dataSubmit = {
      ...values,
      status: Status.ACTIVE,
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
      <InputField
        name="password"
        type="password"
        control={control}
        label={messages("common.password")}
        required
      />
      <Button primary className="mt-4 max-w-full" type="submit">
        {messages("common.submit")}
      </Button>
    </form>
  );
}
