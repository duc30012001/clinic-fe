import { useAuth, useTranslate } from "@/hooks";
import Dropdown from "@/libs/dropdown";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

type Props = {};

const UserButton = (props: Props) => {
  const { messages } = useTranslate();
  const { profile, logout } = useAuth();

  const data = [
    {
      id: 1,
      label: profile?.email || "",
      onClick: () => {},
      pathname: "#",
    },
    {
      id: 3,
      label: messages("userProfile.logout"),
      onClick: logout,
      pathname: "#",
    },
  ];
  return (
    <div className="grow py-2 text-right">
      <Dropdown
        data={data}
        renderItem={(item) => (
          <Link
            href={item.pathname}
            onClick={item.onClick}
            className="flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-slate-200"
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
};

export default UserButton;
