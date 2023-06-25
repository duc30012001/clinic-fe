import { AdminLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";

type Props = {};

const User: NextPageWithLayout = (props: Props) => {
  return <div>User</div>;
};

User.Layout = AdminLayout;

export default User;
