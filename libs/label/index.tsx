import { ReactNode } from "react";

type Props = {
  htmlFor?: string;
  className?: string;
  label?: ReactNode;
  required?: boolean;
};

export default function Label({ htmlFor, label, className, required }: Props) {
  return (
    (label && (
      <label
        htmlFor={htmlFor}
        className={`mb-2 block text-sm font-medium text-gray-900 dark:text-white ${className}`}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    )) ||
    null
  );
}
