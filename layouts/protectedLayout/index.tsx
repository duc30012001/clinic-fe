import React from "react";

type Props = {
  children: React.ReactNode;
};

export function ProtectedLayout({ children }: Props) {
  return <div>ProtectedLayout{children}</div>;
}
