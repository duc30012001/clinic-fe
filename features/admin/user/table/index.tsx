import Table from "@/libs/table";
import { createColumnHelper } from "@tanstack/react-table";
import { UserList } from "../types";

interface UserTableProps extends UserList {}

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <p className="text-center">{info.getValue()}</p>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => {
      console.log("infor", info);
      return info.renderValue();
    },
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
  }),
];

const UserTable = ({ dataSource }: UserTableProps) => {
  console.log("dataSource:", dataSource);
  return (
    <div>
      <Table columns={columns} dataSource={defaultData} />
    </div>
  );
};

export default UserTable;
