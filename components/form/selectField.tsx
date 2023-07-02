import Label from "@/libs/label";
import Select, { SelectChangeEvent, SelectProps } from "@/libs/select";
import { FormDirection } from "@/utils/enum";
import clsx from "clsx";
import { Control, useController } from "react-hook-form";
import ErrorMessage from "./errorMessage";

interface Props extends SelectProps {
  name: string;
  label?: string;
  control: Control<any>;
  direction?: FormDirection;
  required?: boolean;
}

export function SelectField({
  name,
  label,
  control,
  direction = FormDirection.VERTICAL,
  onChange: externalOnChange,
  required,
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
      <Select
        name={name}
        value={value}
        onChange={(event: SelectChangeEvent) => {
          onChange(event);
          externalOnChange?.(event);
        }}
        onBlur={onBlur}
        htmlRef={ref}
        {...props}
      />
      <ErrorMessage message={error?.message} />
    </div>
  );
}
