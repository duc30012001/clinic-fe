import { useTranslate } from "@/hooks";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

type Props = {
  value: Status;
  onChange: TypeFunction;
};

const StatusButton = ({ value, ...props }: Props) => {
  const { messages } = useTranslate();
  const options = [
    { value: Status.ACTIVE, label: messages("status.active") },
    { value: Status.PENDING, label: messages("status.pending") },
    { value: Status.HIDDEN, label: messages("status.hidden") },
  ];

  const selected = options.find((item) => item.value === value)?.label;

  return (
    <Listbox defaultValue={value} {...props}>
      <div className="relative mt-1">
        <Listbox.Button
          className={clsx(
            {
              "border border-green-500 bg-green-50 text-green-500":
                value === Status.ACTIVE,
              "border border-yellow-500 bg-yellow-50 text-yellow-500":
                value === Status.PENDING,
              "border border-red-500 bg-red-50 text-red-500":
                value === Status.HIDDEN,
            },
            "relative cursor-pointer rounded-lg px-3 py-2 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300"
          )}
        >
          <span className="block truncate">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            {/* <ChevronUpDownIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        /> */}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((item) => (
              <Listbox.Option
                key={item.value}
                className={({ active, selected }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-50 text-gray-900" : "text-gray-900"
                  } ${selected ? "bg-slate-200" : "bg-slate-50"}`
                }
                value={item.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default StatusButton;
