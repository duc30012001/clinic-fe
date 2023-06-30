import AppContainer from "@/components/appContainer";
import Pagination from "@/libs/pagination";
import { useState } from "react";
import useSWR from "swr";
import { User } from "./types";
import UserHeader from "./userHeader";
import UserSidebar from "./userSidebar";
import UserTable from "./userTable";

const PAGE_SIZE = 1;

type Props = {};

const User = (props: Props) => {
  const [page, setPage] = useState(1);

  const { data } = useSWR(`/user/list?take=${PAGE_SIZE}&page=${page}`);
  const dataSource = data?.data || [];
  const pageMeta = data?.meta || {};

  function onChangePage(value) {
    setPage(value);
  }

  function onEdit(data: User) {
    console.log("data:", data);
  }
  return (
    <AppContainer
      sidebarContent={<UserSidebar />}
      headerContent={<UserHeader />}
    >
      <UserTable
        dataSource={dataSource}
        onEdit={onEdit}
        current={page}
        pageSize={PAGE_SIZE}
      />
      <Pagination
        onChange={onChangePage}
        current={page}
        total={pageMeta.itemCount}
        pageSize={PAGE_SIZE}
        wrapperClassName="px-2"
      />
    </AppContainer>
  );
};

export default User;
