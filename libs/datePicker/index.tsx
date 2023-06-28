"use client";

import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

export interface DatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
  options?: object;
}

const dataPickerOption = {
  // title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  // maxDate: new Date("2030-01-01"),
  // minDate: new Date("1950-01-01"),
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    // prev: () => <span>Previous</span>,
    // next: () => <span>Next</span>,
  },
  datepickerClassNames: "",
  defaultDate: new Date(),
  language: "vi",
};

export default function DatePicker({
  name,
  htmlRef,
  options,
  ...props
}: DatePickerProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div className="relative">
      <Datepicker
        name={name}
        id={name}
        options={{ ...dataPickerOption, ...options }}
        show={show}
        setShow={handleClose}
        ref={htmlRef}
        {...props}
      />
    </div>
  );
}
