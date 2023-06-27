import SidebarBox from "@/components/sidebarBox";
import Input from "@/libs/input";
import Select from "@/libs/select";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <SidebarBox title="Tìm theo email" hasDivider>
        <Input className="py-2" />
      </SidebarBox>
      <SidebarBox title="Trạng thái" hasDivider>
        <Select />
      </SidebarBox>
    </div>
  );
};

export default Sidebar;
