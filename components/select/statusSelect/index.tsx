import { useTranslate } from "@/hooks";
import Select from "@/libs/select";
import { Status } from "@/utils/enum";

type Props = {};

export const StatusSelect = (props: Props) => {
  const { messages } = useTranslate();
  const options = [
    { value: Status.ACTIVE, label: messages("status.active") },
    { value: Status.PENDING, label: messages("status.pending") },
    { value: Status.HIDDEN, label: messages("status.hidden") },
  ];
  return <Select options={options} />;
};
