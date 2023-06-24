import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
};

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`w-full rounded-lg bg-blue-700 px-3 py-2 text-white hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
