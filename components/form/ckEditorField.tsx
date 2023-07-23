// import TextEditor from "@/libs/ckEditor";
import Label from "@/libs/label";
import { FormDirection } from "@/utils/enum";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { Control, useController } from "react-hook-form";
import ErrorMessage from "./errorMessage";

const TextEditor = dynamic(() => import("@/libs/ckEditor"), {
  ssr: false,
});

type Props = {
  name: string;
  label?: string;
  control: Control<any>;
  direction?: FormDirection;
  required?: boolean;
};

export function CkEditorField({
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
      <Label
        htmlFor={name}
        label={label}
        required={required}
        className="mb-2"
      />
      <TextEditor
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
