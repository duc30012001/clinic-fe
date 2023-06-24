"use client";

import { InputField } from "@/components/form";
// import axios from "@/config/axios";
import { useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {};

type LoginProps = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup.string().email().required("Vui lòng nhập email"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function LoginComponent({}: Props) {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm<LoginProps>({ resolver });

  function handleLoginSubmit(values: LoginProps) {
    console.log("values:", values);
    // axios.post("/auth/login", values);
  }
  return (
    <div>
      <p className="m-6 text-center text-2xl font-bold">Đăng nhập</p>
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputField name="email" control={control} label="Email" />
        <InputField
          name="password"
          type="password"
          control={control}
          label="Mật khẩu"
        />
        <Button className="mt-4" type="submit">
          Đăng nhập
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href={"/"} className="text-blue-700">
          Trang chủ
        </Link>
      </div>
    </div>
  );
}
