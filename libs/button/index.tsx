import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full max-w-fit rounded-lg bg-sky-600 px-3 py-2 text-white hover:bg-sky-600/90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
