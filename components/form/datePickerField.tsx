import DatePicker from "@/libs/datePicker";
import Label from "@/libs/label";
import { FormDirection } from "@/utils/enum";
import { FieldProps } from "@/utils/types";
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { useController } from "react-hook-form";
import ErrorMessage from "./errorMessage";

interface Props extends FieldProps {
  type?: HTMLInputTypeAttribute;
}

export function DatePickerField({
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
      <DatePicker
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
