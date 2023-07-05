import clsx from "clsx";
import { ReactNode } from "react";
import { FaBars } from "react-icons/fa";

type Props = {
  toggleDrawer: () => void;
  hasSidebar: boolean;
  headerContent?: ReactNode;
};

const AppHeader = ({ toggleDrawer, hasSidebar, headerContent }: Props) => {
  return (
    <div
      className={clsx(
        { "justify-end": hasSidebar },
        "mb-4 flex h-6 items-center justify-between lg:justify-end"
      )}
    >
      {hasSidebar && (
        <button onClick={toggleDrawer} className="lg:hidden">
          <FaBars />
        </button>
      )}
      {(headerContent && <div>{headerContent}</div>) || null}
    </div>
  );
};

export default AppHeader;
