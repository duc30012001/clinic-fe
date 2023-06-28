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
      className={`mt-2 block w-full appearance-none rounded-md bg-white px-3 py-2.5 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm ${className}`}
      {...props}
    />
  );
}
