import LoginComponent from "@/features/auth/login";
import { AuthLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";

const LoginPage: NextPageWithLayout = () => {
  return <LoginComponent />;
};

LoginPage.Layout = AuthLayout;

export default LoginPage;
