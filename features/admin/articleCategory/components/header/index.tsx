import { useTranslate } from "@/hooks";
import { Button } from "@/libs/button";
import { TypeOpenModal } from "../..";
import { ArticleCategoryModal } from "../../enums";

type Props = {
  openModal: TypeOpenModal;
};

const UserHeader = ({ openModal }: Props) => {
  const { messages } = useTranslate();
  return (
    <div>
      <Button primary onClick={() => openModal(ArticleCategoryModal.CREATE)}>
        {messages("common.create")}
      </Button>
    </div>
  );
};

export default UserHeader;
