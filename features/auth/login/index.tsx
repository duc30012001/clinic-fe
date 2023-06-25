"use client";

import { useAuth } from "@/hooks";
import Link from "next/link";
import LoginForm from "./loginForm";

type Props = {};

export default function LoginComponent({}: Props) {
  const { login } = useAuth({
    revalidateOnMount: false,
  });

  async function onSubmit(values) {
    await login(values);
  }

  return (
    <div>
      <p className="m-6 text-center text-2xl font-bold">Đăng nhập</p>
      <div className="mt-4 text-center">
        <LoginForm onSubmit={onSubmit} />
        <Link href={"/"} className="mt-2 inline-block text-blue-700">
          Trang chủ
        </Link>
      </div>
    </div>
  );
}
