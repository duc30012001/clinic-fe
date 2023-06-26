import { ReactNode } from "react";
import Container from "../component/container";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <Container>
      <div className="py-10">{children}</div>
    </Container>
  );
};

export default Content;
