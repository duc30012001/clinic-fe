import Dropdown from "@/libs/dropdown";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RoutesProps } from "./routes";

type Props = {
  routes: RoutesProps;
};

export const DropdownItem = ({ item }) => {
  return (
    <Link
      className={
        "flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-slate-200"
      }
      href={item.pathname || "#"}
    >
      {item.label}
    </Link>
  );
};

const NavbarMobile = ({ routes }: Props) => {
  return (
    <div className="ml-auto block lg:hidden">
      <Dropdown
        data={routes}
        renderItem={(item) => <DropdownItem item={item} />}
        placement="left"
      >
        <FaBars aria-hidden="true" />
      </Dropdown>
    </div>
  );
};

export default NavbarMobile;
