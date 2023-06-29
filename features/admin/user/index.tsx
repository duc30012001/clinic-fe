import AppContainer from "@/components/appContainer";
import useSWR from "swr";
import { User } from "./types";
import UserHeader from "./userHeader";
import UserSidebar from "./userSidebar";
import UserTable from "./userTable";

type Props = {};

const User = (props: Props) => {
  const { data } = useSWR("/user/list");
  const dataSource = data?.data || [];
  // const pagination = data.meta || {}

  function onEdit(data: User) {
    console.log("data:", data);
  }
  return (
    <AppContainer
      sidebarContent={<UserSidebar />}
      headerContent={<UserHeader />}
    >
      <UserTable dataSource={dataSource} onEdit={onEdit} />
    </AppContainer>
  );
};

export default User;
