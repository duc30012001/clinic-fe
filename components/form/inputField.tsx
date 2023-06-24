import Input from "@/libs/input";
import Label from "@/libs/label";
import { FormDirection } from "@/utils/enum";
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { Control, useController } from "react-hook-form";
import ErrorMessage from "./errorMessage";

type Props = {
  name: string;
  label?: string;
  control: Control<any>;
  direction?: FormDirection;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
};

export function InputField({
  name,
  label,
  control,
  required,
  direction = FormDirection.VERTICAL,
  ...props
}: Props) {
  const {
    field: { onBlur, onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div
      className={clsx(
        {
          "flex-col": direction === FormDirection.VERTICAL,
        },
        "mb-4 flex"
      )}
    >
      <Label htmlFor={name} label={label} required={required} />
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        htmlRef={ref}
        {...props}
      />
      <ErrorMessage message={error?.message} />
    </div>
  );
}
