import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
  primary?: boolean;
}

export function Button({
  children,
  className,
  primary,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full max-w-fit rounded-lg px-4 py-2 ${
        primary
          ? "bg-sky-600 text-white hover:bg-sky-600/90"
          : "border border-gray-500 hover:border-sky-600/90 hover:text-sky-600/90"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
