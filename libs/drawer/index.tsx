import RcDrawer, { DrawerProps } from "rc-drawer";
import motionProps from "./motion";

const Drawer = (props: DrawerProps) => {
  console.log("props:", props);
  return (
    <RcDrawer
      {...props}
      // Motion
      {...motionProps}
    >
      content
    </RcDrawer>
  );
};

export default Drawer;
