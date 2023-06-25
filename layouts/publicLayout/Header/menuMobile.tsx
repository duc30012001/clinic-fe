"use client";

import Dropdown from "@/libs/dropdown";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { TypeMenu } from ".";

type Props = {
  menu: TypeMenu;
};

const DropdownItem = ({ item }) => {
  return (
    <Link
      className={
        "flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-slate-200"
      }
      href={item.pathname || "#"}
    >
      {item.name}
    </Link>
  );
};

export default function MenuMobile({ menu }: Props) {
  return (
    <div className="ml-auto block md:hidden">
      <Dropdown data={menu} renderItem={(item) => <DropdownItem item={item} />}>
        <FaBars aria-hidden="true" />
      </Dropdown>
    </div>
  );
}
