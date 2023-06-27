import { AdminLayout } from "@/layouts";
import { Button } from "@/libs/button";
import Drawer from "@/libs/drawer";
import { NextPageWithLayout } from "@/utils/types";
import "rc-drawer/assets/index.css";
import { useState } from "react";

type Props = {};

const User: NextPageWithLayout = (props: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function onClick() {
    setIsDrawerOpen(true);
  }

  function onClose() {
    console.log("onClose");
    setIsDrawerOpen(false);
  }
  return (
    <div>
      User
      <Button onClick={onClick}>Show navigation</Button>
      <Drawer open={isDrawerOpen} onClose={onClose} placement="left">
        {/* Content of the drawer */}
        <h1>Drawer Content</h1>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </div>
  );
};

User.Layout = AdminLayout;

export default User;
