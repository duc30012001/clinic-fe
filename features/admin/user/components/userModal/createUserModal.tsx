import { InputField } from "@/components/form";
import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";

interface CreateUserModalProps {
  closeModal: () => void;
  isOpen: boolean;
}

export const CreateUserModal = ({
  closeModal,
  isOpen,
}: CreateUserModalProps) => {
  const { messages } = useTranslate();
  return (
    <Modal
      title={messages("common.create")}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <form>
        <InputField name="email" label={messages("common.email")} required />
      </form>
    </Modal>
  );
};
