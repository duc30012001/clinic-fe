import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";
import { userApi } from "../../../api";
import { CreateUserPayload } from "../../../types";
import UserForm from "./createUserForm";

interface CreateUserModalProps {
  closeModal: () => void;
  isOpen: boolean;
  getListData: () => void;
}

export const CreateUserModal = ({
  closeModal,
  isOpen,
  getListData,
}: CreateUserModalProps) => {
  const { messages } = useTranslate();

  async function onSubmit(values: CreateUserPayload) {
    const isSuccess = await userApi.createUser(values);
    if (isSuccess) {
      closeModal();
      getListData();
    }
  }

  return (
    <Modal
      title={messages("common.create")}
      isOpen={isOpen}
      closeModal={closeModal}
      footer={null}
    >
      <UserForm onSubmit={onSubmit} />
    </Modal>
  );
};
