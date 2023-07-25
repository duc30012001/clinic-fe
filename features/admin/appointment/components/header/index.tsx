import { useTranslate } from "@/hooks";
import { Button } from "@/libs/button";
import { TypeOpenModal } from "../..";
import { AppointmentModal } from "../../enums";

type Props = {
  openModal: TypeOpenModal;
};

const UserHeader = ({ openModal }: Props) => {
  const { messages } = useTranslate();
  return (
    <div>
      <Button primary onClick={() => openModal(AppointmentModal.CREATE)}>
        {messages("common.create")}
      </Button>
    </div>
  );
};

export default UserHeader;
