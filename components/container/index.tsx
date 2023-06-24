import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
