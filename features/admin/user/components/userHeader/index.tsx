import { useTranslate } from "@/hooks";
import { Button } from "@/libs/button";

type Props = {};

const UserHeader = (props: Props) => {
  const { messages } = useTranslate();
  return (
    <div>
      <Button>{messages("common.create")}</Button>
    </div>
  );
};

export default UserHeader;
