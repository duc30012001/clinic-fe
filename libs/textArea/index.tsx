import React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
}

export default function TextArea({
  name,
  className,
  rows = 3,
  htmlRef,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      ref={htmlRef}
      className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus-visible:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
