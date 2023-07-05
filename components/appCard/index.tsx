import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const AppCard = ({ children, className }: Props) => {
  return (
    <div className={`rounded-lg bg-white p-4 drop-shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default AppCard;
