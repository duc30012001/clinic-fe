import AppContainer from "@/components/appContainer";
import useSWR from "swr";
import UserSidebar from "./sidebar";
import UserTable from "./table";

type Props = {};

const User = (props: Props) => {
  const { data } = useSWR("/user/list");
  const dataSource = data?.data || [];
  // const pagination = data.meta || {}
  return (
    <AppContainer sidebarContent={<UserSidebar />}>
      <UserTable dataSource={dataSource} />
    </AppContainer>
  );
};

export default User;
