import React, { ChangeEvent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export type SelectOptionItem = {
  label: ReactNode;
  value: string | number | undefined;
};

export type SelectOptions = Array<SelectOptionItem>;

export interface SelectProps
  extends React.TextareaHTMLAttributes<HTMLSelectElement> {
  htmlRef?: React.LegacyRef<HTMLSelectElement>;
  options: SelectOptions;
}

export default function Select({
  name,
  className,
  htmlRef,
  options,
  ...props
}: SelectProps) {
  return (
    <select
      id={name}
      name={name}
      ref={htmlRef}
      {...props}
      className={twMerge(
        `mt-2 block w-full appearance-none rounded-md bg-white px-3 py-2.5 text-slate-900 shadow-sm ring-1 ring-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`
      )}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
