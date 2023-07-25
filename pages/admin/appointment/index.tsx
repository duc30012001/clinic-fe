import { AdminLayout } from "@/layouts";
import { NextPageWithLayout } from "@/utils/types";
import dynamic from "next/dynamic";

const AppointmentFeature = dynamic(
  () => import("@/features/admin/appointment")
);

type Props = {};

const AppointmentPage: NextPageWithLayout = (props: Props) => {
  return <AppointmentFeature />;
};

AppointmentPage.Layout = AdminLayout;

export default AppointmentPage;
