import RcDrawer, { DrawerProps } from "rc-drawer";
import "rc-drawer/assets/index.css";
import motionProps from "./motion";

const Drawer = ({ children, ...props }: DrawerProps) => {
  return (
    <RcDrawer
      {...props}
      // Motion
      {...motionProps}
    >
      {children}
    </RcDrawer>
  );
};

export default Drawer;
