import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

type Props = {
  data: Array<any>;
  children: React.ReactNode;
  renderItem: (item: any, index?: number) => React.ReactNode;
  placement?: "left" | "right";
};

const Dropdown = ({
  data,
  renderItem,
  children,
  placement = "right",
}: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">{children}</Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            {
              "right-0": placement === "right",
              "left-0": placement === "left",
            },
            "absolute z-10  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          )}
        >
          <div className="px-1 py-1 ">
            {data.map((item, index) => (
              <Menu.Item key={item.id}>{renderItem(item, index)}</Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
