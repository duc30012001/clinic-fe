import React, { ChangeEvent } from "react";

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
}

export default function Input({
  name,
  type,
  placeholder,
  className = "",
  htmlRef,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      // ref={htmlRef}
      className={`mt-2 block w-full appearance-none rounded-md bg-white px-3 py-2.5 text-slate-900 shadow-sm ring-1 ring-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
