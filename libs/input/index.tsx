import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
}

export default function Input({
  name,
  type,
  placeholder,
  className,
  htmlRef,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      // ref={htmlRef}
      className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus-visible:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
