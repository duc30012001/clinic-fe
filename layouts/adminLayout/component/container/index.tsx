import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default Container;
