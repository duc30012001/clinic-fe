import AppContainer from "@/components/appContainer";
import Pagination from "@/libs/pagination";
import { PageSize } from "@/utils/constants";
import { Status } from "@/utils/enum";
import { useRouter } from "next/router";
import { useState } from "react";
import { appointmentApi } from "./api";
// import {
//   CreateAppointmentModal,
//   UpdateAppointmentModal,
// } from "./components/modal";
import AppointmentSidebar from "./components/sidebar";
import AppointmentTable from "./components/table";
import { AppointmentModal } from "./enums";
import { useAppointmentList } from "./hooks";
import {
  Appointment,
  GetListAppointmentParams,
  UpdateStatusAppointmentPayload,
} from "./types";

type Props = {};

export type TypeOpenModal = (
  typeModal: AppointmentModal,
  dataEdit?: Appointment
) => void;

const AppointmentFeature = (props: Props) => {
  const [typeModal, setTypeModal] = useState<AppointmentModal | null>(null);
  const [dataEdit, setDataEdit] = useState<Appointment | undefined>(undefined);

  const router = useRouter();
  const filter: Partial<GetListAppointmentParams> = {
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

  const { data, mutate } = useAppointmentList({ params: dataFilter });
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

  function onChangeFilter({ search, status }: GetListAppointmentParams) {
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

  function openModal(typeModal: AppointmentModal, newDataEdit?: Appointment) {
    setTypeModal(typeModal);
    setDataEdit(newDataEdit);
  }

  async function onUpdateStatus({ value, record }) {
    const payload: UpdateStatusAppointmentPayload = {
      status: value,
      appointmentId: record.id,
    };
    await appointmentApi.updateStatusAppointment(payload);
    mutate();
  }

  return (
    <AppContainer
      sidebarContent={
        <AppointmentSidebar
          initialValues={filter}
          onChangeFilter={onChangeFilter}
        />
      }
      // headerContent={<AppointmentHeader openModal={openModal} />}
    >
      <AppointmentTable
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
      {/* <CreateAppointmentModal
        isOpen={typeModal === AppointmentModal.CREATE}
        closeModal={closeModal}
        getListData={getListData}
      />
      <UpdateAppointmentModal
        isOpen={typeModal === AppointmentModal.UPDATE}
        closeModal={closeModal}
        getListData={getListData}
        dataEdit={dataEdit}
      /> */}
    </AppContainer>
  );
};

export default AppointmentFeature;
