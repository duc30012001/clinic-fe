import { Control } from "react-hook-form";
import { FormDirection } from "../enum";

export interface FieldProps {
  name: string;
  label?: string;
  control?: Control<any>;
  required?: boolean;
  direction?: FormDirection;
}
