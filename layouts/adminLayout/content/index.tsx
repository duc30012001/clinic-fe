import { ReactNode } from "react";
import Container from "../component/container";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <Container>
      <div className="">{children}</div>
    </Container>
  );
};

export default Content;
