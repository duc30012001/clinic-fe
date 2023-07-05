import { AuthLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";
import dynamic from "next/dynamic";

const LoginComponent = dynamic(() => import("@/features/auth/login"));

const LoginPage: NextPageWithLayout = () => {
  return <LoginComponent />;
};

LoginPage.Layout = AuthLayout;

export default LoginPage;
