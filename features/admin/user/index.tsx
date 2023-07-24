import AppContainer from "@/components/appContainer";
import Pagination from "@/libs/pagination";
import { PageSize } from "@/utils/constants";
import { Status } from "@/utils/enum";
import { useRouter } from "next/router";
import { useState } from "react";
import { userApi } from "./api";
import UserHeader from "./components/userHeader";
import { CreateUserModal, UpdateUserModal } from "./components/userModal";
import UserSidebar from "./components/userSidebar";
import UserTable from "./components/userTable";
import { UserModal } from "./enums";
import { useUserList } from "./hooks";
import { GetListUserParams, UpdateStatusUserPayload, User } from "./types";

type Props = {};

export type TypeOpenModal = (typeModal: UserModal, dataEdit?: User) => void;

const UserFeature = (props: Props) => {
  const [typeModal, setTypeModal] = useState<UserModal | null>(null);
  const [dataEdit, setDataEdit] = useState<User | undefined>(undefined);

  const router = useRouter();
  const filter: Partial<GetListUserParams> = {
    page: 1,
    take: PageSize,
    ...router.query,
  };
  const dataFilter = {};
  for (const key in filter) {
    if (filter[key] === Status.ALL) {
      dataFilter[key] = undefined;
    } else {
      dataFilter[key] = filter[key];
    }
  }

  const { data, mutate } = useUserList({ params: dataFilter });
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

  function getListData() {
    mutate();
  }

  function closeModal() {
    setTypeModal(null);
    setDataEdit(undefined);
  }

  function openModal(typeModal: UserModal, newDataEdit?: User) {
    setTypeModal(typeModal);
    setDataEdit(newDataEdit);
  }

  async function onUpdateStatus({ value, record }) {
    const payload: UpdateStatusUserPayload = {
      status: value,
      userId: record.id,
    };
    await userApi.updateStatusUser(payload);
    mutate();
  }

  return (
    <AppContainer
      sidebarContent={
        <UserSidebar initialValues={filter} onChangeFilter={onChangeFilter} />
      }
      headerContent={<UserHeader openModal={openModal} />}
    >
      <UserTable
        dataSource={dataSource}
        onEdit={openModal}
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
      <CreateUserModal
        isOpen={typeModal === UserModal.CREATE_USER}
        closeModal={closeModal}
        getListData={getListData}
      />
      <UpdateUserModal
        isOpen={typeModal === UserModal.UPDATE_USER}
        closeModal={closeModal}
        getListData={getListData}
        dataEdit={dataEdit}
      />
    </AppContainer>
  );
};

export default UserFeature;
