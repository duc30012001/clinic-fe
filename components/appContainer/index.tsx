import clsx from "clsx";
import { ReactNode, useState } from "react";
import AppContent from "./appContent";
import AppHeader from "./appHeader";
import AppSidebar from "./appSidebar";

type Props = {
  children: ReactNode;
  sidebarContent?: ReactNode;
  headerContent?: ReactNode;
};

const AppContainer = ({ children, sidebarContent, headerContent }: Props) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const hasSidebar = Boolean(sidebarContent);

  function toggleDrawer() {
    setIsOpenDrawer((currentState) => !currentState);
  }

  return (
    <div className={clsx({ "lg:gap-8": hasSidebar }, "mt-4 flex gap-0")}>
      {hasSidebar && (
        <div className="w-0 lg:block lg:w-full lg:max-w-xs">
          <AppSidebar
            sidebarContent={sidebarContent}
            toggleDrawer={toggleDrawer}
            isOpenDrawer={isOpenDrawer}
          />
        </div>
      )}
      <div className="grow">
        <AppHeader
          headerContent={headerContent}
          hasSidebar={hasSidebar}
          toggleDrawer={toggleDrawer}
        />
        <AppContent>{children}</AppContent>
      </div>
    </div>
  );
};

export default AppContainer;
