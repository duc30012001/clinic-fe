import { ReactNode } from "react";
import AppCard from "../appCard";

type Props = {
  children: ReactNode;
};

const AppContent = ({ children }: Props) => {
  return <AppCard className="rounded-sm p-0">{children}</AppCard>;
};

export default AppContent;
