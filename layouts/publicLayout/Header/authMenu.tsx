import { useAuth, useTranslate } from "@/hooks";
import Dropdown from "@/libs/dropdown";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

type Props = {};

export default function LoginButton({}: Props) {
  const { profile, isAuthenticated, logout } = useAuth();
  const { messages } = useTranslate();

  if (!isAuthenticated) {
    return (
      <Link href={"/auth/login"}>
        <button className="hover:text-blue-700">Đăng nhập</button>
      </Link>
    );
  }

  const data = [
    {
      id: 1,
      label: profile?.email || "",
      onClick: () => {},
      pathname: "#",
    },
    {
      id: 2,
      label: messages("userProfile.admin"),
      onClick: () => {},
      pathname: "/admin/user",
    },
    {
      id: 3,
      label: messages("userProfile.logout"),
      onClick: logout,
      pathname: "#",
    },
  ];

  return (
    <div className="grow text-right md:grow-0">
      <Dropdown
        data={data}
        renderItem={(item) => (
          <Link
            href={item.pathname}
            onClick={item.onClick}
            className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-slate-200"
          >
            {item.label}
          </Link>
        )}
      >
        <div className="flex h-full items-center justify-center text-2xl">
          <FaUserCircle />
        </div>
      </Dropdown>
    </div>
  );
}
