import { formattedDate } from "@/helpers";
import { useTranslate } from "@/hooks";
import Table from "@/libs/table";
import { TypeFunction } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";
import { TypeOpenModal } from "../..";
import { Appointment, AppointmentList } from "../../types";

interface AppointmentTableProps extends AppointmentList {
  onEdit: TypeOpenModal;
  onUpdateStatus: TypeFunction;
  current?: number;
  pageSize: number;
}

const AppointmentTable = ({
  dataSource,
  onEdit,
  current,
  pageSize,
  onUpdateStatus,
}: AppointmentTableProps) => {
  const { messages } = useTranslate();

  const columns: ColumnDef<Appointment>[] = [
    {
      accessorKey: "#",
      header: "#",
      cell: (info) => {
        const number = pageSize * ((current || 0) - 1) + info.row.index + 1;
        return number;
      },
    },
    {
      accessorKey: "patient_name",
      header: messages("common.name"),
    },
    {
      accessorKey: "reason",
      header: messages("appointment.reason"),
    },
    {
      accessorKey: "patient_phone_number",
      header: messages("common.phone"),
    },
    {
      accessorKey: "patient_address",
      header: messages("appointment.address"),
    },
    {
      accessorKey: "email",
      header: messages("common.email"),
    },
    {
      accessorKey: "appointment_time",
      header: messages("appointment.appointmentTime"),
      cell: (info) => {
        const value = info.renderValue();
        const date = formattedDate(value);
        return date;
      },
    },
    // {
    //   accessorKey: "status",
    //   header: messages("status.label"),
    //   cell: (info) => {
    //     const record = info.row.original;
    //     const status = info.renderValue() as Status;
    //     return (
    //       <StatusButton
    //         value={status}
    //         onChange={(value) => onUpdateStatus({ value, record })}
    //       />
    //     );
    //   },
    // },
  ];
  return (
    <div>
      <Table columns={columns} data={dataSource} />
    </div>
  );
};

export default AppointmentTable;
