import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full rounded-lg bg-blue-700 px-3 py-2 text-white hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
