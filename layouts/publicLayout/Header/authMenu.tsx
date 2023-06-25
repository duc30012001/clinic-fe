import { useAuth, useTranslate } from "@/hooks";
import Link from "next/link";

type Props = {};

export default function LoginButton({}: Props) {
  const { profile, isAuthenticated, logout } = useAuth();
  console.log("profile:", profile);
  const { messages } = useTranslate();

  if (!isAuthenticated) {
    return (
      <Link href={"/auth/login"}>
        <button className="hover:text-blue-700">Đăng nhập</button>
      </Link>
    );
  }

  return (
    <div>
      <button onClick={logout} className="hover:text-blue-700">
        {messages("userProfile.logout")}
      </button>
    </div>
  );
}
