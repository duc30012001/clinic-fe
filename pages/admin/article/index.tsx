import { AdminLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";
import dynamic from "next/dynamic";

const ArticleFeature = dynamic(() => import("@/features/admin/article"));

type Props = {};

const UserPage: NextPageWithLayout = (props: Props) => {
  return <ArticleFeature />;
};

UserPage.Layout = AdminLayout;

export default UserPage;
