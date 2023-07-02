import AppContainer from "@/components/appContainer";
import Pagination from "@/libs/pagination";
import { PageSize } from "@/utils/constants";
import { useRouter } from "next/router";
import { userApi } from "./api";
import UserHeader from "./components/userHeader";
import UserSidebar from "./components/userSidebar";
import UserTable from "./components/userTable";
import { useUserList } from "./hooks";
import { GetListUserParams, UpdateUserPayload, User } from "./types";

type Props = {};

const User = (props: Props) => {
  const router = useRouter();
  const filter: Partial<GetListUserParams> = {
    page: 1,
    take: PageSize,
    ...router.query,
  };

  const { data, mutate } = useUserList({ params: filter });
  const dataSource = data.data;
  const pagination = data.pagination;

  function onChangePage(value: number) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: value,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  function onChangeFilter({ search, status }: GetListUserParams) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: 1,
          search,
          status,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  async function onUpdateStatus({ value, record }) {
    const payload: UpdateUserPayload = {
      status: value,
      userId: record.id,
    };
    await userApi.updateStatusUser(payload);
    mutate();
  }

  function onEdit(data: User) {
    console.log("data:", data);
  }
  return (
    <AppContainer
      sidebarContent={
        <UserSidebar initialValues={filter} onChangeFilter={onChangeFilter} />
      }
      headerContent={<UserHeader />}
    >
      <UserTable
        dataSource={dataSource}
        onEdit={onEdit}
        current={filter.page}
        pageSize={PageSize}
        onUpdateStatus={onUpdateStatus}
      />
      <Pagination
        onChange={onChangePage}
        current={filter.page}
        total={pagination.itemCount}
        pageSize={PageSize}
        wrapperClassName="px-2"
      />
    </AppContainer>
  );
};

export default User;
