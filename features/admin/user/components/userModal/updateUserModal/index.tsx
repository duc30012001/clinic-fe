import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";
import { userApi } from "../../../api";
import { UpdateUserPayload, User } from "../../../types";
import UserForm from "./updateUserForm";

interface UpdateUserModalProps {
  closeModal: () => void;
  isOpen: boolean;
  getListData: () => void;
  dataEdit?: User;
}

export const UpdateUserModal = ({
  closeModal,
  isOpen,
  getListData,
  dataEdit,
}: UpdateUserModalProps) => {
  const { messages } = useTranslate();
  const userId = dataEdit?.id || "";

  async function onSubmit(values: UpdateUserPayload) {
    const isSuccess = await userApi.updateUser(userId, values);
    if (isSuccess) {
      closeModal();
      getListData();
    }
  }

  return (
    <Modal
      title={messages("common.edit")}
      isOpen={isOpen}
      closeModal={closeModal}
      footer={null}
    >
      <UserForm onSubmit={onSubmit} dataEdit={dataEdit} />
    </Modal>
  );
};
