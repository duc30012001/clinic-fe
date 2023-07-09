import { AdminLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";
import dynamic from "next/dynamic";

const ArticleCategoryFeature = dynamic(
  () => import("@/features/admin/articleCategory")
);

type Props = {};

const UserPage: NextPageWithLayout = (props: Props) => {
  return <ArticleCategoryFeature />;
};

UserPage.Layout = AdminLayout;

export default UserPage;
