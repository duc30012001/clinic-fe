import { AdminLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";
import dynamic from "next/dynamic";

const UserFeature = dynamic(() => import("@/features/admin/user"));

type Props = {};

const UserPage: NextPageWithLayout = (props: Props) => {
  return <UserFeature />;
};

UserPage.Layout = AdminLayout;

export default UserPage;
