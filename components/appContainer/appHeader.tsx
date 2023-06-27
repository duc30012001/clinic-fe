import { ReactNode } from "react";
import { FaBars } from "react-icons/fa";

type Props = {
  toggleDrawer: () => void;
  hasSidebar: boolean;
  actionContent?: ReactNode;
};

const AppHeader = ({ toggleDrawer, hasSidebar, actionContent }: Props) => {
  return (
    <div className="mb-4 h-6">
      {hasSidebar && (
        <button onClick={toggleDrawer} className="lg:hidden">
          <FaBars />
        </button>
      )}
      {(actionContent && <div>{actionContent}</div>) || null}
    </div>
  );
};

export default AppHeader;
