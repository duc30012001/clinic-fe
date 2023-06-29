import { StatusSelect } from "@/components/select";
import SidebarBox from "@/components/sidebarBox";
import Input from "@/libs/input";

type Props = {};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const UserSidebar = (props: Props) => {
  return (
    <div>
      <SidebarBox title="Tìm theo email" hasDivider>
        <Input className="" />
      </SidebarBox>
      <SidebarBox title="Trạng thái" hasDivider>
        <StatusSelect />
      </SidebarBox>
    </div>
  );
};

export default UserSidebar;
