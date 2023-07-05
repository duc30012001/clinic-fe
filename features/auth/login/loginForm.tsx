import { InputField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { LoginPayload, TypeFunction } from "@/utils/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {
  onSubmit: TypeFunction;
};

export default function LoginForm({ onSubmit }: Props) {
  const { messages } = useTranslate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(messages("validation.emailFormat"))
      .required(messages("validation.emailRequired")),
    password: yup.string().required(messages("validation.passwordRequired")),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({ resolver });

  async function handleLoginSubmit(values: LoginPayload) {
    await onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} className="text-left">
      <InputField name="email" control={control} label="Email" required />
      <InputField
        name="password"
        type="password"
        control={control}
        label="Mật khẩu"
        required
      />
      <Button primary className="mt-4 max-w-full" type="submit">
        Đăng nhập
      </Button>
    </form>
  );
}
