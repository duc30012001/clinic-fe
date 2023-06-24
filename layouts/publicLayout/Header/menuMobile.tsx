"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { TypeMenu } from ".";

type Props = {
  menu: TypeMenu;
};

export default function MenuMobile({ menu }: Props) {
  return (
    <div className="ml-auto block md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <FaBars aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {menu.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-slate-200" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href={item.pathname}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
