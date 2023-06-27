import AppContainer from "@/components/appContainer";
import Sidebar from "./sidebar";

type Props = {};

const User = (props: Props) => {
  return <AppContainer sidebarContent={<Sidebar />}>User</AppContainer>;
};

export default User;
