import StatusButton from "@/components/statusButton";
import { formattedDate } from "@/helpers";
import { Button } from "@/libs/button";
import Table from "@/libs/table";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { User, UserList } from "../../types";

interface UserTableProps extends UserList {
  onEdit: TypeFunction;
  onUpdateStatus: TypeFunction;
  current?: number;
  pageSize: number;
}

const UserTable = ({
  dataSource,
  onEdit,
  current,
  pageSize,
  onUpdateStatus,
}: UserTableProps) => {
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "#",
      header: "#",
      cell: (info) => {
        const number = pageSize * ((current || 0) - 1) + info.row.index + 1;
        return number;
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "full_name",
      header: "Họ tên",
    },
    {
      accessorKey: "phone_number",
      header: "Số điện thoại",
    },
    {
      accessorKey: "date_created",
      header: "Ngày tạo",
      cell: (info) => {
        const value = info.renderValue();
        const date = formattedDate(value);
        return date;
      },
    },
    {
      accessorKey: "date_modified",
      header: "Ngày cập nhật",
      cell: (info) => {
        const value = info.renderValue();
        const date = formattedDate(value);
        return date;
      },
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: (info) => {
        const record = info.row.original;
        const status = info.renderValue() as Status;
        return (
          <StatusButton
            value={status}
            onChange={(value) => onUpdateStatus({ value, record })}
          />
        );
      },
    },
    {
      accessorKey: "#",
      header: "Thao tác",
      cell: (info) => {
        return (
          <Button className="max-w-fit" onClick={() => onEdit(info.row)}>
            <FaEdit />
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} data={dataSource} />
    </div>
  );
};

export default UserTable;
