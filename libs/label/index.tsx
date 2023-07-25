import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: ReactNode;
  required?: boolean;
}

export default function Label({
  htmlFor,
  label,
  className,
  required,
}: LabelProps) {
  return (
    (label && (
      <label
        htmlFor={htmlFor}
        className={twMerge(
          `block font-semibold text-gray-900 dark:text-white ${className}`
        )}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    )) ||
    null
  );
}
