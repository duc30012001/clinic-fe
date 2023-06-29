import { formattedDate, getStatus } from "@/helpers";
import { Button } from "@/libs/button";
import Table from "@/libs/table";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { User, UserList } from "../types";

interface UserTableProps extends UserList {
  onEdit: TypeFunction;
}

const defaultColumns: ColumnDef<User>[] = [
  {
    accessorKey: "#",
    header: "#",
    cell: (info) => {
      return info.row.index + 1;
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
    header: "Status",
    cell: (info) => {
      const status = getStatus(info.renderValue() as Status);
      return status;
    },
  },
];

const UserTable = ({ dataSource, onEdit }: UserTableProps) => {
  const columns: ColumnDef<User>[] = [
    ...defaultColumns,
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
