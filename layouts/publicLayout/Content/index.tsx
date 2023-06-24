import Container from "@/components/container";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Content({ children }: Props) {
  return (
    <Container>
      <div className="my-20">{children}</div>
    </Container>
  );
}
