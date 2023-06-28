import SidebarBox from "@/components/sidebarBox";
import Input from "@/libs/input";
import Select from "@/libs/select";

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
        <Select options={options} />
      </SidebarBox>
    </div>
  );
};

export default UserSidebar;
