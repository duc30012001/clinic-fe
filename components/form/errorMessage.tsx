import { ReactNode } from "react";

type Props = {
  message: ReactNode;
};

export default function ErrorMessage({ message }: Props) {
  return (
    (message && <p className="mt-1 text-sm text-red-600">{message}</p>) || null
  );
}
