import Label from "@/libs/label";
import TextArea from "@/libs/textArea";
import { FormDirection } from "@/utils/enum";
import clsx from "clsx";
import { Control, useController } from "react-hook-form";
import ErrorMessage from "./errorMessage";

type Props = {
  name: string;
  label?: string;
  control: Control<any>;
  direction?: FormDirection;
  required?: boolean;
};

export function TextAreaField({
  name,
  label,
  control,
  direction = FormDirection.VERTICAL,
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
      <TextArea
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
