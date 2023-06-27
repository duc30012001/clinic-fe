import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  hasDivider?: boolean;
};

const SidebarBox = ({ children, title, hasDivider = false }: Props) => {
  return (
    <div>
      <p className="mb-2 font-medium">{title}</p>
      {children}
      {hasDivider && (
        <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      )}
    </div>
  );
};

export default SidebarBox;
