import { adminRoutes } from "@/layouts/adminLayout/header/routes";
import Drawer from "@/libs/drawer";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import AppCard from "../appCard";

type Props = {
  isOpenDrawer: boolean;
  toggleDrawer: () => void;
  sidebarContent?: ReactNode;
};

const AppSidebar = ({ toggleDrawer, isOpenDrawer, sidebarContent }: Props) => {
  const { asPath } = useRouter();
  const currentRoute = adminRoutes.find((item) => item.pathname === asPath);
  const routeLabel = currentRoute?.label || "";
  return (
    <div>
      <div className="mb-4 hidden font-semibold lg:block">
        <p>{routeLabel}</p>
      </div>
      <div className="hidden lg:block">
        <AppCard>{sidebarContent}</AppCard>
      </div>
      <Drawer open={isOpenDrawer} onClose={toggleDrawer}>
        {sidebarContent}
      </Drawer>
    </div>
  );
};

export default AppSidebar;
