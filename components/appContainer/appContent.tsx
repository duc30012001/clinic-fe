import { ReactNode } from "react";
import AppCard from "../appCard";

type Props = {
  children: ReactNode;
};

const AppContent = ({ children }: Props) => {
  return <AppCard className="p-0">{children}</AppCard>;
};

export default AppContent;
